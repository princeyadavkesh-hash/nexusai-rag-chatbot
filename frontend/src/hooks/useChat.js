/**
 * hooks/useChat.js — Core state machine for the chat experience.
 *
 * Manages:
 *  - messages array (conversation history)
 *  - onboarding flow
 *  - loading / error states
 *  - suggestion chips
 *  - calls to the API service layer
 */

import { useState, useCallback, useRef } from 'react'
import { sendMessage, fetchSuggestions } from '../services/api'
import { ONBOARDING_STEPS } from '../utils/onboarding'

const ROLE = { USER: 'user', ASSISTANT: 'assistant' }

export function useChat() {
  // ── State ──────────────────────────────────────────────────────────────────
  const [messages, setMessages]         = useState([])
  const [suggestions, setSuggestions]   = useState([])
  const [isLoading, setIsLoading]       = useState(false)
  const [error, setError]               = useState(null)
  const [onboardingStep, setOnboardingStep] = useState(0)
  const [isOnboarding, setIsOnboarding] = useState(true)
  const [userName, setUserName]         = useState('')
  const [useCase, setUseCase]           = useState('')

  // Track the full message history for the API (includes system context)
  const historyRef = useRef([])

  // ── Helpers ────────────────────────────────────────────────────────────────

  const appendMessage = useCallback((role, content) => {
    const msg = { id: crypto.randomUUID(), role, content, timestamp: Date.now() }
    setMessages(prev => [...prev, msg])
    return msg
  }, [])

  const addToHistory = (role, content) => {
    historyRef.current = [...historyRef.current, { role, content }]
  }

  // ── Onboarding flow ────────────────────────────────────────────────────────

  /**
   * Called when the user answers an onboarding question.
   * Drives a guided multi-step welcome conversation.
   */
  const handleOnboardingInput = useCallback(
    async (userText) => {
      appendMessage(ROLE.USER, userText)

      const step = ONBOARDING_STEPS[onboardingStep]

      // Persist answers
      if (step?.field === 'name')    setUserName(userText)
      if (step?.field === 'useCase') setUseCase(userText)

      const nextStep = onboardingStep + 1

      if (nextStep < ONBOARDING_STEPS.length) {
        // Scripted onboarding reply
        setTimeout(() => {
          const reply = ONBOARDING_STEPS[nextStep].botMessage(userText)
          appendMessage(ROLE.ASSISTANT, reply)
          setOnboardingStep(nextStep)
          setSuggestions(ONBOARDING_STEPS[nextStep].suggestions || [])
        }, 600)
      } else {
        // Onboarding done — seed history and unlock free chat
        setIsLoading(true)
        const farewell = `Perfect! I'm all set to help you, ${userName || userText}. Ask me anything — I'm ready! 🚀`
        setTimeout(() => {
          appendMessage(ROLE.ASSISTANT, farewell)
          addToHistory(ROLE.ASSISTANT, farewell)
          setIsOnboarding(false)
          setIsLoading(false)
          setSuggestions([
            'What can you help me with?',
            'Explain machine learning simply',
            'Write me a Python function',
          ])
        }, 700)
      }
    },
    [onboardingStep, appendMessage, userName],
  )

  // ── Free chat ──────────────────────────────────────────────────────────────

  /**
   * Send a user message to the AI and stream back the reply.
   */
  const sendChat = useCallback(
    async (userText) => {
      if (!userText.trim() || isLoading) return

      setError(null)
      setSuggestions([])
      appendMessage(ROLE.USER, userText)
      addToHistory(ROLE.USER, userText)
      setIsLoading(true)

      try {
        const data = await sendMessage(historyRef.current)
        appendMessage(ROLE.ASSISTANT, data.reply)
        addToHistory(ROLE.ASSISTANT, data.reply)

        // Fetch smart follow-up chips in the background
        fetchSuggestions(data.reply)
          .then(setSuggestions)
          .catch(() => {}) // non-critical
      } catch (err) {
        setError(err.message || 'Something went wrong. Please try again.')
        // Append a friendly error bubble
        appendMessage(
          ROLE.ASSISTANT,
          `⚠️ ${err.message || 'Could not reach the server. Is the backend running?'}`,
        )
      } finally {
        setIsLoading(false)
      }
    },
    [isLoading, appendMessage],
  )

  // ── Unified submit ─────────────────────────────────────────────────────────

  const submit = useCallback(
    (text) => {
      if (isOnboarding) {
        handleOnboardingInput(text)
      } else {
        sendChat(text)
      }
    },
    [isOnboarding, handleOnboardingInput, sendChat],
  )

  // ── Reset ──────────────────────────────────────────────────────────────────

  const resetChat = useCallback(() => {
    setMessages([])
    setSuggestions([])
    setError(null)
    setIsLoading(false)
    setOnboardingStep(0)
    setIsOnboarding(true)
    setUserName('')
    setUseCase('')
    historyRef.current = []
  }, [])

  // ── Bootstrap first onboarding message ────────────────────────────────────

  const startOnboarding = useCallback(() => {
    const first = ONBOARDING_STEPS[0]
    appendMessage(ROLE.ASSISTANT, first.botMessage())
    setSuggestions(first.suggestions || [])
  }, [appendMessage])

  return {
    messages,
    suggestions,
    isLoading,
    error,
    isOnboarding,
    userName,
    useCase,
    submit,
    resetChat,
    startOnboarding,
    onboardingStep,
  }
}
