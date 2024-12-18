export type Theme = 'light' | 'dark';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}