import React, { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useForm, Resolver } from 'react-hook-form';
import { BodyLabel, BodyLink, Body3 } from '@common/Body';
import ButtonCommon from '@common/Button';
import Link from 'next/link';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Service from 'lib/service';

type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstname ? values : {},
    errors: !values.firstname
      ? {
          firstname: {
            type: 'required',
            message: 'This is required.',
          },
          lastname: {
            type: 'required',
            message: 'This is required.',
          },
          email: {
            type: 'required',
            message: 'This is required.',
          },
          password: {
            type: 'required',
            message: 'This is required.',
          },
          confirmPassword: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  };
};

const RegisterForm = ({ isRegisterOpen, setIsRegisterOpen }) => {
  const nestjs = new Service();
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(4, 'Password length should be at least 4 characters')
      .max(12, 'Password cannot exceed more than 12 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .min(4, 'Password length should be at least 4 characters')
      .max(12, 'Password cannot exceed more than 12 characters')
      .oneOf([Yup.ref('password')], 'Passwords do not match'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    mode: 'onTouched',
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    const { firstname, lastname, email, password } = data;
    nestjs.signUp({ firstname, lastname, email, password }).then((res) => {
      console.log(res);
    });
  };

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
                          htmlFor="firstname"
                          textColor="text-gray-800"
                          style={{ display: 'block' }}
                        >
                          ชื่อ*
                        </BodyLabel>
                        <input
                          type="text"
                          placeholder="First name"
                          className="rounded-lg mb-0"
                          {...register('firstname', {
                            required: true,
                            maxLength: 20,
                          })}
                        />
                      </div>
                      <div className="flex-none w-1/2">
                        <BodyLabel
                          htmlFor="lastname"
                          textColor="text-gray-800"
                          style={{ display: 'block' }}
                        >
                          นามสกุล*
                        </BodyLabel>
                        <input
                          type="text"
                          placeholder="Last name"
                          className="rounded-lg mb-0"
                          {...register('lastname', {
                            required: true,
                            maxLength: 20,
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
                        name="email"
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
                    {errors.email?.type === 'required' && (
                      <p className="alerts">{errors.email?.message}</p>
                    )}

                    <div className="flex-none w-full">
                      <BodyLabel
                        htmlFor="email"
                        textColor="text-gray-800"
                        style={{ display: 'block' }}
                      >
                        รหัสผ่าน*
                      </BodyLabel>
                      <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="rounded-lg mb-0"
                        {...register('password', {
                          required: true,
                          minLength: { value: 8, message: 'You must specify a password' },
                        })}
                      />

                      {errors.password?.type === 'required' && (
                        <p role="alert">You must specify a password</p>
                      )}
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
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        className="rounded-lg mb-0"
                        {...register('confirmPassword', {
                          required: true,
                        })}
                      />

                      {errors.confirmPassword?.type === 'required' && (
                        <p className="alerts">{errors.confirmPassword?.message}</p>
                      )}
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
