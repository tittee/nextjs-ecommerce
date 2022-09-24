import React from 'react';
import style from './Product.module.scss';
import { clsx } from 'clsx';
import { Body3, Body2 } from '@common/Body';
import ImageCommon from '@common/Image';
import Link from 'next/link';
import { ProductProps } from 'interfaces/components';
import Bagde from '@components/Badge';

const Product = ({ id, href, name, tag, price, image }: ProductProps) => {
  const thaiThb = new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(
    price
  );

  return (
    <div key={id} className={clsx('block', style.Product__Box)}>
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
          {...image}
          width={image.width}
          height={image.height}
          style={{ borderRadius: '1.25rem 0.25rem 0 0' }}
        />
      </div>
      <div className={clsx('flex flex-wrap content-between', style.Product__Box__Content)}>
        <Body2
          isBold={true}
          style={{ display: 'inline-block', lineHeight: '1.5rem', width: '100%' }}
        >
          <Bagde tag={tag} /> {name}
        </Body2>
        <Body3 isBold={true} style={{ display: 'block', marginTop: '0.25rem', width: '100%' }}>
          {thaiThb}
        </Body3>
      </div>
    </div>
  );
};

export default Product;
