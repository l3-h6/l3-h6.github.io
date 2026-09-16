'use client';

import { useState } from 'react';
import { Terminal, Sun, Moon, Menu, X, Circle } from 'lucide-react';
import { paths } from '@/config/paths';
import type { HeaderProps } from '@/types';

export const Header = (props: HeaderProps) => {
  const { isDarkMode, handleDarkMode } = props;
  const [showTerminal, setShowTerminal] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b-2 transition-colors ${
          isDarkMode
            ? 'bg-dark-bg/95 backdrop-blur-sm border-dark-outline-variant text-dark-on-surface'
            : 'bg-white border-stroke-black text-on-surface'
        }`}
      >
        <div className="flex justify-between items-center w-full px-4 sm:px-6 py-3.5 max-w-[1680px] mx-auto">
          {/* Logo & Thread Badge */}
          <div className="flex items-center gap-3">
            <a
              className="font-mono text-sm tracking-widest uppercase font-bold flex items-center gap-2"
              href="#hero"
            >
              <span
                className={`w-2.5 h-2.5 inline-block ${
                  isDarkMode ? 'bg-dark-primary-container' : 'bg-accent-cobalt'
                }`}
              ></span>
              PRATIK // SYS.ENG
            </a>
            <span
              className={`hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 border text-[11px] font-mono font-semibold ${
                isDarkMode
                  ? 'border-dark-outline-variant bg-dark-surface-container text-dark-primary'
                  : 'border-stroke-black bg-surface-container text-accent-cobalt'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full animate-ping ${
                  isDarkMode ? 'bg-dark-primary-container' : 'bg-accent-electric'
                }`}
              ></span>
              ACTIVE_THREAD [12MS]
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a
              className={`font-mono text-xs uppercase tracking-wider transition-colors font-semibold ${
                isDarkMode
                  ? 'text-dark-on-surface-variant hover:text-dark-primary'
                  : 'text-neutral-500 hover:text-accent-cobalt'
              }`}
              href={paths.telemetry.getHref()}
            >
              Telemetry
            </a>
            <a
              className={`font-mono text-xs uppercase tracking-wider transition-colors font-semibold ${
                isDarkMode
                  ? 'text-dark-on-surface-variant hover:text-dark-primary'
                  : 'text-neutral-500 hover:text-accent-cobalt'
              }`}
              href={paths.stack.getHref()}
            >
              Stack
            </a>
            <a
              className={`font-mono text-xs uppercase tracking-wider transition-colors font-semibold ${
                isDarkMode
                  ? 'text-dark-on-surface-variant hover:text-dark-primary'
                  : 'text-neutral-500 hover:text-accent-cobalt'
              }`}
              href={paths.experience.getHref()}
            >
              Timeline
            </a>
            <a
              className={`font-mono text-xs uppercase tracking-wider transition-colors font-semibold ${
                isDarkMode
                  ? 'text-dark-on-surface-variant hover:text-dark-primary'
                  : 'text-neutral-500 hover:text-accent-cobalt'
              }`}
              href={paths.skills.getHref()}
            >
              Architecture
            </a>
          </nav>

          {/* Action Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Terminal Drawer Toggle Button */}
            <button
              onClick={() => setShowTerminal(!showTerminal)}
              className={`p-2 border-2 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] neo-shadow-sm ${
                isDarkMode
                  ? 'border-dark-outline-variant bg-dark-surface hover:border-dark-on-surface text-dark-on-surface'
                  : 'border-stroke-black bg-white hover:bg-surface-container text-on-surface'
              }`}
              title="Inspect Sys Terminal"
              aria-label="Inspect System Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>

            {/* Dark/Light Mode Button */}
            {/*
            <button
              onClick={handleDarkMode}
              className={`p-2 border-2 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] neo-shadow-sm ${
                isDarkMode
                  ? 'border-dark-outline-variant bg-dark-surface text-yellow-300 hover:border-dark-on-surface'
                  : 'border-stroke-black bg-white text-on-surface hover:bg-surface-container'
              }`}
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button> */}

            {/* Uplink CTA */}
            <a
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 border-2 font-mono text-xs uppercase tracking-wider font-bold neo-shadow-sm hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[2px] active:translate-y-[2px] transition-all ${
                isDarkMode
                  ? 'border-dark-primary-container bg-dark-primary-container text-dark-on-primary-container'
                  : 'border-stroke-black bg-accent-cobalt text-white'
              }`}
              href={paths.contact.getHref()}
            >
              <Circle className="w-2.5 h-2.5 fill-current animate-pulse text-blue-300" />
              ESTABLISH_UPLINK
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 border-2 ${
                isDarkMode
                  ? 'border-dark-outline-variant bg-dark-surface text-dark-on-surface'
                  : 'border-stroke-black bg-white text-on-surface'
              }`}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* QUICK TERMINAL DRAWER */}
      {showTerminal && (
        <div
          className={`border-b-2 py-3 px-4 sm:px-6 font-mono text-xs transition-all ${
            isDarkMode
              ? 'bg-dark-surface-lowest border-dark-outline-variant text-dark-on-surface'
              : 'bg-surface-container border-stroke-black text-on-surface'
          }`}
        >
          <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={
                  isDarkMode
                    ? 'text-dark-primary-container font-bold'
                    : 'text-accent-cobalt font-bold'
                }
              >
                $ sysctl --runtime=health
              </span>
              <span className={isDarkMode ? 'text-dark-outline' : 'text-neutral-400'}>
                daemon: <strong className="text-emerald-500">ok</strong>
              </span>
              <span className={isDarkMode ? 'text-dark-outline' : 'text-neutral-400'}>
                go-scheduler:{' '}
                <strong className={isDarkMode ? 'text-dark-primary' : 'text-blue-400'}>
                  preemptive
                </strong>
              </span>
              <span className={isDarkMode ? 'text-dark-outline' : 'text-neutral-400'}>
                ebpf_probes:{' '}
                <strong className={isDarkMode ? 'text-dark-primary' : 'text-blue-400'}>
                  hooked (8)
                </strong>
              </span>
              <span className={isDarkMode ? 'text-dark-outline' : 'text-neutral-400'}>
                memory_rss:{' '}
                <strong className={isDarkMode ? 'text-dark-primary' : 'text-blue-400'}>
                  24.8MB
                </strong>
              </span>
              <span className={isDarkMode ? 'text-dark-outline' : 'text-neutral-400'}>
                active_goroutines:{' '}
                <strong className={isDarkMode ? 'text-dark-primary' : 'text-blue-400'}>
                  14
                </strong>
              </span>
            </div>
            <button
              className={`uppercase font-bold text-[11px] transition-colors ${
                isDarkMode
                  ? 'text-dark-outline hover:text-dark-on-surface'
                  : 'text-neutral-400 hover:text-accent-cobalt'
              }`}
              onClick={() => setShowTerminal(false)}
            >
              [esc / close]
            </button>
          </div>
        </div>
      )}

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b-2 py-4 px-6 font-mono text-xs ${
            isDarkMode
              ? 'bg-dark-bg border-dark-outline-variant text-dark-on-surface'
              : 'bg-white border-stroke-black text-on-surface'
          }`}
        >
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href={paths.telemetry.getHref()}
                onClick={() => setMobileMenuOpen(false)}
                className={`block uppercase tracking-wider font-semibold ${
                  isDarkMode ? 'hover:text-dark-primary' : 'hover:text-accent-cobalt'
                }`}
              >
                Telemetry
              </a>
            </li>
            <li>
              <a
                href={paths.stack.getHref()}
                onClick={() => setMobileMenuOpen(false)}
                className={`block uppercase tracking-wider font-semibold ${
                  isDarkMode ? 'hover:text-dark-primary' : 'hover:text-accent-cobalt'
                }`}
              >
                Stack
              </a>
            </li>
            <li>
              <a
                href={paths.experience.getHref()}
                onClick={() => setMobileMenuOpen(false)}
                className={`block uppercase tracking-wider font-semibold ${
                  isDarkMode ? 'hover:text-dark-primary' : 'hover:text-accent-cobalt'
                }`}
              >
                Timeline
              </a>
            </li>
            <li>
              <a
                href={paths.skills.getHref()}
                onClick={() => setMobileMenuOpen(false)}
                className={`block uppercase tracking-wider font-semibold ${
                  isDarkMode ? 'hover:text-dark-primary' : 'hover:text-accent-cobalt'
                }`}
              >
                Architecture
              </a>
            </li>
            <li
              className={`pt-2 border-t ${
                isDarkMode ? 'border-dark-outline-variant' : 'border-neutral-200'
              }`}
            >
              <a
                href={paths.contact.getHref()}
                onClick={() => setMobileMenuOpen(false)}
                className={`inline-flex items-center gap-2 px-4 py-2 border-2 font-mono text-xs uppercase tracking-wider font-bold ${
                  isDarkMode
                    ? 'border-dark-primary-container bg-dark-primary-container text-dark-on-primary-container'
                    : 'border-stroke-black bg-accent-cobalt text-white'
                }`}
              >
                <Circle className="w-2.5 h-2.5 fill-current animate-pulse text-blue-300" />
                ESTABLISH_UPLINK
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
