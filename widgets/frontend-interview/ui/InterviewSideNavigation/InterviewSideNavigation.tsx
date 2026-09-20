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
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '');

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
      const sections = items.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

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
