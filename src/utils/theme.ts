import { Theme } from '../types/theme';

export const THEME_STORAGE_KEY = 'app-theme';

export const getStoredTheme = (): Theme => {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  return (storedTheme as Theme) || 'light';
};

export const storeTheme = (theme: Theme): void => {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
};