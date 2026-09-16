'use client';

import * as React from 'react';
import { Header } from './header';

type MainLayoutProps = {
  children: (props: { isDarkMode: boolean; handleDarkMode: () => void }) => React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(true);

  const handleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-150 ${
        isDarkMode
          ? 'dark bg-dark-bg text-dark-on-surface selection:bg-dark-primary selection:text-black'
          : 'bg-surface text-on-surface selection:bg-accent-electric selection:text-black'
      }`}
    >
      <div className="min-h-screen code-grid-bg flex flex-col font-sans">
        <Header isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
        <main className="flex-1 max-w-[1680px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-12 sm:space-y-16">
          {children({ isDarkMode, handleDarkMode })}
        </main>
      </div>
    </div>
  );
};
