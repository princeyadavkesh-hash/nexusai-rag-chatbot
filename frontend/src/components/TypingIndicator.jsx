/**
 * components/TypingIndicator.jsx
 * Animated "AI is thinking" dots shown while waiting for a response.
 */

import { Sparkles } from 'lucide-react'

export default function TypingIndicator() {
  return (
    <div className="flex gap-3 animate-fade-in">
      {/* Avatar */}
      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
        <Sparkles size={15} className="text-nexus-400 animate-glow-pulse" />
      </div>

      {/* Bubble */}
      <div className="bg-surface-2 border border-slate-800 rounded-2xl rounded-tl-sm px-4 py-3.5">
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-nexus-400 animate-pulse-dot"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
