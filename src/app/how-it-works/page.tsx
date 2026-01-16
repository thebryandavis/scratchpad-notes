import Link from 'next/link';

export default function HowItWorks() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-[var(--border)]">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-[var(--primary)] rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <span className="text-xl font-semibold text-[var(--text-primary)] heading-display tracking-tight">
            Scratchpad
          </span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary)] text-sm transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to app
        </Link>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-8 py-20">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4 heading-display">
            How Scratchpad Works
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Capture ideas. Stay in flow. Never lose a thought.
          </p>
        </div>

        <div className="space-y-16">
          {/* Step 1 */}
          <div className="flex gap-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="flex-shrink-0 w-14 h-14 bg-[var(--primary-light)] rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2 heading-display">
                1. Capture instantly
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Jot down prompts, ideas, or notes in seconds. No friction, no context-switching.
                Just start typing and hit enter.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex-shrink-0 w-14 h-14 bg-[var(--primary-light)] rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2 heading-display">
                2. Organize your way
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Drag cards between columns to organize your thoughts. Create custom columns
                for your workflow—from &ldquo;Up Next&rdquo; to &ldquo;Done&rdquo;.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="flex-shrink-0 w-14 h-14 bg-[var(--primary-light)] rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2 heading-display">
                3. Stay focused
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Keep Scratchpad open alongside your favorite tools. Your thoughts are always
                one glance away—never buried in tabs or lost in notes apps.
              </p>
            </div>
          </div>
        </div>

        {/* Why Scratchpad Box */}
        <div
          className="mt-20 bg-white rounded-3xl p-10 text-center shadow-md border border-[var(--border)] animate-fade-in"
          style={{ animationDelay: '400ms' }}
        >
          <div className="w-16 h-16 bg-[var(--primary-light)] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 heading-display">
            Why Scratchpad?
          </h3>
          <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto leading-relaxed">
            Built for makers who work with AI tools, Scratchpad keeps your best prompts
            and fleeting ideas within reach—without cluttering your workspace or your mind.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-8 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg"
          >
            Get started
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}
