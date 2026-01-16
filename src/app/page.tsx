'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { TrialBanner } from '@/components/layout/TrialBanner';
import { QuickInput } from '@/components/board/QuickInput';
import { ProjectsBar } from '@/components/board/ProjectsBar';
import { useKanbanBoard, KanbanBoardView } from '@/components/board/KanbanBoard';

const FREE_NOTE_LIMIT = 30;

export default function Home() {
  const [notesCount, setNotesCount] = useState(0);
  const board = useKanbanBoard({ onNotesCountChange: setNotesCount });

  const notesRemaining = FREE_NOTE_LIMIT - notesCount;

  return (
    <div className="app-container">
      <TrialBanner notesRemaining={notesRemaining} />
      <Header />
      <QuickInput onAddNote={board.addNote} disabled={!board.canAddNote} />
      <ProjectsBar columns={board.columns} />
      <KanbanBoardView board={board} />
    </div>
  );
}
