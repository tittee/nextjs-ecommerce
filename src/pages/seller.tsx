import React from 'react';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import Layout from '@components/Layout';
import axios from 'axios';
import { useForm } from 'react-hook-form';
// import Service from 'lib/service';
import { Heading2 } from '@common/Heading';
import ButtonCommon from '@common/Button';

interface HomeProps {
  banner: object;
  products: object;
}
const Seller: NextPage = ({ banner, products }: HomeProps) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Layout title="หน้าแรก SWOPMART">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mt-10 mx-auto">
          <div className="p-4 md:p-6 bg-white rounded-lg">
            <Heading2>สินค้าและรายละเอียด</Heading2>

            <div className="w-full mt-6">
              <div className="flex flex-wrap">
                <label className="flex-none w-full">ชื่อสินค้า*</label>
                <input
                  type="text"
                  placeholder="ระบุชื่อสินค้า"
                  {...register('firstName', {
                    required: true,
                    maxLength: 20,
                  })}
                />
              </div>
              <div className="flex flex-wrap gap-6">
                <div className="flex-1">
                  <label>ราคา</label>
                  <input
                    type="text"
                    placeholder="ระบุราคา"
                    {...register('price', { pattern: /^[A-Za-z]+$/i })}
                  />
                </div>
                <div className="flex-1">
                  <label>เลือกสภาพสินค้า*</label>
                  <select {...register('tag')}>
                    <option value="">ระบุสภาพสินค้า</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-6 mx-auto">
          <div className="flex flex-wrap gap-2 w-full justify-center md:justify-end">
            <div className="flex-none">
              <ButtonCommon
                buttonSize="normal"
                buttonLabel="ยกเลิก"
                buttonType="outline"
                fontWeight="bold"
                style={{
                  textColor: 'button',
                  backgroundColor: '',
                }}
                hoverStyle={{
                  textColor: 'button',
                  backgroundColor: 'white',
                }}
              />
            </div>
            <div className="flex-none">
              <ButtonCommon
                buttonSize="normal"
                buttonLabel="บันทึก"
                buttonType="primary"
                fontWeight="bold"
                style={{
                  textColor: 'white',
                  backgroundColor: 'button',
                }}
                hoverStyle={{
                  textColor: 'orange',
                  backgroundColor: 'button',
                }}
              />
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const nestjs = new Service();
  // const [banner] = await Promise.all([nestjs.getBanner()]);

  const banner = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/banner`).then((response) => {
    return response.data[0];
  });

  const products = await axios
    .get(process.env.NEXT_PUBLIC_API_URL + `/product`)
    .then((response) => {
      return response.data[0];
    });

  return {
    props: {
      banner,
      products,
    },
    revalidate: 1, // In seconds
  };
};

export default Seller;
