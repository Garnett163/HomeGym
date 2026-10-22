'use client';

import { useEffect, useState } from 'react';
import styles from './InterviewSideNavigation.module.css';
import { Button } from '@/shared/ui';

type NavigationItem = {
  id: string;
  title: string;
};

type InterviewSideNavigationProps = {
  items: NavigationItem[];
};

export function InterviewSideNavigation({ items }: InterviewSideNavigationProps) {
  const [activeId, setActiveId] = useState<string>('');

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let nextActiveId = items[0]?.id ?? '';

      for (const item of items) {
        const section = document.getElementById(item.id);

        if (section && section.getBoundingClientRect().top <= 100) {
          nextActiveId = item.id;
        }
      }

      setActiveId(nextActiveId);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  return (
    <nav className={styles.sideNavigation}>
      <ul className={styles.sideNavigationList}>
        {items.map(item => (
          <li key={item.id} className={styles.sideNavigationItem}>
            <Button
              type="button"
              className={`${styles.navigationButton} ${activeId === item.id ? styles.activeNavigationButton : ''}`}
              onClick={() => handleClick(item.id)}
            >
              {item.title}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
