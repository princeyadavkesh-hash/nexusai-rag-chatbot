/**
 * components/ChatWindow.jsx
 * Scrollable area that renders all messages + typing indicator.
 */

import ChatMessage from './ChatMessage'
import TypingIndicator from './TypingIndicator'
import WelcomeScreen from './WelcomeScreen'
import { useAutoScroll } from '../hooks/useAutoScroll'

export default function ChatWindow({ messages, isLoading }) {
  const scrollRef = useAutoScroll([messages.length, isLoading])

  if (messages.length === 0 && !isLoading) {
    return <WelcomeScreen />
  }

  return (
    <div
      ref={scrollRef}
      className="flex-1 overflow-y-auto px-4 md:px-6 py-6 space-y-5"
    >
      {messages.map((msg) => (
        <ChatMessage key={msg.id} message={msg} />
      ))}

      {isLoading && <TypingIndicator />}
    </div>
  )
}
