import React from 'react';
import { useForm } from 'react-hook-form';
import { BodyLabel } from '@common/Body';
import ButtonCommon from '@common/Button';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap flex-row gap-4">
      <div className="flex-none w-full">
        <BodyLabel htmlFor="email" textColor="text-gray-800" style={{ display: 'block' }}>
          อีเมล*
        </BodyLabel>
        <input
          type="email"
          placeholder="โปรดกรอกอีเมล"
          className="rounded-lg"
          {...register('email', { required: true, maxLength: 100 })}
        />
      </div>
      <div className="flex-none w-full">
        <BodyLabel htmlFor="password" textColor="text-gray-800" style={{ display: 'block' }}>
          รหัสผ่าน*
        </BodyLabel>
        <input
          type="password"
          placeholder="โปรดกรอกรหัสผ่าน"
          className="rounded-lg"
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
  );
};

export default LoginForm;
