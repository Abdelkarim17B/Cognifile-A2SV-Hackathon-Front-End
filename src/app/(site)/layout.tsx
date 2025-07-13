import type { Metadata } from 'next';
import { ThemeProviders } from '@/src/providers/theme';
import '@/src/styles/globals.css';

export const metadata: Metadata = {
  title: 'Cognifile',
  description:
    'Cognifile is a cloud storage service that allows you to store and share files with ease, and access them from anywhere!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans dark:bg-cf-dark text-cf-dark dark:text-white bg-white transition-colors duration-300 ease-in-out">
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
