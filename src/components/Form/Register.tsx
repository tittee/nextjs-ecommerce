import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        {...register('First name', { required: true, maxLength: 80, pattern: /asasas/i })}
      />
      <input
        type="text"
        placeholder="Last name"
        {...register('Last name', { required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="password"
        placeholder="Password"
        {...register('Password', { required: true, maxLength: 80 })}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        {...register('Confirm Password', { required: true })}
      />

      <input type="submit" />
    </form>
  );
};

export default RegisterForm;
