export interface Note {
  id: string;
  content: string;
  columnId: string;
  projectId: string | null;
  position: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Column {
  id: string;
  name: string;
  placeholderText: string;
  position: number;
  isVisible: boolean;
  isDefault: boolean;
}

export interface Project {
  id: string;
  name: string;
  createdAt: Date;
}

export type SubscriptionStatus = 'free' | 'trial' | 'active' | 'cancelled';

export interface User {
  id: string;
  email: string;
  subscriptionStatus: SubscriptionStatus;
  notesCount: number;
}

export const DEFAULT_COLUMNS: Column[] = [
  {
    id: 'up-next',
    name: 'Up Next',
    placeholderText: '',
    position: 0,
    isVisible: true,
    isDefault: true,
  },
  {
    id: 'backburner',
    name: 'Backburner',
    placeholderText: 'Park thoughts for later',
    position: 1,
    isVisible: true,
    isDefault: true,
  },
  {
    id: 'go-to-prompts',
    name: 'Go-To Prompts',
    placeholderText: 'Save your favorite prompts here',
    position: 2,
    isVisible: true,
    isDefault: true,
  },
  {
    id: 'rabbit-holes',
    name: 'Rabbit Holes',
    placeholderText: 'Ideas worth exploring someday',
    position: 3,
    isVisible: true,
    isDefault: true,
  },
  {
    id: 'done',
    name: 'Done',
    placeholderText: '',
    position: 4,
    isVisible: true,
    isDefault: true,
  },
];
