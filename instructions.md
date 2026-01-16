Looking at these screenshots, I can see this is "Aside" - a note-taking/idea parking app with a Kanban-style board interface. Let me create a comprehensive prompt to recreate it.

```markdown
# Claude Code Prompt: Recreate "Aside" - A Note Parking App

## Overview
Build "Aside" (getaside.co) - a minimalist note-taking web app designed for makers who work with AI tools. It allows users to quickly capture thoughts, prompts, and ideas in a Kanban-style board without context-switching.

## Tech Stack
- **Frontend**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL) for persistence
- **Auth**: Supabase Auth (email/password)
- **State Management**: React Context + useReducer or Zustand
- **Drag & Drop**: @dnd-kit/core and @dnd-kit/sortable
- **Deployment**: Vercel

## Design System

### Colors
- **Primary/Accent**: Teal/seafoam green (`#3D9A8B` or similar)
- **Background**: Light gray (`#F8F9FA`)
- **Card Background**: White (`#FFFFFF`)
- **Text Primary**: Dark gray (`#1A1A1A`)
- **Text Secondary**: Medium gray (`#6B7280`)
- **Column Headers**: Uppercase, small, gray text
- **Border/Dividers**: Light gray (`#E5E7EB`)
- **Status Dot (active)**: Orange/yellow (`#F59E0B`)
- **Gradient Border**: Subtle purple/pink gradient on outer container edge

### Typography
- **Font**: System font stack or Inter
- **Headers**: Semi-bold, clean
- **Body**: Regular weight, readable

### Spacing & Layout
- Clean, generous whitespace
- Rounded corners on cards and buttons (8-12px)
- Subtle shadows on cards
- Full-width kanban board with horizontal scroll on overflow

## Core Features

### 1. Main Dashboard Layout
```
┌─────────────────────────────────────────────────────────────┐
│ [Trial Banner] Free trial — X notes remaining · $14.99/mo [Subscribe] │
├─────────────────────────────────────────────────────────────┤
│ [Logo] Aside                          [How it works] [Sign in] │
├─────────────────────────────────────────────────────────────┤
│         [ Add a note you don't want to lose    ] [+]        │
├─────────────────────────────────────────────────────────────┤
│ [All Projects ▼] [+ Add Project] [Project name...] [⚙ Columns] │
├─────────────────────────────────────────────────────────────┤
│ UP NEXT    │ BACKBURNER │ GO-TO PROMPTS │ RABBIT HOLES │ DONE │
│     1      │     0      │      0        │      0       │  0   │
│ ┌────────┐ │            │               │              │      │
│ │ ● Note │ │ Park       │ Save your     │ Ideas worth  │      │
│ │ 2m ago │ │ thoughts   │ favorite      │ exploring    │      │
│ └────────┘ │ for later  │ prompts here  │ someday      │      │
└─────────────────────────────────────────────────────────────┘
```

### 2. Quick Note Input
- Centered input field with placeholder "Add a note you don't want to lose"
- Teal "+" button to submit
- On submit: Creates new card in "UP NEXT" column by default
- Auto-focus on page load for instant capture

### 3. Kanban Board

#### Default Columns (in order):
1. **UP NEXT** - Active/priority items
2. **BACKBURNER** - "Park thoughts for later"
3. **GO-TO PROMPTS** - "Save your favorite prompts here"
4. **RABBIT HOLES** - "Ideas worth exploring someday"
5. **DONE** - Completed items

#### Column Features:
- Header shows column name (uppercase) and card count
- Empty state shows placeholder text
- Drag-and-drop reordering of cards
- Drag cards between columns

#### Note Cards:
- White background with subtle shadow
- Status indicator dot (orange for recent/active)
- Note title/content (truncated if long)
- Relative timestamp ("less than a minute ago", "7 minutes ago")
- Click to expand/edit
- Hover state with subtle highlight

### 4. Project Management

#### All Projects View:
- "All Projects" button with grid icon (selected state: teal background)
- Shows all notes across all projects

#### Add Project:
- "+ Add Project" button
- Clicking reveals inline text input "Project name..."
- Plus button to confirm creation
- Projects appear as tabs/filters

### 5. Column Management (Columns Dropdown)

When clicking "Columns" button:
```
┌─────────────────────────┐
│ Manage Columns          │
├─────────────────────────┤
│ ⋮⋮ Up Next      [default] ✏️ 👁️ │
│ ⋮⋮ Backburner   [default] ✏️ 👁️ │
│ ⋮⋮ Go-To Prompts[default] ✏️ 👁️ │
│ ⋮⋮ Rabbit Holes [default] ✏️ 👁️ │
│ ⋮⋮ Done         [default] ✏️ 👁️ │
├─────────────────────────┤
│ + Add Column            │
└─────────────────────────┘
```

- Drag handle (⋮⋮) for reordering
- "default" badge for system columns
- Edit icon (✏️) to rename
- Visibility toggle (👁️) to show/hide
- "+ Add Column" to create custom columns

### 6. Authentication

#### Sign In Page (`/signin`):
- Centered card layout
- Lightning bolt icon at top (teal)
- "Welcome back" heading
- "Sign in to access your saved notes" subtext
- Email input field
- Password input field (with dots)
- "Forgot password?" link (right-aligned)
- Teal "Sign in" button (full-width)
- "Don't have an account? Create one" link

#### Create Account Modal:
- Triggered when free notes exhausted OR clicking "Create one"
- Modal overlay with card
- Lightning bolt icon
- "Create an account and upgrade" heading
- "You've used your free notes. Create an account and upgrade to add unlimited notes."
- Email and Password fields
- Teal "Create account & upgrade" button
- "Already have an account? Sign in" link

