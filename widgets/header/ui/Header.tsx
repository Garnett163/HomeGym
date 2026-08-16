'use client';

import styles from './Header.module.css';
import { useTheme } from '@/features/theme/model/ThemeProvider';
import { useToggle } from '@/shared/lib/hooks/useToogle';
import Link from 'next/link';
import { Button, Modal } from '@/shared/ui';
import { SunLightIcon, MoonIcon, UserProfileIcon } from '@/shared/ui/icons';
import { LoginForm } from '@/features/index';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { value: isLoginOpen, open: openLogin, close: closeLogin } = useToggle();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            HomeGym
          </Link>
          <div className={styles.userActions}>
            <Button onClick={openLogin}>
              <UserProfileIcon width={24} height={24} />
              Login
            </Button>
            <Button className={styles.themeToggle} onClick={toggleTheme} icon>
              {theme === 'dark' ? <SunLightIcon width={24} height={24} /> : <MoonIcon width={24} height={24} />}
            </Button>
          </div>
        </div>
      </header>
      <Modal open={isLoginOpen} onClose={closeLogin}>
        <LoginForm />
      </Modal>
    </>
  );
}
