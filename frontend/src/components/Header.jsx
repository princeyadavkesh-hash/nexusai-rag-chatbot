/**
 * components/Header.jsx
 * Top bar shown on mobile (hamburger) and as the chat area header.
 */

import { Sparkles, RotateCcw } from 'lucide-react'

export default function Header({ onReset, isOnboarding, isLoading }) {
  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-3.5 border-b border-slate-800 bg-surface-1/80 backdrop-blur-sm shrink-0">
      {/* Mobile logo */}
      <div className="flex items-center gap-2.5 md:hidden">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-nexus-500 to-nexus-700 flex items-center justify-center shadow-glow-sm">
          <Sparkles size={15} className="text-white" />
        </div>
        <span className="font-display font-semibold text-white">NexusAI</span>
      </div>

      {/* Desktop title */}
      <div className="hidden md:flex items-center gap-2">
        <span className="text-sm font-medium text-slate-300">
          {isOnboarding ? 'Getting started' : 'New conversation'}
        </span>
        {!isOnboarding && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            AI Ready
          </span>
        )}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2">
        {/* Model badge */}
        <span className="hidden sm:block text-xs text-slate-600 font-mono">
          llama3-70b
        </span>

        {/* Reset button */}
        <button
          onClick={onReset}
          disabled={isOnboarding || isLoading}
          title="Start new conversation"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-slate-500 hover:text-slate-300 hover:bg-surface-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <RotateCcw size={13} />
          <span className="hidden sm:block">Reset</span>
        </button>
      </div>
    </header>
  )
}
