import { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

export function Input({ id, className, ...props }: InputProps) {
  return <input id={id} className={`${styles.input} ${className ?? ''}`} {...props} />;
}
