/**
 * components/ChatMessage.jsx
 * Renders a single chat bubble — user or assistant.
 * Uses react-markdown for rich text rendering.
 */

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Sparkles, User } from 'lucide-react'
import { cn } from '../utils/cn'
import { formatTime } from '../utils/onboarding'

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user'

  return (
    <div
      className={cn(
        'flex gap-3 animate-fade-up',
        isUser ? 'flex-row-reverse' : 'flex-row',
      )}
    >
      {/* Avatar */}
      <div className={cn(
        'w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5',
        isUser
          ? 'bg-nexus-600 shadow-glow-sm'
          : 'bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-700',
      )}>
        {isUser
          ? <User size={15} className="text-white" />
          : <Sparkles size={15} className="text-nexus-400" />
        }
      </div>

      {/* Bubble */}
      <div className={cn(
        'max-w-[78%] md:max-w-[68%] rounded-2xl px-4 py-3',
        isUser
          ? 'bg-nexus-700 text-white rounded-tr-sm'
          : 'bg-surface-2 border border-slate-800 rounded-tl-sm',
      )}>
        {isUser ? (
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="prose-chat text-sm">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.content}
            </ReactMarkdown>
          </div>
        )}

        {/* Timestamp */}
        <div className={cn(
          'text-xs mt-2 opacity-40',
          isUser ? 'text-nexus-200 text-right' : 'text-slate-500',
        )}>
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  )
}
