'use client';

import styles from './Header.module.css';
import { useAppDispatch } from '@/shared/store/hooks';
import { useToggle } from '@/shared/lib/hooks/useToogle';
import { toggleTheme } from '@/features/theme/model/themeSlice';
import Link from 'next/link';
import { Button, Modal } from '@/shared/ui';
import { SunLightIcon, MoonIcon, UserProfileIcon } from '@/shared/ui/icons';
import { LoginForm } from '@/features/index';

export function Header() {
  const dispatch = useAppDispatch();
  const { value: isLoginOpen, open: openLogin, close: closeLogin } = useToggle();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            HomeGym
          </Link>
          <div className={styles.userActions}>
            <Button onClick={openLogin} aria-label="Login">
              <UserProfileIcon width={24} height={24} />
              Login
            </Button>
            <Button className={styles.themeToggle} onClick={handleToggleTheme} icon aria-label="Toggle color theme">
              <SunLightIcon className={styles.sunIcon} width={24} height={24} />
              <MoonIcon className={styles.moonIcon} width={24} height={24} />
            </Button>
          </div>
        </div>
      </header>
      <Modal open={isLoginOpen} onClose={closeLogin}>
        <LoginForm />
        <div className={styles.rbg}>
          <p>Ещё не зарегистрированы?</p>
          <p>Регистрация!</p>
        </div>
      </Modal>
    </>
  );
}
