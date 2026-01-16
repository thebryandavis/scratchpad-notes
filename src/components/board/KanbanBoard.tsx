'use client';

import { useState, useEffect } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCorners,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { Column as ColumnType, Note, DEFAULT_COLUMNS } from '@/types';
import { Column } from './Column';
import { NoteCard } from './NoteCard';
import { generateId } from '@/lib/utils';

const STORAGE_KEY = 'scratchpad_notes';
const FREE_NOTE_LIMIT = 30;

interface KanbanBoardProps {
  onNotesCountChange?: (count: number) => void;
}

export function KanbanBoard({ onNotesCountChange }: KanbanBoardProps) {
  const [columns] = useState<ColumnType[]>(DEFAULT_COLUMNS);
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  // Load notes from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setNotes(parsed.map((n: Note) => ({
          ...n,
          createdAt: new Date(n.createdAt),
          updatedAt: new Date(n.updatedAt),
        })));
      } catch (e) {
        console.error('Failed to parse stored notes:', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
      onNotesCountChange?.(notes.length);
    }
  }, [notes, isLoaded, onNotesCountChange]);

  const addNote = (content: string) => {
    if (notes.length >= FREE_NOTE_LIMIT) {
      return;
    }

    const newNote: Note = {
      id: generateId(),
      content,
      columnId: 'up-next',
      projectId: null,
      position: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setNotes((prev) => {
      const upNextNotes = prev.filter((n) => n.columnId === 'up-next');
      const updatedUpNextNotes = upNextNotes.map((n) => ({
        ...n,
        position: n.position + 1,
      }));
      const otherNotes = prev.filter((n) => n.columnId !== 'up-next');
      return [newNote, ...updatedUpNextNotes, ...otherNotes];
    });
  };

  const getNotesForColumn = (columnId: string) => {
    return notes
      .filter((n) => n.columnId === columnId)
      .sort((a, b) => a.position - b.position);
  };

  const findNoteById = (id: string) => {
    return notes.find((n) => n.id === id);
  };

  const handleDragStart = (event: DragStartEvent) => {
    const note = findNoteById(event.active.id as string);
    if (note) {
      setActiveNote(note);
    }
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeNote = findNoteById(active.id as string);
    if (!activeNote) return;

    const overId = over.id as string;

    // Check if dropping over a column
    const overColumn = columns.find((c) => c.id === overId);
    if (overColumn && activeNote.columnId !== overId) {
      setNotes((prev) => {
        const updatedNotes = prev.map((n) => {
          if (n.id === activeNote.id) {
            return { ...n, columnId: overId };
          }
          return n;
        });
        return updatedNotes;
      });
      return;
    }

    // Check if dropping over another note
    const overNote = findNoteById(overId);
    if (overNote && activeNote.columnId !== overNote.columnId) {
      setNotes((prev) => {
        return prev.map((n) => {
          if (n.id === activeNote.id) {
            return { ...n, columnId: overNote.columnId };
          }
          return n;
        });
      });
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveNote(null);

    if (!over) return;

    const activeNote = findNoteById(active.id as string);
    if (!activeNote) return;

    const overId = over.id as string;
    const overNote = findNoteById(overId);

    if (overNote && active.id !== over.id) {
      setNotes((prev) => {
        const columnNotes = prev.filter((n) => n.columnId === activeNote.columnId);
        const otherNotes = prev.filter((n) => n.columnId !== activeNote.columnId);

        const oldIndex = columnNotes.findIndex((n) => n.id === active.id);
        const newIndex = columnNotes.findIndex((n) => n.id === over.id);

        const reorderedColumnNotes = arrayMove(columnNotes, oldIndex, newIndex).map(
          (n, i) => ({ ...n, position: i })
        );

        return [...reorderedColumnNotes, ...otherNotes];
      });
    }
  };

  return {
    columns,
    notes,
    isLoaded,
    addNote,
    getNotesForColumn,
    sensors,
    activeNote,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    notesCount: notes.length,
    canAddNote: notes.length < FREE_NOTE_LIMIT,
  };
}

interface KanbanBoardViewProps {
  board: ReturnType<typeof KanbanBoard>;
}

export function KanbanBoardView({ board }: KanbanBoardViewProps) {
  const {
    columns,
    isLoaded,
    getNotesForColumn,
    sensors,
    activeNote,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  } = board;

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="flex items-center gap-3 text-[var(--text-muted)]">
          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading your notes...
        </div>
      </div>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="flex gap-5 px-8 py-6 overflow-x-auto pb-8">
        {columns
          .filter((c) => c.isVisible)
          .sort((a, b) => a.position - b.position)
          .map((column, index) => (
            <div
              key={column.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <Column
                column={column}
                notes={getNotesForColumn(column.id)}
              />
            </div>
          ))}
      </div>

      <DragOverlay>
        {activeNote ? (
          <div className="rotate-2 scale-105 opacity-90">
            <NoteCard note={activeNote} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

export { KanbanBoard as useKanbanBoard };
