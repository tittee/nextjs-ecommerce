import React from 'react';
import { Heading2, Heading3 } from '@common/Heading';
import style from './Product.module.scss';
import { clsx } from 'clsx';
import { Body3, Body2 } from '@common/Body';
import ImageCommon from '@common/Image';
import Link from 'next/link';

const Product = () => {
  return (
    <div className={clsx('block', style.Product__Box)}>
      <div className={clsx('relative', style.Product__Box__Image)}>
        <div className={clsx(style.Product__Box__Warranty)}>
          <ImageCommon
            src="/assets/svgs/product/trusted-by-swopmart-badge.svg"
            alt="trusted by swopmart"
            width={63}
            height={22}
          />
        </div>
        <div className={clsx(style.Product__Box__Remove)}>
          <Link href="" passHref={false} prefetch={false}>
            <a
              onClick={() => {
                console.log('remove');
              }}
              className="block"
            >
              <ImageCommon
                src="/assets/svgs/product/cross-icon.svg"
                alt="cross icon"
                width={24}
                height={24}
              />
            </a>
          </Link>
        </div>
        <ImageCommon
          src="/assets/svgs/product/dummy.png"
          alt="Product 1"
          width={300}
          height={190}
        />
      </div>
      <div className={clsx('block', style.Product__Box__Content)}>
        <Body2 isBold={true}>ปานกลาง Samsung Galaxy s20 Flex-036A...</Body2>
        <Body3 isBold={true} style={{ display: 'block', marginTop: '0.5rem' }}>
          ฿6,900
        </Body3>
      </div>
    </div>
  );
};

export default Product;
