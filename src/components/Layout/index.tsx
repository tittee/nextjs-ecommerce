import React, { FC } from 'react';
import Head from 'next/head';

type LayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title : 'SWOPMART Ecommerce'}</title>
        <meta property="og:title" content="SWOPMART Ecommerce" key="title" />
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
