import styles from './NotFound.module.css';
import Link from 'next/link';

export function NotFound() {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>Страница не найдена</p>
        <Link href="/" className={styles.link}>
          На главную
        </Link>
      </div>
    </main>
  );
}
