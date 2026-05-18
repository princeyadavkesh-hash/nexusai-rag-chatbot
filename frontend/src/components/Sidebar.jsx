/**
 * components/Sidebar.jsx
 * Left sidebar — branding, nav, and new-chat button.
 */

import { Sparkles, MessageSquarePlus, History, Settings, Zap } from 'lucide-react'
import { cn } from '../utils/cn'

export default function Sidebar({ userName, onReset, isOnboarding }) {
  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 bg-surface-1 border-r border-slate-800 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-radial from-nexus-900/40 to-transparent pointer-events-none" />
      <div className="glow-line absolute top-0 left-0 right-0" />

      {/* Logo */}
      <div className="px-5 pt-7 pb-5 flex items-center gap-3 relative z-10">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-nexus-500 to-nexus-700 flex items-center justify-center shadow-glow-sm">
          <Sparkles size={18} className="text-white" />
        </div>
        <div>
          <span className="font-display font-semibold text-white tracking-tight text-lg">NexusAI</span>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-slate-500">LLaMA 3 · 70B</span>
          </div>
        </div>
      </div>

      {/* New Chat Button */}
      <div className="px-4 pb-4 relative z-10">
        <button
          onClick={onReset}
          disabled={isOnboarding}
          className={cn(
            'w-full flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
            'bg-nexus-600 hover:bg-nexus-500 text-white shadow-glow-sm',
            'disabled:opacity-40 disabled:cursor-not-allowed',
          )}
        >
          <MessageSquarePlus size={16} />
          New Conversation
        </button>
      </div>

      {/* Divider */}
      <div className="mx-4 h-px bg-slate-800 relative z-10" />

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 relative z-10">
        <SidebarItem icon={<MessageSquarePlus size={16} />} label="Chat" active />
        <SidebarItem icon={<History size={16} />} label="History" disabled />
        <SidebarItem icon={<Settings size={16} />} label="Settings" disabled />
      </nav>

      {/* User badge */}
      {userName && (
        <div className="px-4 py-4 border-t border-slate-800 relative z-10">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-surface-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-nexus-400 to-nexus-600 flex items-center justify-center text-xs font-bold text-white">
              {userName[0]?.toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-200 truncate">{userName}</p>
              <p className="text-xs text-slate-500">Free plan</p>
            </div>
          </div>
        </div>
      )}

      {/* Powered by chip */}
      <div className="px-4 pb-5 relative z-10">
        <div className="flex items-center gap-1.5 text-xs text-slate-600">
          <Zap size={11} />
          <span>Powered by Groq · LLaMA 3</span>
        </div>
      </div>
    </aside>
  )
}

function SidebarItem({ icon, label, active, disabled }) {
  return (
    <button
      disabled={disabled}
      className={cn(
        'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150',
        active
          ? 'bg-nexus-900/60 text-nexus-300 font-medium'
          : 'text-slate-500 hover:text-slate-300 hover:bg-surface-2',
        disabled && 'opacity-40 cursor-not-allowed',
      )}
    >
      {icon}
      {label}
    </button>
  )
}
