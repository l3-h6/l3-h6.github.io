'use client';

import { MainLayout } from '@/components/layouts';
import { Hero } from '@/features/hero';
import { Telemetry } from '@/features/telemetry';
import { CoreStack } from '@/features/stack';
import { Experience } from '@/features/experience';
import { Skills } from '@/features/skills';
import { Contact } from '@/features/contact';

export default function HomePage() {
  return (
    <MainLayout>
      {({ isDarkMode }) => (
        <>
          <Hero isDarkMode={isDarkMode} />
          <Telemetry isDarkMode={isDarkMode} />
          <CoreStack isDarkMode={isDarkMode} />
          <Experience isDarkMode={isDarkMode} />
          <Skills isDarkMode={isDarkMode} />
          <Contact isDarkMode={isDarkMode} />
        </>
      )}
    </MainLayout>
  );
}
