// app/layout.js
import './globals.css';
import { Outfit, Ovo } from 'next/font/google';
import ClientLayout from './ClientLayout';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const ovo = Ovo({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: 'Personal Portfolio',
  description: 'Shravani Jadhav - Fullstack Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
