import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/features/theme/model/ThemeProvider';

export const metadata: Metadata = {
  title: 'HomeGym — персональный тренажёрный зал',
  description: 'HomeGym — приложение для планирования тренировок, отслеживания прогресса и эффективных занятий дома.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
