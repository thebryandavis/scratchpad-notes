# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (default port 3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

**Scratchpad** is a warm, minimal Kanban-style note-taking app for makers. Capture thoughts, prompts, and ideas in a beautiful board interface.

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4 (CSS-first configuration)
- **Fonts**: Crimson Pro (serif headings), DM Sans (body text)
- **Drag & Drop**: @dnd-kit/core and @dnd-kit/sortable
- **State**: React hooks with localStorage persistence

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Main Kanban dashboard
│   ├── how-it-works/      # Marketing/info page
│   └── signin/            # Authentication page
├── components/
│   ├── board/             # Kanban components
│   │   ├── KanbanBoard.tsx    # Main board with drag-and-drop logic
│   │   ├── Column.tsx         # Droppable column container
│   │   ├── NoteCard.tsx       # Draggable note card
│   │   ├── QuickInput.tsx     # Note creation input
│   │   └── ProjectsBar.tsx    # Project/column management bar
│   └── layout/            # App shell components
│       ├── Header.tsx
│       └── TrialBanner.tsx
├── lib/
│   └── utils.ts           # Utility functions (formatRelativeTime, generateId)
└── types/
    └── index.ts           # TypeScript interfaces (Note, Column, Project)
```

### Key Patterns

**State Management**: The `useKanbanBoard` hook in `KanbanBoard.tsx` manages all board state including notes, columns, and drag operations. Notes are persisted to localStorage.

**Drag and Drop**: Uses @dnd-kit with `DndContext` wrapping the board. Cards use `useSortable`, columns use `useDroppable`. Drag events handle both reordering within columns and moving between columns.

**Design System**: Bear-inspired warm palette defined as CSS variables in `globals.css`:
- Primary: `--primary` (#D84A3A warm red)
- Primary Light: `--primary-light` (#FCEAE8 blush)
- Background: `--background` (#FAF7F4 warm cream)
- Background Warm: `--background-warm` (#F5F0EB deeper cream)
- Text: `--text-primary` (#2C2520 warm charcoal)
- Status Active: `--status-active` (#E8A54B amber)
- Paper texture overlay and warm gradient backgrounds
- Red accent bar on recent notes, pencil icon branding

### Data Models

Notes stored in localStorage under key `scratchpad_notes`. Default columns are defined in `src/types/index.ts` as `DEFAULT_COLUMNS`.
