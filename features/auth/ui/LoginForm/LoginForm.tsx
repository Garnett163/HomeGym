'use client';

import { useForm } from 'react-hook-form';
import styles from './LoginForm.module.css';
import { Button, Input } from '@/shared/ui';

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
        <div className={styles.field}>
          <Input
            id="inputEmail"
            type="email"
            placeholder="Example@mail.com"
            minLength={5}
            maxLength={30}
            required
            {...register('email', {
              required: 'Поле обязательно для заполнения',
              pattern: {
                value: /^[a-zA-Z0-9.-]+@[a-zA-Z0-9_]+\.[a-z]{2,6}$/i,
                message: 'Пожалуйста, укажите корректный электронный адрес',
              },
              minLength: {
                value: 5,
                message: 'Введите не менее 5 символов',
              },
              maxLength: {
                value: 30,
                message: 'Введите менее 30 символов',
              },
            })}
          />

          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>

        <div className={styles.field}>
          <Input
            id="inputPassword"
            type="password"
            placeholder="Your password"
            required
            minLength={3}
            maxLength={30}
            {...register('password', {
              required: 'Введите пароль',
              minLength: {
                value: 6,
                message: 'Минимум 6 символов',
              },
            })}
          />
          {errors.password && <span className={styles.error}>{errors.password.message}</span>}
        </div>
      </div>
      {/* <span>Ошибка при входе от бэка</span> */}
      <Button type="submit">Login</Button>
      <div>
        <p>Ещё не зарегистрированы?</p>
        <p>Регистрация!</p>
      </div>
    </form>
  );
}
