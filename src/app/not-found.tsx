import Link from 'next/link';
import { Terminal, ArrowLeft } from 'lucide-react';
import { paths } from '@/config/paths';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-dark-bg text-dark-on-surface code-grid-bg">
      <div className="w-full max-w-lg border-2 border-dark-outline-variant bg-dark-surface p-8 neo-shadow-black space-y-6">
        <div className="flex items-center gap-2 border-b-2 border-dark-outline-variant pb-3 text-red-400 font-mono text-xs font-bold">
          <Terminal className="size-4" />
          <span>STATUS: 404 // NOT_FOUND</span>
        </div>

        <div className="space-y-2">
          <h1 className="font-headline text-3xl font-extrabold uppercase">
            Route Not Allocated
          </h1>
          <p className="font-mono text-xs text-dark-outline">
            The requested memory address or route segment does not exist in the active runtime
            table.
          </p>
        </div>

        <div className="border border-dark-outline-variant bg-dark-surface-lowest p-3 font-mono text-[11px] text-dark-on-surface-variant">
          $ ping --target=route<br />
          Host unreachable: [ERR_NO_ROUTE_RECORD]
        </div>

        <Link
          href={paths.home.getHref()}
          className="inline-flex items-center gap-2 border-2 border-dark-primary-container bg-dark-primary-container px-4 py-2 font-mono text-xs uppercase font-bold text-dark-on-primary-container shadow-neo-sm hover:brightness-110 active:translate-x-0.5 active:translate-y-0.5"
        >
          <ArrowLeft className="size-4" />
          Return to Root
        </Link>
      </div>
    </div>
  );
}
