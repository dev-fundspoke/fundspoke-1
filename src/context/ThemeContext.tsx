import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme, ThemeContextType } from '../types/theme';
import { getStoredTheme, storeTheme } from '../utils/theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getStoredTheme());

  useEffect(() => {
    // Apply theme class to document root
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    // Store theme preference
    storeTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(current => current === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};