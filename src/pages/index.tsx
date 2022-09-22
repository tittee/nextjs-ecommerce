import React from 'react';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import Layout from '@components/Layout';
import Banner from '@components/Banner';
import HomePageTitle from '@components/Homepage';
import axios from 'axios';
// import Service from 'lib/service';

interface HomeProps {
  banner: object;
}
const Home: NextPage = ({ banner }: HomeProps) => {
  return (
    <Layout title="หน้าแรก SWOPMART">
      <div className="container py-4 md:py-10">
        <HomePageTitle />
      </div>
      <div className="container">
        <Banner {...banner} />
      </div>
      <div className="container py-4 md:py-12">
        <h2>สินค้าของฉัน</h2>
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
