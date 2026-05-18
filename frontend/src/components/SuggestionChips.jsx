/**
 * components/SuggestionChips.jsx
 * Horizontally-scrollable row of quick-reply suggestion buttons.
 */

import { cn } from '../utils/cn'

export default function SuggestionChips({ suggestions, onSelect, disabled }) {
  if (!suggestions.length) return null

  return (
    <div className="flex gap-2 flex-wrap animate-fade-up">
      {suggestions.map((text, i) => (
        <button
          key={i}
          onClick={() => onSelect(text)}
          disabled={disabled}
          className={cn(
            'px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200',
            'border border-slate-700 text-slate-400',
            'hover:border-nexus-600 hover:text-nexus-300 hover:bg-nexus-900/30',
            'active:scale-95',
            'disabled:opacity-40 disabled:cursor-not-allowed',
          )}
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          {text}
        </button>
      ))}
    </div>
  )
}
