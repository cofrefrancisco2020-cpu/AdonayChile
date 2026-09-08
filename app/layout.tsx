import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Tapicería Adonay | Fabricación y restauración en Puerto Natales',
  description:
    'Fabricación de muebles a medida, retapizado y restauración artesanal en Puerto Natales, Chile.',
  icons: { icon: '/assets/logo-adonay.jpg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CL">
      <body className={`${manrope.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  );
}
