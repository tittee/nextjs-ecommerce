import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { BodyLabel, BodyLink, Body3 } from '@common/Body';
import ButtonCommon from '@common/Button';
import Link from 'next/link';
import { RegisterForm } from '@components/Form';

const LoginForm = ({ isLoginOpen, setIsLoginOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const closeModal = () => {
    setIsLoginOpen(false);
  };

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const openRegisterModal = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsRegisterOpen(true);
  };

  return (
    <>
      <Transition appear show={isLoginOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="relative text-2xl font-bold text-gray-800 pr-6 mb-6"
                  >
                    เข้าสู่ระบบ
                    <Link href="/">
                      <a onClick={closeModal} className="absolute right-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </a>
                    </Link>
                  </Dialog.Title>
                  <div className="mt-2">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-wrap flex-row gap-4"
                    >
                      <div className="flex-none w-full">
                        <BodyLabel
                          htmlFor="email"
                          textColor="text-gray-800"
                          style={{ display: 'block' }}
                        >
                          อีเมล*
                        </BodyLabel>
                        <input
                          type="email"
                          placeholder="โปรดกรอกอีเมล"
                          className="rounded-lg mb-0"
                          {...register('email', { required: true, maxLength: 100 })}
                        />
                      </div>
                      <div className="flex-none w-full">
                        <BodyLabel
                          htmlFor="password"
                          textColor="text-gray-800"
                          style={{ display: 'block' }}
                        >
                          รหัสผ่าน*
                        </BodyLabel>
                        <input
                          type="password"
                          placeholder="โปรดกรอกรหัสผ่าน"
                          className="rounded-lg mb-0"
                          {...register('password', { required: true, maxLength: 80 })}
                        />
                      </div>
                      <div className="flex-none w-full">
                        <ButtonCommon
                          isFullWidth={true}
                          buttonSize="normal"
                          buttonLabel="เข้าสู่ระบบ"
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
                          onClick={() => console.log('click')}
                        />
                      </div>
                    </form>
                    <div className="flex flex-nowrap pt-8 justify-center items-center">
                      <Body3
                        textColor="text-gray-800"
                        style={{ display: 'block', fontSize: '0.875rem', lineHeight: '1.1875rem' }}
                      >
                        ยังไม่มีบัญชี
                      </Body3>
                      <Link href="/">
                        <a onClick={openRegisterModal}>
                          <BodyLink
                            textColor="text-blue-800"
                            isBold={true}
                            style={{ display: 'block', marginLeft: '0.25rem' }}
                          >
                            สมัครสมาชิก
                          </BodyLink>
                        </a>
                      </Link>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <RegisterForm isRegisterOpen={isRegisterOpen} setIsRegisterOpen={setIsRegisterOpen} />
    </>
  );
};

export default LoginForm;
