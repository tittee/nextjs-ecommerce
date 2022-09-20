import React from 'react';
import { clsx } from 'clsx';
import LinkCommon from '@common/Link';
import ImageCommon from '../../../common/Image/index';
import Logo from '@public/assets/svgs/logo-color.svg';

const Header = () => {
  return (
    <header className="flex items-center h-[4.5rem]">
      <div className={clsx('container container-xl')}>
        <div className="flex items-center gap-[1.5rem]">
          <div className={clsx('flex-none lg:w-[11.25rem]')}>
            <LinkCommon href="/">
              <ImageCommon src={Logo} alt="Logo SWOPMART" width={180} height={36} />
            </LinkCommon>
          </div>
          <div className="flex-none">
            <LinkCommon href="/products">สินค้าทั้งหมด</LinkCommon>
          </div>
          <div className="flex-none">
            <LinkCommon href="/seller">เพิ่มสินค้า</LinkCommon>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
