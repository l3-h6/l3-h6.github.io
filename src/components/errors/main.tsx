'use client';

import * as React from 'react';
import { Terminal, RefreshCw } from 'lucide-react';

export const MainErrorFallback = () => {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center bg-dark-bg p-6 text-dark-on-surface"
      role="alert"
    >
      <div className="w-full max-w-md border-2 border-dark-outline-variant bg-dark-surface-container p-6 shadow-neo-black">
        <div className="flex items-center gap-2 border-b border-dark-outline-variant pb-3 text-red-400">
          <Terminal className="size-5" />
          <span className="font-mono text-xs uppercase tracking-widest">
            RUNTIME_FAULT // UNCAUGHT_EXCEPTION
          </span>
        </div>
        <p className="mt-4 font-mono text-sm text-dark-on-surface-variant">
          An unexpected kernel interrupt or component failure occurred.
        </p>
        <button
          onClick={() => window.location.assign(window.location.origin)}
          className="mt-6 flex w-full items-center justify-center gap-2 border border-dark-primary-container bg-dark-primary-container px-4 py-2.5 font-mono text-xs uppercase font-bold text-dark-on-primary-container shadow-neo-sm hover:brightness-110 active:translate-x-0.5 active:translate-y-0.5"
        >
          <RefreshCw className="size-4" />
          Reboot Runtime
        </button>
      </div>
    </div>
  );
};