### 7. How It Works Page (`/how-it-works`)

```
┌─────────────────────────────────────────┐
│ [Logo] Aside              [Back to app] │
├─────────────────────────────────────────┤
│                                         │
│        How Aside Works                  │
│     Park your thoughts. Stay in flow.   │
│                                         │
│   ⚡ 1. Capture instantly               │
│      Jot down prompts, ideas, or notes  │
│      in seconds. No friction, no        │
│      context-switching.                 │
│                                         │
│   📅 2. Organize your way               │
│      Drag cards between columns. Tag,   │
│      filter, and find what you need     │
│      when you need it.                  │
│                                         │
│   🎯 3. Stay focused                    │
│      Keep Aside open alongside your     │
│      favorite tools. Your thoughts are  │
│      always one glance away.            │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │        Why Aside?               │   │
│   │ Built for makers who work with  │   │
│   │ AI tools, Aside keeps your best │   │
│   │ prompts and fleeting ideas      │   │
│   │ within reach—without cluttering │   │
│   │ your workspace or your mind.    │   │
│   │                                 │   │
│   │       [Get started]             │   │
│   └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

### 8. Freemium Model / Trial System

- **Free tier**: 30 notes total (show "29 notes remaining" etc.)
- **Trial banner**: Always visible at top when not subscribed
  - "Free trial — X notes remaining · Unlimited notes for $14.99/month [Subscribe]"
- **Subscribe button**: Teal, leads to payment flow
- **Limit reached**: Show upgrade modal, prevent new note creation

## Data Models

### User
```typescript
interface User {
  id: string;
  email: string;
  created_at: Date;
  subscription_status: 'free' | 'trial' | 'active' | 'cancelled';
  notes_count: number; // for free tier tracking
}
```

### Project
```typescript
interface Project {
  id: string;
  user_id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
}
```

### Column
```typescript
interface Column {
  id: string;
  user_id: string;
  project_id: string | null; // null = applies to all
  name: string;
  placeholder_text: string;
  position: number;
  is_visible: boolean;
  is_default: boolean;
  created_at: Date;
}
```

### Note
```typescript
interface Note {
  id: string;
  user_id: string;
  project_id: string | null;
  column_id: string;
  content: string;
  position: number;
  created_at: Date;
  updated_at: Date;
}
```

## Key Interactions

1. **Quick Capture Flow**:
   - User types in main input → presses Enter or clicks + → Note appears in UP NEXT with animation

2. **Drag and Drop**:
   - Cards can be dragged within columns (reorder) or between columns
   - Visual feedback during drag (card lifts, drop zones highlight)
   - Smooth animations on drop

3. **Inline Editing**:
   - Click card to open expanded view/edit mode
   - Auto-save on blur or explicit save

4. **Column Management**:
   - Dropdown menu for managing columns
   - Drag to reorder columns
   - Toggle visibility without deleting

## Local Storage (for unauthenticated users)
- Store notes in localStorage for anonymous users
- Sync to database on account creation
- Persist column preferences locally

## Responsive Considerations
- Mobile: Stack columns vertically or horizontal scroll
- Tablet: Horizontal scroll with touch-friendly drag
- Desktop: Full kanban view

## Animations
- Card entrance: Subtle fade-in + slide-down
- Drag preview: Slight rotation and scale
- Button hover: Background color transition
- Modal: Fade overlay + scale card

## File Structure
```
/app
  /page.tsx (main dashboard)
  /how-it-works/page.tsx
  /signin/page.tsx
  /signup/page.tsx
  /api
    /notes/route.ts
    /columns/route.ts
    /projects/route.ts
/components
  /ui
    /Button.tsx
    /Input.tsx
    /Card.tsx
    /Modal.tsx
    /Dropdown.tsx
  /layout
    /Header.tsx
    /TrialBanner.tsx
  /board
    /KanbanBoard.tsx
    /Column.tsx
    /NoteCard.tsx
    /QuickInput.tsx
  /columns
    /ManageColumnsDropdown.tsx
  /auth
    /SignInForm.tsx
    /SignUpModal.tsx
/lib
  /supabase.ts
  /hooks
    /useNotes.ts
    /useColumns.ts
    /useAuth.ts
  /utils
    /formatDate.ts
/types
  /index.ts
```

## Implementation Priority

1. **Phase 1**: Static UI with local state
   - Main layout and styling
   - Kanban board with hardcoded columns
   - Quick note input (local state only)
   - Card display and basic interactions

2. **Phase 2**: Drag and drop
   - Implement @dnd-kit
   - Card reordering within columns
   - Moving cards between columns

3. **Phase 3**: Authentication
   - Sign in/sign up pages
   - Supabase auth integration
   - Protected routes

4. **Phase 4**: Persistence
   - Supabase database setup
   - CRUD operations for notes
   - Column management
   - Project management

5. **Phase 5**: Premium features
   - Note limits for free tier
   - Subscription integration (Stripe)
   - Upgrade modals and flows

## Additional Notes
- The app has a very clean, minimal aesthetic - avoid visual clutter
- Focus on speed and keyboard accessibility for quick capture
- The gradient border on the outer container is a subtle design touch
- Empty columns show helpful placeholder text to guide users
- Timestamps should be human-readable relative times
```

This prompt covers the complete feature set visible in your screenshots. Want me to also create the actual implementation, or would you like me to refine any section of this prompt?