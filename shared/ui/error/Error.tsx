import styles from './Error.module.css';

interface ErrorProps {
  id?: string;
  text?: string;
}

export function Error({ id, text }: ErrorProps) {
  return (
    <span id={id} className={styles.error} aria-live="polite">
      {text ?? ''}
    </span>
  );
}
