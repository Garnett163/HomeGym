'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { hydrateTheme, type Theme } from '@/features/theme';

function isTheme(value: string | unknown): value is Theme {
  return value === 'light' || value === 'dark';
}

export function ThemeSync() {
  const dispatch = useAppDispatch();

  const theme = useAppSelector(state => state.theme.value);
  const initialized = useAppSelector(state => state.theme.initialized);

  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme;

    dispatch(hydrateTheme(isTheme(currentTheme) ? currentTheme : 'dark'));
  }, [dispatch]);

  useEffect(() => {
    if (!initialized) {
      return;
    }

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    localStorage.setItem('theme', theme);
  }, [theme, initialized]);

  return null;
}
