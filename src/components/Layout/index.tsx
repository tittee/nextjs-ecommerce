import { FC } from 'react';
import Head from 'next/head';

const Layout: FC = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Head>
        <title>SWOPMART Ecommerce</title>
        <meta property="og:title" content="SWOPMART Ecommerce" key="title" />
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
