import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
}

export function Button({ children, className, icon = false, ...props }: ButtonProps) {
  return (
    <button className={`${styles.button} ${icon ? styles.icon : ''} ${className ?? ''}`} {...props}>
      {children}
    </button>
  );
}
