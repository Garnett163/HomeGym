'use client';

import { useState, type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/shared/store/store';
import { ThemeSync } from '@/features/theme';

interface StoreProviderProps {
  children: ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  const [store] = useState(makeStore);

  return (
    <Provider store={store}>
      <ThemeSync />
      {children}
    </Provider>
  );
}
