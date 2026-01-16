'use client';

interface TrialBannerProps {
  notesRemaining: number;
  isDragging?: boolean;
}

export function TrialBanner({ notesRemaining, isDragging = false }: TrialBannerProps) {
  return (
    <div className={`bg-[var(--primary-light)] py-2.5 px-4 text-center text-sm ${isDragging ? 'pointer-events-none' : ''}`}>
      <span className="text-[var(--text-primary)]">
        <span className="text-[var(--primary)] font-medium">{notesRemaining} notes</span>
        {' '}remaining on free plan
        <span className="mx-2 text-[var(--text-muted)]">·</span>
        Go unlimited for $9/month
      </span>
      <button className="ml-4 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md">
        Upgrade
      </button>
    </div>
  );
}
