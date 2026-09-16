import { useState } from 'react';
import { Mail, Check, Key, Activity } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { TbBrandLinkedin } from 'react-icons/tb';
import { paths } from '@/config/paths';
import type { SectionProps } from '@/types';

export const Contact = (props: SectionProps) => {
  const { isDarkMode } = props;
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(paths.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePgpClick = () => {
    alert('PGP FINGERPRINT:\n4A89 90DF 12C3 A701 B664 91FE 8812 E023');
  };

  return (
    <>
      {/* CONNECT / CALL TO ACTION */}
      <section
        id="connect"
        className={`border-2 p-8 sm:p-12 text-center neo-shadow-black space-y-6 ${
          isDarkMode
            ? 'bg-dark-surface border-dark-on-surface'
            : 'bg-white border-stroke-black'
        }`}
      >
        <div className="max-w-2xl mx-auto space-y-3">
          <span
            className={`font-mono text-xs uppercase tracking-widest font-bold ${
              isDarkMode ? 'text-dark-primary-container' : 'text-accent-cobalt'
            }`}
          >
            [SYS.CONNECT // UPLINK]
          </span>
          <h2
            className={`font-headline text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight font-extrabold ${
              isDarkMode ? 'text-dark-on-surface' : 'text-on-surface'
            }`}
          >
            Let&apos;s Build Systems Together
          </h2>
          <p
            className={`font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-dark-on-surface-variant' : 'text-neutral-500'
            }`}
          >
            Open to technical conversations around backend architecture, distributed data
            pipelines, healthcare systems, and verified agentic AI workflows.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className={`inline-flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-wider font-bold border-2 neo-shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[3px] active:translate-y-[3px] transition-all ${
              isDarkMode
                ? 'border-dark-primary-container bg-dark-primary-container text-dark-on-primary-container'
                : 'border-stroke-black bg-accent-cobalt text-white'
            }`}
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-300" />
            ) : (
              <Mail className="w-4 h-4" />
            )}
            <span>{copied ? 'COPIED TO CLIPBOARD' : paths.social.email}</span>
          </button>

          {/* LinkedIn Button */}
          <a
            className={`inline-flex items-center gap-2 px-5 py-3 border-2 font-mono text-xs uppercase tracking-wider font-bold neo-shadow-sm active:translate-x-[2px] active:translate-y-[2px] transition-all ${
              isDarkMode
                ? 'border-dark-outline-variant bg-dark-surface-lowest text-dark-on-surface hover:border-dark-on-surface'
                : 'border-stroke-black bg-white text-on-surface hover:bg-surface-container'
            }`}
            href={paths.social.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            <TbBrandLinkedin className="w-4 h-4 text-blue-500" />
            LinkedIn
          </a>

          {/* GitHub Button */}
          <a
            className={`inline-flex items-center gap-2 px-5 py-3 border-2 font-mono text-xs uppercase tracking-wider font-bold neo-shadow-sm active:translate-x-[2px] active:translate-y-[2px] transition-all ${
              isDarkMode
                ? 'border-dark-outline-variant bg-dark-surface-lowest text-dark-on-surface hover:border-dark-on-surface'
                : 'border-stroke-black bg-white text-on-surface hover:bg-surface-container'
            }`}
            href={paths.social.github}
            rel="noreferrer"
            target="_blank"
          >
            <FiGithub className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`border-t-2 mt-16 transition-colors ${
          isDarkMode
            ? 'bg-dark-surface-lowest border-dark-outline-variant text-dark-outline'
            : 'bg-surface-container border-stroke-black text-on-surface'
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 sm:px-6 py-8 max-w-[1280px] mx-auto gap-4">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span
              className={`font-mono text-xs uppercase font-bold ${
                isDarkMode ? 'text-dark-on-surface' : 'text-on-surface'
              }`}
            >
              PRATIK // SYS.ENG
            </span>
            <span
              className={`font-mono text-[11px] font-medium ${
                isDarkMode ? 'text-dark-outline' : 'text-neutral-500'
              }`}
            >
              SYS.CORE // PRATIK &copy; {new Date().getFullYear()}. ALL AGENTIC THREADS RESERVED.
              LATENCY: 12MS.
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 font-mono text-xs font-bold">
            <a
              className={`${
                isDarkMode ? 'text-dark-primary hover:underline' : 'text-accent-cobalt hover:underline'
              }`}
              href="#hero"
            >
              TERMINAL
            </a>
            <a
              className={`transition-colors ${
                isDarkMode ? 'text-dark-outline hover:text-dark-on-surface' : 'hover:text-accent-cobalt'
              }`}
              href={paths.social.github}
              rel="noreferrer"
              target="_blank"
            >
              GITHUB
            </a>
            <button
              className={`transition-colors uppercase flex items-center gap-1 ${
                isDarkMode ? 'text-dark-outline hover:text-dark-on-surface' : 'hover:text-accent-cobalt'
              }`}
              onClick={handlePgpClick}
            >
              <Key className="w-3 h-3" />
              PGP_KEY
            </button>
            <span
              className={`flex items-center gap-1 ${
                isDarkMode ? 'text-dark-primary' : 'text-accent-cobalt'
              }`}
            >
              <Activity className="w-3 h-3" />
              STATUS: OK
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
