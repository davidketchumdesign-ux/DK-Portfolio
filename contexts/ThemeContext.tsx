'use client';

import { type ReactNode, createContext, useContext, useEffect, useState } from 'react';
import type { Theme } from '@/styles/themes';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Retrieve stored theme or default to light
    try {
      const stored = localStorage.getItem('portfolio-theme') as Theme | null;
      const savedTheme = stored || 'light';
      setThemeState(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } catch {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    setMounted(true);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    try {
      localStorage.setItem('portfolio-theme', newTheme);
    } catch {
      // localStorage not available
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
