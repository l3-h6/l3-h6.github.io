import type { Metadata, Viewport } from 'next';
import { AppProvider } from '@/app/provider';
import { siteConfig } from '@/config/site';
import '@/styles/globals.css';

export const viewport: Viewport = {
  themeColor: '#131315',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-dark-bg text-dark-on-surface antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
