import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  title?: string;
  children: React.ReactNode;
  bgColor?: string;
};

const Layout: FC<LayoutProps> = ({ title, children, bgColor = 'bg-gray-200' }) => {
  useEffect(() => {
    document.body.classList.add(bgColor || 'bg-white');
  }, []);

  return (
    <>
      <Head>
        <title>{title ? title : 'SWOPMART Ecommerce'}</title>
        <meta property="og:title" content="SWOPMART Ecommerce" key="title" />
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
