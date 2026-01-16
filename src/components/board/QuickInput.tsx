'use client';

import { useState, KeyboardEvent } from 'react';

interface QuickInputProps {
  onAddNote: (content: string) => void;
  disabled?: boolean;
  isDragging?: boolean;
}

export function QuickInput({ onAddNote, disabled, isDragging = false }: QuickInputProps) {
  const [content, setContent] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = () => {
    if (content.trim() && !disabled) {
      onAddNote(content.trim());
      setContent('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={`flex justify-center px-8 py-6 ${isDragging ? 'pointer-events-none' : ''}`}>
      <div
        className={`flex items-center gap-3 w-full max-w-xl bg-white rounded-2xl border-2 transition-all duration-200 ${
          isFocused
            ? 'border-[var(--primary)] shadow-lg'
            : 'border-[var(--border)] shadow-sm hover:border-[var(--text-muted)]'
        }`}
      >
        <div className="pl-5 text-[var(--text-muted)]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Jot something down..."
          disabled={disabled}
          className="flex-1 py-4 text-[15px] bg-transparent placeholder:text-[var(--text-muted)] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          autoFocus
        />
        <button
          onClick={handleSubmit}
          disabled={disabled || !content.trim()}
          className="mr-2 w-10 h-10 bg-[var(--primary)] hover:bg-[var(--primary-hover)] disabled:bg-[var(--border)] disabled:cursor-not-allowed text-white rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
