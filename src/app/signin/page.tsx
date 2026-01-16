'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication
    console.log('Sign in:', { email, password });
  };

  return (
    <div className="app-container min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 animate-fade-in">
        <div className="bg-white rounded-3xl shadow-lg border border-[var(--border)] p-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[var(--primary)] rounded-2xl flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-2 heading-display">
              Welcome back
            </h1>
            <p className="text-sm text-[var(--text-secondary)]">
              Sign in to access your saved notes
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent focus:bg-white transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent focus:bg-white transition-colors"
                required
              />
            </div>

            <div className="text-right">
              <button
                type="button"
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg"
            >
              Sign in
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-[var(--text-secondary)] mt-8">
            Don&apos;t have an account?{' '}
            <Link
              href="/signup"
              className="text-[var(--primary)] hover:underline font-medium"
            >
              Create one
            </Link>
          </p>
        </div>

        {/* Back link */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Scratchpad
          </Link>
        </div>
      </div>
    </div>
  );
}
