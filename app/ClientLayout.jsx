'use client';

import { useEffect, useState } from 'react';

export default function ClientLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage or system preference
  useEffect(() => {
    const darkPreference =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    setIsDarkMode(darkPreference);
  }, []);

  // Apply theme to <html> tag and save to localStorage
  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      root.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  // Provide the state to children (like Navbar)
  return typeof children === 'function'
    ? children({ isDarkMode, setIsDarkMode })
    : children;
}
