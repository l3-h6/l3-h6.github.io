import Image from 'next/image';
import { Mail, MapPin, Radio } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { TbBrandLinkedin } from 'react-icons/tb';
import { paths } from '@/config/paths';
import type { HeroProps } from '@/types';

export const Hero = (props: HeroProps) => {
  const { isDarkMode } = props;

  return (
    <section
      id="hero"
      className={`border-2 p-6 sm:p-10 code-grid-bg relative neo-shadow-black transition-colors ${
        isDarkMode
          ? 'bg-dark-surface border-dark-outline-variant text-dark-on-surface'
          : 'bg-white border-stroke-black text-on-surface'
      }`}
    >
      {/* Top right coordinate badge */}
      <div
        className={`absolute top-0 right-0 px-3 py-1 border-l-2 border-b-2 font-mono text-[10px] sm:text-xs font-bold ${
          isDarkMode
            ? 'bg-dark-surface-high border-dark-outline-variant text-dark-outline'
            : 'bg-surface-container border-stroke-black text-text-muted'
        }`}
      >
        SYS.LOC // 27.67&deg;N 85.32&deg;E [LALITPUR, NP]
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6 sm:pt-4">
        {/* Left Column: Bio & Calls to Action */}
        <div className="lg:col-span-7 space-y-6">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 border font-mono text-xs font-bold ${
              isDarkMode
                ? 'bg-dark-surface-container border-dark-outline-variant text-dark-primary'
                : 'bg-surface-container border-stroke-black text-accent-cobalt'
            }`}
          >
            <span
              className={`w-2 h-2 ${
                isDarkMode ? 'bg-dark-primary-container' : 'bg-accent-cobalt'
              }`}
            ></span>
            BACKEND SYSTEMS &bull; INFRASTRUCTURE &bull; AGENTIC AI
          </div>

          <div className="space-y-2">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-on-surface dark:text-dark-on-surface tracking-tight uppercase font-extrabold leading-none">
              Software
              <br />
              <span
                className={`${
                  isDarkMode ? 'text-dark-primary-container' : 'text-accent-cobalt'
                } underline decoration-4 underline-offset-8`}
              >
                Engineer
              </span>
            </h1>
            <p
              className={`font-mono text-xs sm:text-sm flex items-center gap-1.5 pt-1 font-medium ${
                isDarkMode ? 'text-dark-outline' : 'text-neutral-500'
              }`}
            >
              <MapPin
                className={`w-3.5 h-3.5 ${
                  isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
                }`}
              />
              Lalitpur, Nepal &bull; Backend Systems &amp; Infrastructure
            </p>
          </div>

          <div
            className={`p-4 border-2 leading-relaxed space-y-3 font-sans text-sm sm:text-base ${
              isDarkMode
                ? 'border-dark-outline-variant bg-dark-surface-lowest text-dark-on-surface-variant'
                : 'border-stroke-black bg-surface-container-low text-on-surface-variant'
            }`}
          >
            <p>
              Hi, I&apos;m{' '}
              <strong
                className={
                  isDarkMode ? 'text-dark-on-surface font-semibold' : 'text-on-surface font-bold'
                }
              >
                Pratik Neupane
              </strong>
              . 5+ years building backend and distributed systems with Node.js, NestJS, PostgreSQL,
              Python, Kubernetes, Linux, and AWS.
            </p>
            <p
              className={`text-xs sm:text-sm ${
                isDarkMode ? 'text-dark-outline' : 'text-neutral-500'
              }`}
            >
              Specialized in production-grade Agentic AI workflows, multi-agent orchestration, RAG
              architectures with Vector DBs (Pinecone), and deterministic event-driven distributed
              systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              className={`px-5 py-2.5 font-mono text-xs uppercase tracking-wider font-bold border-2 neo-shadow-blue hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[3px] active:translate-y-[3px] transition-all ${
                isDarkMode
                  ? 'bg-dark-on-surface text-dark-bg border-dark-on-surface'
                  : 'bg-stroke-black text-white border-stroke-black'
              }`}
              href={paths.experience.getHref()}
            >
              View Experience
            </a>
            <a
              className={`p-2.5 border-2 transition-all neo-shadow-sm active:translate-x-[2px] active:translate-y-[2px] ${
                isDarkMode
                  ? 'border-dark-outline-variant bg-dark-surface text-dark-on-surface hover:border-dark-on-surface'
                  : 'border-stroke-black bg-white text-on-surface hover:bg-surface-container'
              }`}
              href={`mailto:${paths.social.email}`}
              title="Email Direct"
              aria-label="Send Email Direct"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              className={`p-2.5 border-2 transition-all neo-shadow-sm active:translate-x-[2px] active:translate-y-[2px] ${
                isDarkMode
                  ? 'border-dark-outline-variant bg-dark-surface text-dark-on-surface hover:border-dark-on-surface'
                  : 'border-stroke-black bg-white text-on-surface hover:bg-surface-container'
              }`}
              href={paths.social.github}
              rel="noreferrer"
              target="_blank"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              className={`p-2.5 border-2 transition-all neo-shadow-sm active:translate-x-[2px] active:translate-y-[2px] ${
                isDarkMode
                  ? 'border-dark-outline-variant bg-dark-surface text-dark-on-surface hover:border-dark-on-surface'
                  : 'border-stroke-black bg-white text-on-surface hover:bg-surface-container'
              }`}
              href={paths.social.linkedin}
              rel="noreferrer"
              target="_blank"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <TbBrandLinkedin className="w-4 h-4" />
            </a>
            <span
              className={`font-mono text-xs ml-auto self-center font-bold flex items-center gap-1.5 ${
                isDarkMode ? 'text-dark-outline' : 'text-neutral-500'
              }`}
            >
              <Radio
                className={`w-3.5 h-3.5 animate-pulse ${
                  isDarkMode ? 'text-dark-primary-container' : 'text-accent-cobalt'
                }`}
              />
              STATUS:{' '}
              <span
                className={
                  isDarkMode ? 'text-dark-primary-container font-bold' : 'text-accent-cobalt font-bold'
                }
              >
                AVAILABLE
              </span>
            </span>
          </div>
        </div>

        {/* Right Column: Neobrutalist Kernel Image Card */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div
            className={`w-full max-w-[360px] border-2 p-3 neo-shadow-black relative ${
              isDarkMode
                ? 'bg-dark-surface-lowest border-dark-on-surface'
                : 'bg-white border-stroke-black'
            }`}
          >
            <div
              className={`flex justify-between items-center pb-2 mb-2 border-b-2 font-mono text-[11px] font-bold ${
                isDarkMode
                  ? 'border-dark-outline-variant text-dark-outline'
                  : 'border-stroke-black text-text-muted'
              }`}
            >
              <span>[KERNEL.IMG_ID: 8841-A]</span>
              <span
                className={`${
                  isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
                } flex items-center gap-1 font-bold`}
              >
                <span
                  className={`w-2 h-2 rounded-full animate-pulse ${
                    isDarkMode ? 'bg-dark-primary' : 'bg-accent-electric'
                  }`}
                ></span>
                LIVE
              </span>
            </div>

            <div
              className={`relative w-full aspect-square border-2 overflow-hidden ${
                isDarkMode
                  ? 'border-dark-outline-variant bg-dark-surface-container'
                  : 'border-stroke-black bg-surface-container'
              }`}
            >
              <Image
                src="/images/pratik.jpeg"
                alt="Pratik Neupane Systems Engineer portrait"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                priority
                className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
              <div
                className={`absolute inset-x-0 bottom-0 p-2 border-t-2 flex justify-between font-mono text-xs font-bold ${
                  isDarkMode
                    ? 'bg-dark-bg/90 border-dark-outline-variant text-dark-on-surface'
                    : 'bg-white/95 border-stroke-black text-on-surface'
                }`}
              >
                <span>SYS.CORE // PRATIK</span>
                <span className={isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'}>
                  UID: 0x4F92
                </span>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-[11px] pt-1">
              <div
                className={`p-1.5 border font-medium ${
                  isDarkMode
                    ? 'border-dark-outline-variant bg-dark-surface text-dark-outline'
                    : 'border-stroke-black bg-surface-container-low text-neutral-500'
                }`}
              >
                ARCH:{' '}
                <span
                  className={
                    isDarkMode ? 'text-dark-on-surface font-bold' : 'text-on-surface font-bold'
                  }
                >
                  x86_64 / ARM64
                </span>
              </div>
              <div
                className={`p-1.5 border font-medium ${
                  isDarkMode
                    ? 'border-dark-outline-variant bg-dark-surface text-dark-outline'
                    : 'border-stroke-black bg-surface-container-low text-neutral-500'
                }`}
              >
                LOC:{' '}
                <span
                  className={
                    isDarkMode ? 'text-dark-on-surface font-bold' : 'text-on-surface font-bold'
                  }
                >
                  Lalitpur, NP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
