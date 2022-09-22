import React from 'react';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import Layout from '@components/Layout';
import { clsx } from 'clsx';
import { Body1, Body2, Body3 } from '@common/Body';
import ImageCommon from '@common/Image';
import BannerWithContent from '@components/Banner/BannerWithContent';
import checkIcon from '@public/assets/svgs/ads-banner/check-icon.svg';
import axios from 'axios';
// import Service from 'lib/service';

interface HomeProps {
  banner: object;
}
const Home: NextPage = ({ banner }: HomeProps) => {
  return (
    <Layout title="หน้าแรก SWOPMART">
      <div className={clsx('container py-10')}>
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
      <div className="container">
        <BannerWithContent key={banner.id} {...banner}>
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
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const nestjs = new Service();
  // const [banner] = await Promise.all([nestjs.getBanner()]);
  const banner = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/banner`).then((response) => {
    return response.data[0];
  });

  return {
    props: {
      banner,
    },
    revalidate: 1, // In seconds
  };
};

export default Home;
