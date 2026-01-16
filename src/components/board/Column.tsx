'use client';

import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Column as ColumnType, Note } from '@/types';
import { NoteCard } from './NoteCard';

interface ColumnProps {
  column: ColumnType;
  notes: Note[];
  onEditNote?: (note: Note) => void;
  onDeleteNote?: (noteId: string) => void;
}

export function Column({ column, notes, onEditNote, onDeleteNote }: ColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });

  return (
    <div className="flex-shrink-0 w-72">
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="text-[13px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
          {column.name}
        </h3>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
          notes.length > 0
            ? 'bg-[var(--primary-light)] text-[var(--primary)]'
            : 'bg-[var(--background-warm)] text-[var(--text-muted)]'
        }`}>
          {notes.length}
        </span>
      </div>

      <div
        ref={setNodeRef}
        className={`min-h-[240px] rounded-2xl p-3 transition-all duration-200 ${
          isOver
            ? 'bg-[var(--primary-light)] border-2 border-dashed border-[var(--primary)]'
            : 'bg-[var(--background-warm)]/50'
        }`}
      >
        <SortableContext items={notes.map((n) => n.id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-3">
            {notes.length > 0 ? (
              notes.map((note, index) => (
                <div
                  key={note.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <NoteCard
                    note={note}
                    onEdit={onEditNote}
                    onDelete={onDeleteNote}
                  />
                </div>
              ))
            ) : (
              column.placeholderText && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--border)] flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-[180px]">
                    {column.placeholderText}
                  </p>
                </div>
              )
            )}
          </div>
        </SortableContext>
      </div>
    </div>
  );
}
