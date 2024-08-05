import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Miss Glow Beauty',
  description: 'Die neue Beauty-Plattform für selbstbewusste Frauen.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='de'>
      <body
        className={cn(
          'bg-background min-h-screen font antialiased',
          inter.variable
        )}>
        {children}
      </body>
    </html>
  );
}
