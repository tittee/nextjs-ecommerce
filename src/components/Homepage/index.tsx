import React from 'react';
import { clsx } from 'clsx';
import { Body1, Body3 } from '@common/Body';
import ImageCommon from '@common/Image';

const HomePageTitle = () => {
  return (
    <div>
      <h1 className={clsx('leading-17 font-bold text-[2.75rem] text-center')}>
        แพลตฟอร์มซื้อ-ขายสินค้าไอทีมือสอง
      </h1>
      <div className="text-center pt-[0.313rem]">
        <Body1 isBold={false} style={{ textAlign: 'center' }}>
          ที่ที่ดีที่สุดในการซื้อสินค้าไอทีมือสองที่คุณรัก
        </Body1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-[0.5rem] md:gap-[1.563rem] py-4">
        <div className="flex-none">
          <Body3 isBold={false}>
            <ImageCommon
              src="/assets/svgs/header/tag-icon.svg"
              alt="สินค้าสุดคุ้ม"
              width={20}
              height={20}
              quality={50}
              style={{
                display: 'inline-block',
                filter: 'grayscale(100%)',
                paddingRight: '0.25rem',
              }}
            />
            สินค้าสุดคุ้ม
          </Body3>
        </div>
        <div className="flex-none">
          <Body3 isBold={false}>
            <ImageCommon
              src="/assets/svgs/header/payment-security-icon.svg"
              alt="ชำระเงินปลอดภัย"
              width={20}
              height={20}
              quality={50}
              style={{
                display: 'inline-block',
                filter: 'grayscale(100%)',
                paddingRight: '0.25rem',
              }}
            />
            ชำระเงินปลอดภัย
          </Body3>
        </div>
        <div className="flex-none">
          <Body3 isBold={false}>
            <ImageCommon
              src="/assets/svgs/header/card-installment-icon.svg"
              alt="บริการผ่อนชำระ"
              width={24}
              height={24}
              quality={50}
              style={{
                display: 'inline-block',
                filter: 'grayscale(100%)',
                paddingRight: '0.25rem',
              }}
            />
            บริการผ่อนชำระ
          </Body3>
        </div>
      </div>
    </div>
  );
};

export default HomePageTitle;
