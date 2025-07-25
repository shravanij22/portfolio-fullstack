'use client';
import { ThemeProvider } from 'next-themes';

export default function MyThemeProvider({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
