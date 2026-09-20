import type { ComponentProps } from 'react';
import Link from 'next/link';

import styles from './Button.module.css';

type ButtonLinkProps = ComponentProps<typeof Link> & {
  icon?: boolean;
};

export function ButtonLink({ children, className, icon = false, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={`
        ${styles.button}
        ${icon ? styles.icon : ''}
        ${className ?? ''}
      `}
      {...props}
    >
      {children}
    </Link>
  );
}
