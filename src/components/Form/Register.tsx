import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { BodyLabel, BodyLink, Body3 } from '@common/Body';
import ButtonCommon from '@common/Button';
import Link from 'next/link';

const RegisterForm = ({ isRegisterOpen, setIsRegisterOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const closeModal = () => {
    setIsRegisterOpen(false);
  };

  return (
    <Transition appear show={isRegisterOpen} as={Fragment}>
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
                  สมัครสมาชิก
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
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap flex-row gap-4">
                    <div className="flex w-full gap-4">
                      <div className="flex-none w-1/2">
                        <BodyLabel
                          htmlFor="firstName"
                          textColor="text-gray-800"
                          style={{ display: 'block' }}
                        >
                          ชื่อ*
                        </BodyLabel>
                        <input
                          type="text"
                          placeholder="First name"
                          className="rounded-lg mb-0"
                          {...register('firstName', {
                            required: true,
                            maxLength: 80,
                            pattern: /asasas/i,
                          })}
                        />
                      </div>
                      <div className="flex-none w-1/2">
                        <BodyLabel
                          htmlFor="lastName"
                          textColor="text-gray-800"
                          style={{ display: 'block' }}
                        >
                          นามสกุล*
                        </BodyLabel>
                        <input
                          type="text"
                          placeholder="Last name"
                          className="rounded-lg mb-0"
                          {...register('lastName', {
                            required: true,
                            maxLength: 80,
                            pattern: /asasas/i,
                          })}
                        />
                      </div>
                    </div>

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
                        {...register('email', {
                          required: true,
                          pattern: /^\S+@\S+$/i,
                          maxLength: 100,
                        })}
                      />
                    </div>

                    <div className="flex-none w-full">
                      <BodyLabel
                        htmlFor="email"
                        textColor="text-gray-800"
                        style={{ display: 'block' }}
                      >
                        รหัสผ่าน*
                      </BodyLabel>
                      <input
                        type="password"
                        placeholder="Password"
                        className="rounded-lg mb-0"
                        {...register('Password', { required: true, maxLength: 80 })}
                      />
                    </div>

                    <div className="flex-none w-full">
                      <BodyLabel
                        htmlFor="email"
                        textColor="text-gray-800"
                        style={{ display: 'block' }}
                      >
                        ยืนยันรหัสผ่าน*
                      </BodyLabel>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="rounded-lg mb-0"
                        {...register('Confirm Password', { required: true })}
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
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default RegisterForm;
