import React from 'react';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import Layout from '@components/Layout';
import axios from 'axios';
import { useForm } from 'react-hook-form';
// import Service from 'lib/service';
import { Heading2 } from '@common/Heading';

interface HomeProps {
  banner: object;
  products: object;
}
const Seller: NextPage = ({ banner, products }: HomeProps) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Layout title="หน้าแรก SWOPMART">
      <div className="container mt-10 mb-10 mx-auto bg-white">
        <div className="p-4 md:p-6">
          <Heading2>สินค้าและรายละเอียด</Heading2>

          <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex">
                <label>ชื่อสินค้า*</label>
                <input {...register('firstName', { required: true, maxLength: 20 })} />
              </div>
              <div className="flex">
                <div className="flex-1">
                  <label>ราคา</label>
                  <input {...register('price', { pattern: /^[A-Za-z]+$/i })} />
                </div>
                <div className="flex-1">
                  <label>เลือกสภาพสินค้า*</label>
                  <select {...register('tag')}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
                </div>
              </div>
              <input type="submit" />
            </form>
          </div>
        </div>
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
