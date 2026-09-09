import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';

import { toggleTheme } from './themeSlice';

export function useTheme() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.theme.value);

  const toggle = () => {
    dispatch(toggleTheme());
  };

  return {
    theme,
    toggleTheme: toggle,
  };
}
