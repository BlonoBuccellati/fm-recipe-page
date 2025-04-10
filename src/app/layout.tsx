import type { Metadata } from 'next';
import { Outfit, Young_Serif, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const youngSerif = Young_Serif({
  // variableに指定した変数は、自動で:rootに登録している？
  variable: '--font-young-serif',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Recipe Page',
  description: 'Recipe Page of Frontend Mentor Solution',
  icons: 'favicon-32x32.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${outfit.variable} ${youngSerif.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
