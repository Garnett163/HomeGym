import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from '@/features/theme/model/themeSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
      // auth: authReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
