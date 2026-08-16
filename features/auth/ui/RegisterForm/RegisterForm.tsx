'use client';

import { useForm } from 'react-hook-form';
import styles from './RegisterForm.module.css';
import { Button } from '@/shared/ui';

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const password = watch('password');

  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.header}>
        <h2>Регистрация</h2>
        <p>Создайте аккаунт HomeGym</p>
      </div>

      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor="name">Имя</label>

          <input
            id="name"
            type="text"
            placeholder="Ваше имя"
            {...register('name', {
              required: 'Введите имя',
              minLength: {
                value: 2,
                message: 'Минимум 2 символа',
              },
            })}
          />

          {errors.name && <span className={styles.error}>{errors.name.message}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            placeholder="example@mail.com"
            {...register('email', {
              required: 'Введите email',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Введите корректный email',
              },
            })}
          />

          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Пароль</label>

          <input
            id="password"
            type="password"
            placeholder="Введите пароль"
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

        <div className={styles.field}>
          <label htmlFor="confirmPassword">Подтвердите пароль</label>

          <input
            id="confirmPassword"
            type="password"
            placeholder="Повторите пароль"
            {...register('confirmPassword', {
              required: 'Подтвердите пароль',
              validate: value => value === password || 'Пароли не совпадают',
            })}
          />

          {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword.message}</span>}
        </div>
      </div>

      <Button type="submit">Зарегистрироваться</Button>
    </form>
  );
}
