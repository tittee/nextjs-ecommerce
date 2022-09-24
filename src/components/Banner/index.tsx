import React from 'react';
import BannerWithContent from './BannerWithContent';
import { Body1, Body2, Body3 } from '@common/Body';
import ImageCommon from '@common/Image';
import checkIcon from '@public/assets/svgs/ads-banner/check-icon.svg';

const Banner = (props) => {
  return (
    <BannerWithContent {...props}>
      <div className="flex flex-wrap justify-center md:justify-start">
        <Body2
          isBold={true}
          textColor="text-white"
          style={{
            background: '#12284C',
            borderRadius: '0.5rem',
            padding: '0.25rem 0.75rem',
            width: '5.188rem',
            lineHeight: '2.125rem',
            textAlign: 'center',
            marginRight: '0.75rem',
          }}
        >
          ฝาก-ขาย
        </Body2>
        <Body1
          isBold={true}
          style={{ textAlign: 'center', fontSize: '1.75rem' }}
          textColor="text-white"
        >
          ตัวกลางช่วยขายสินค้า ให้ชีวิตคุณง่ายขึ้น
        </Body1>
      </div>
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-[0.5rem] md:gap-[1.563rem] pt-[0.5rem]">
        <div className="flex-none">
          <Body3 isBold={false} textColor="text-white">
            <ImageCommon
              src={checkIcon}
              alt="ไม่ต้องขายเอง มีเจ้าหน้าที่ช่วยขาย"
              width={20}
              height={20}
              quality={50}
              style={{
                display: 'inline-block',
                filter: 'grayscale(100%)',
                paddingRight: '0.25rem',
              }}
            />
            ไม่ต้องขายเอง มีเจ้าหน้าที่ช่วยขาย
          </Body3>
        </div>
        <div className="flex-none">
          <Body3 isBold={false} textColor="text-white">
            <ImageCommon
              src={checkIcon}
              alt="แนะนำราคาขาย"
              width={20}
              height={20}
              quality={50}
              style={{
                display: 'inline-block',
                filter: 'grayscale(100%)',
                paddingRight: '0.25rem',
              }}
            />
            แนะนำราคาขาย
          </Body3>
        </div>
        <div className="flex-none">
          <Body3 isBold={false} textColor="text-white">
            <ImageCommon
              src={checkIcon}
              alt="ตรวจสอบสภาพมาตรฐาน"
              width={24}
              height={24}
              quality={50}
              style={{
                display: 'inline-block',
                filter: 'grayscale(100%)',
                paddingRight: '0.25rem',
              }}
            />
            ตรวจสอบสภาพมาตรฐาน
          </Body3>
        </div>
      </div>
    </BannerWithContent>
  );
};

export default Banner;
