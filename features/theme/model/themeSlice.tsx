import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'light' | 'dark';

interface ThemeState {
  value: Theme;
  initialized: boolean;
}

const initialState: ThemeState = {
  value: 'dark',
  initialized: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    hydrateTheme(state, action: PayloadAction<Theme>) {
      state.value = action.payload;
      state.initialized = true;
    },

    setTheme(state, action: PayloadAction<Theme>) {
      state.value = action.payload;
    },

    toggleTheme(state) {
      state.value = state.value === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { hydrateTheme, setTheme, toggleTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
