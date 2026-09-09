'use client';

import { useForm } from 'react-hook-form';
import styles from './LoginForm.module.css';
import { Button, Input, Error } from '@/shared/ui';

interface LoginFormValues {
  email: string;
  password: string;
}

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ mode: 'onChange' });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={styles.title}>Login in to HomeGym</h3>
      <div className={styles.fields}>
        <Input
          id="inputEmail"
          type="email"
          placeholder="Example@mail.com"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby="email-error"
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /^[a-zA-Z0-9.-]+@[a-zA-Z0-9_]+\.[a-z]{2,6}$/i,
              message: 'Please provide a valid email address',
            },
          })}
        />
        <Error id="email-error" text={errors.email?.message} />

        <Input
          id="inputPassword"
          type="password"
          placeholder="Your password"
          autoComplete="current-password"
          aria-invalid={Boolean(errors.password)}
          aria-describedby="password-error"
          {...register('password', {
            required: 'Enter your password',
            minLength: {
              value: 5,
              message: 'Minimum 5 characters',
            },
            maxLength: {
              value: 30,
              message: 'Maximum 30 characters',
            },
          })}
        />
        <Error id="password-error" text={errors.password?.message} />
      </div>
      <Button type="submit">Login</Button>
      {/* <Error text="Ошибка при входе от бэка" /> */}
    </form>
  );
}
