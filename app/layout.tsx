import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from './providers/StoreProvider';
import { THEME_INIT_SCRIPT } from '@/features/theme';
import { PageContainer } from '@/shared/ui';
import { Header } from '@/widgets';

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
      <head>
        <script id="theme-initializer" dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <StoreProvider>
          <PageContainer>
            <Header />
            <main className="content">{children}</main>
          </PageContainer>
        </StoreProvider>
      </body>
    </html>
  );
}
