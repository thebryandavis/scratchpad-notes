'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-5">
      <Link href="/" className="flex items-center gap-3 group">
        {/* Pencil/paper icon */}
        <div className="w-9 h-9 bg-[var(--primary)] rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
        <span className="text-xl font-semibold text-[var(--text-primary)] heading-display tracking-tight">
          Scratchpad
        </span>
      </Link>

      <nav className="flex items-center gap-8">
        <Link
          href="/how-it-works"
          className="text-[var(--text-secondary)] hover:text-[var(--primary)] text-sm flex items-center gap-2 transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          How it works
        </Link>
        <Link
          href="/signin"
          className="text-[var(--text-secondary)] hover:text-[var(--primary)] text-sm flex items-center gap-2 transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Sign in
        </Link>
      </nav>
    </header>
  );
}
