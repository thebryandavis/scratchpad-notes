'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Note } from '@/types';
import { formatRelativeTime } from '@/lib/utils';

interface NoteCardProps {
  note: Note;
  onEdit?: (note: Note) => void;
  onDelete?: (noteId: string) => void;
}

export function NoteCard({ note, onEdit, onDelete }: NoteCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: note.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isRecent = Date.now() - new Date(note.createdAt).getTime() < 5 * 60 * 1000;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`group bg-white rounded-xl p-4 cursor-grab active:cursor-grabbing transition-all duration-200 border border-[var(--border)] hover:border-[var(--primary)]/30 ${
        isDragging
          ? 'opacity-70 shadow-xl scale-105 rotate-2'
          : 'shadow-sm hover:shadow-md'
      }`}
      onClick={() => onEdit?.(note)}
    >
      <div className="flex items-start gap-3">
        {/* Accent dot/bar */}
        <div
          className={`w-1 self-stretch rounded-full flex-shrink-0 transition-colors ${
            isRecent ? 'bg-[var(--primary)]' : 'bg-[var(--border)] group-hover:bg-[var(--status-active)]'
          }`}
        />
        <div className="flex-1 min-w-0">
          <p className="text-[15px] text-[var(--text-primary)] break-words leading-relaxed">
            {note.content}
          </p>
          <p className="text-xs text-[var(--text-muted)] mt-2 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {formatRelativeTime(note.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
}
