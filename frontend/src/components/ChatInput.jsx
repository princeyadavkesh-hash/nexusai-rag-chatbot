/**
 * components/ChatInput.jsx
 * Auto-growing textarea with send button, char count, and keyboard shortcut.
 */

import { useState, useRef, useEffect, useCallback } from 'react'
import { Send, Loader2 } from 'lucide-react'
import { cn } from '../utils/cn'

const MAX_CHARS = 2000

export default function ChatInput({ onSubmit, isLoading, placeholder }) {
  const [value, setValue] = useState('')
  const textareaRef = useRef(null)

  // Auto-resize textarea height
  useEffect(() => {
    const ta = textareaRef.current
    if (!ta) return
    ta.style.height = 'auto'
    ta.style.height = `${Math.min(ta.scrollHeight, 200)}px`
  }, [value])

  const handleSubmit = useCallback(() => {
    const trimmed = value.trim()
    if (!trimmed || isLoading || trimmed.length > MAX_CHARS) return
    onSubmit(trimmed)
    setValue('')
    // Reset height
    if (textareaRef.current) textareaRef.current.style.height = 'auto'
  }, [value, isLoading, onSubmit])

  const handleKeyDown = (e) => {
    // Submit on Enter (not Shift+Enter)
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const charsLeft = MAX_CHARS - value.length
  const isOverLimit = charsLeft < 0

  return (
    <div className="relative">
      {/* Inner wrapper with glowing border on focus */}
      <div
        className={cn(
          'flex items-end gap-2 bg-surface-2 rounded-2xl border transition-all duration-200 px-4 py-3',
          'border-slate-700 focus-within:border-nexus-600 focus-within:shadow-glow-sm',
        )}
      >
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || 'Message NexusAI…'}
          rows={1}
          className={cn(
            'flex-1 bg-transparent resize-none outline-none text-sm text-slate-200',
            'placeholder:text-slate-600 leading-relaxed min-h-[24px] max-h-[200px]',
            'font-sans scrollbar-thin',
          )}
          disabled={isLoading}
          maxLength={MAX_CHARS + 100} // soft-cap in UI
        />

        {/* Send button */}
        <button
          onClick={handleSubmit}
          disabled={!value.trim() || isLoading || isOverLimit}
          className={cn(
            'shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200',
            value.trim() && !isLoading && !isOverLimit
              ? 'bg-nexus-600 hover:bg-nexus-500 text-white shadow-glow-sm active:scale-95'
              : 'bg-slate-800 text-slate-600 cursor-not-allowed',
          )}
        >
          {isLoading
            ? <Loader2 size={16} className="animate-spin" />
            : <Send size={16} />
          }
        </button>
      </div>

      {/* Char counter + hint */}
      <div className="flex items-center justify-between mt-1.5 px-1">
        <p className="text-xs text-slate-700">
          <kbd className="font-mono">Enter</kbd> to send · <kbd className="font-mono">Shift+Enter</kbd> for newline
        </p>
        {value.length > 0 && (
          <span className={cn('text-xs', isOverLimit ? 'text-rose-400' : 'text-slate-700')}>
            {charsLeft}
          </span>
        )}
      </div>
    </div>
  )
}
