'use client';

import { useState } from 'react';
import { Column } from '@/types';

interface ProjectsBarProps {
  columns: Column[];
  onColumnsChange?: (columns: Column[]) => void;
}

export function ProjectsBar({ columns, onColumnsChange }: ProjectsBarProps) {
  const [showColumnsDropdown, setShowColumnsDropdown] = useState(false);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');

  return (
    <div className="flex items-center gap-4 px-8 py-4 border-b border-[var(--border)]">
      {/* All Notes Button */}
      <button className="flex items-center gap-2 bg-[var(--primary)] text-white px-4 py-2 rounded-xl text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        All Notes
      </button>

      {/* Add Folder */}
      {isAddingProject ? (
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
            placeholder="Folder name..."
            className="px-4 py-2 bg-white border border-[var(--border)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter' && newProjectName.trim()) {
                setNewProjectName('');
                setIsAddingProject(false);
              } else if (e.key === 'Escape') {
                setIsAddingProject(false);
                setNewProjectName('');
              }
            }}
          />
          <button
            onClick={() => {
              if (newProjectName.trim()) {
                setNewProjectName('');
                setIsAddingProject(false);
              }
            }}
            className="w-9 h-9 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-xl flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsAddingProject(true)}
          className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary)] text-sm transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          New Folder
        </button>
      )}

      {/* Columns Dropdown */}
      <div className="relative ml-auto">
        <button
          onClick={() => setShowColumnsDropdown(!showColumnsDropdown)}
          className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all duration-200 ${
            showColumnsDropdown
              ? 'bg-[var(--primary-light)] text-[var(--primary)]'
              : 'text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--background-warm)]'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
          </svg>
          Columns
          <svg className={`w-3 h-3 transition-transform duration-200 ${showColumnsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showColumnsDropdown && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowColumnsDropdown(false)}
            />
            <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-lg border border-[var(--border)] z-20 overflow-hidden animate-fade-in">
              <div className="p-4 border-b border-[var(--border)] bg-[var(--background)]">
                <h4 className="text-sm font-semibold text-[var(--text-primary)]">Manage Columns</h4>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">Drag to reorder, toggle visibility</p>
              </div>
              <div className="p-2 space-y-1 max-h-80 overflow-y-auto">
                {columns.map((column) => (
                  <div
                    key={column.id}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[var(--background)] group transition-colors"
                  >
                    <svg className="w-4 h-4 text-[var(--text-muted)] cursor-grab group-hover:text-[var(--text-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7 2a2 2 0 10.001 4.001A2 2 0 007 2zm0 6a2 2 0 10.001 4.001A2 2 0 007 8zm0 6a2 2 0 10.001 4.001A2 2 0 007 14zm6-8a2 2 0 10-.001-4.001A2 2 0 0013 6zm0 2a2 2 0 10.001 4.001A2 2 0 0013 8zm0 6a2 2 0 10.001 4.001A2 2 0 0013 14z" />
                    </svg>
                    <span className="flex-1 text-sm text-[var(--text-primary)]">{column.name}</span>
                    {column.isDefault && (
                      <span className="text-[10px] font-medium text-[var(--text-muted)] bg-[var(--background-warm)] px-2 py-0.5 rounded-full uppercase tracking-wide">
                        default
                      </span>
                    )}
                    <button className="p-1.5 text-[var(--text-muted)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)] rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    <button className="p-1.5 text-[var(--text-muted)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)] rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              <div className="p-2 border-t border-[var(--border)]">
                <button className="flex items-center gap-2 w-full px-3 py-2.5 text-sm text-[var(--primary)] hover:bg-[var(--primary-light)] rounded-xl transition-colors font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Column
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
