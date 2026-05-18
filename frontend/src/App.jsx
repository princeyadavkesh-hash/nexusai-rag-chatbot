/**
 * App.jsx — Root component.
 * Wires together layout, state (via useChat), and all child components.
 */

import { useEffect } from 'react'
import { useChat } from './hooks/useChat'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import ChatWindow from './components/ChatWindow'
import ChatInput from './components/ChatInput'
import SuggestionChips from './components/SuggestionChips'

export default function App() {
  const {
    messages,
    suggestions,
    isLoading,
    error,
    isOnboarding,
    userName,
    submit,
    resetChat,
    startOnboarding,
  } = useChat()

  // Kick off the onboarding greeting on first mount
  useEffect(() => {
    startOnboarding()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const inputPlaceholder = isOnboarding
    ? 'Type your answer…'
    : 'Ask NexusAI anything…'

  // Prevent tiny useless inputs like "k", ".", etc.
  const handleSubmit = (message) => {
    if (!message.trim()) return

    if (message.trim().length <= 1) return

    submit(message)
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-surface noise-overlay">
      {/* ── Sidebar ── */}
      <Sidebar
        userName={userName}
        onReset={resetChat}
        isOnboarding={isOnboarding}
      />

      {/* ── Main chat area ── */}
      <div className="flex flex-col flex-1 min-w-0 relative">
        {/* Ambient background mesh */}
        <div className="absolute inset-0 bg-mesh-gradient pointer-events-none z-0" />

        {/* Header */}
        <Header
          onReset={resetChat}
          isOnboarding={isOnboarding}
          isLoading={isLoading}
        />

        {/* Messages */}
        <div className="flex-1 overflow-hidden relative z-10 flex flex-col">
          <ChatWindow messages={messages} isLoading={isLoading} />

          {/* Bottom dock */}
          <div className="px-4 md:px-6 pb-5 pt-3 space-y-3 relative z-10 shrink-0 border-t border-slate-800/60 bg-surface/60 backdrop-blur-sm">
            {/* Suggestion chips */}
            <SuggestionChips
              suggestions={suggestions}
              onSelect={handleSubmit}
              disabled={isLoading}
            />

            {/* Error banner */}
            {error && (
              <div className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg px-3 py-2 animate-fade-in">
                ⚠️ {error}
              </div>
            )}

            {/* Input */}
            <ChatInput
              onSubmit={handleSubmit}
              isLoading={isLoading}
              placeholder={inputPlaceholder}
            />

            {/* Footer disclaimer */}
            <p className="text-center text-xs text-slate-700">
              NexusAI can make mistakes. Verify important information.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
