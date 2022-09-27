import React, { useState, useRef } from 'react';
import { clsx } from 'clsx';
import LinkCommon from '@common/Link';
import ImageCommon from '../../../common/Image/index';
import Logo from '@public/assets/svgs/logo-color.svg';
import style from './Header.module.scss';
import Modal from '@components/Modal';
import Dropdown from '@components/Dropdown';
import ButtonCommon from '@common/Button';
import { LoginForm } from '@components/Form';

const Header = () => {
  const login = false;

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  return (
    <>
      <header className={clsx('flex items-center h-[4.5rem]', style.Header)}>
        <div className={clsx('container container-xl')}>
          <div className="flex">
            <div className="flex flex-auto items-center gap-[0.5rem] md:gap-[1.5rem]">
              <div className={clsx('flex-none w-[6.5rem] lg:w-[11.25rem]')}>
                <LinkCommon href="/">
                  <ImageCommon src={Logo} alt="Logo SWOPMART" width={180} height={36} />
                </LinkCommon>
              </div>
              <div className="flex-none">
                <LinkCommon href="/products" className={clsx(style.Header__Link)}>
                  สินค้าทั้งหมด
                </LinkCommon>
              </div>
              <div className="flex-none">
                <LinkCommon href="/seller" className={clsx(style.Header__Link)}>
                  เพิ่มสินค้า
                </LinkCommon>
              </div>
            </div>
            <div className="relative flex flex-none">
              {!login ? (
                <ButtonCommon
                  style={{ textColor: 'grayDark', backgroundColor: 'white' }}
                  hoverStyle={{ textColor: 'white', backgroundColor: 'grayDark' }}
                  buttonLabel="เข้าสู่ระบบ"
                  buttonSize="normal"
                  btnStyle="w-[6rem]"
                  onClick={openLoginModal}
                />
              ) : (
                <Dropdown />
              )}
            </div>
          </div>
        </div>
      </header>
      <LoginForm isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />
    </>
  );
};

export default Header;
