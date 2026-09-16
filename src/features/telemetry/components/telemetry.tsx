import { Activity } from 'lucide-react';
import type { SectionProps } from '@/types';

const telemetryCards = [
  {
    index: '[01 // EXP_HORIZON]',
    metric: '5+ Years',
    accent: true,
    description: 'Engineering Depth across microservices, streaming CDC & agentic workflows.',
  },
  {
    index: '[02 // RELIABILITY_SLA]',
    metric: '99.9% SLA',
    accent: false,
    description:
      'High-availability production runtime across distributed healthcare & enterprise services.',
  },
  {
    index: '[03 // HEALTH_IMPACT]',
    metric: '200+',
    accent: true,
    description: 'Health Facilities Served across 50+ regional municipalities.',
  },
  {
    index: '[04 // DOMAIN_CORE]',
    metric: 'Backend & AI',
    accent: false,
    description:
      'Architecture Domain centered on determinism, state machines & low-latency execution.',
  },
];

export const Telemetry = (props: SectionProps) => {
  const { isDarkMode } = props;

  return (
    <section id="telemetry" className="space-y-4">
      <div
        className={`flex items-center justify-between border-b-2 pb-2 ${
          isDarkMode ? 'border-dark-outline-variant' : 'border-stroke-black'
        }`}
      >
        <h2
          className={`font-headline text-lg sm:text-xl uppercase tracking-tight font-bold flex items-center gap-2 ${
            isDarkMode ? 'text-dark-on-surface' : 'text-on-surface'
          }`}
        >
          <Activity
            className={`w-5 h-5 ${isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'}`}
          />
          System Telemetry &amp; Engineering Velocity
        </h2>
        <span
          className={`font-mono text-xs font-bold ${
            isDarkMode ? 'text-dark-outline' : 'text-neutral-500'
          }`}
        >
          [INDEX: 01..04]
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {telemetryCards.map((card) => (
          <div
            key={card.index}
            className={`p-5 border-2 transition-all neo-shadow-black ${
              isDarkMode
                ? 'bg-dark-surface border-dark-outline-variant hover:border-dark-on-surface'
                : 'bg-white border-stroke-black hover:bg-surface-container-low'
            }`}
          >
            <div
              className={`font-mono text-[11px] uppercase font-bold ${
                isDarkMode ? 'text-dark-outline' : 'text-neutral-500'
              }`}
            >
              {card.index}
            </div>
            <div
              className={`font-headline text-3xl sm:text-4xl mt-1 font-bold ${
                card.accent
                  ? isDarkMode
                    ? 'text-dark-primary'
                    : 'text-accent-cobalt'
                  : isDarkMode
                  ? 'text-dark-on-surface'
                  : 'text-on-surface'
              }`}
            >
              {card.metric}
            </div>
            <div
              className={`font-sans text-xs mt-1 pt-2 font-medium border-t ${
                isDarkMode
                  ? 'border-dark-outline-variant text-dark-on-surface-variant'
                  : 'border-stroke-black/20 text-on-surface-variant'
              }`}
            >
              {card.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
