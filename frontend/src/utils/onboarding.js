/**
 * utils/onboarding.js
 * Defines the scripted onboarding conversation steps.
 *
 * Each step has:
 *  - botMessage(prevAnswer?) → string   The message the bot shows
 *  - field?                             Which state field this answer maps to
 *  - suggestions?                       Quick-reply chips shown to the user
 */

export const ONBOARDING_STEPS = [
  {
    field: null,
    botMessage: () =>
      `👋 Welcome to **NexusAI**! I'm your intelligent assistant powered by LLaMA 3.\n\nBefore we dive in — what's your name?`,
    suggestions: ["I'd rather skip", 'Call me Alex', 'Call me Jordan'],
  },
  {
    field: 'name',
    botMessage: (name) =>
      `Great to meet you, **${name}**! 🎉\n\nWhat brings you here today? I can help with coding, writing, research, brainstorming, and much more.`,
    suggestions: [
      '💻 Coding & tech',
      '✍️ Writing & content',
      '📊 Research & analysis',
      '🧠 General Q&A',
    ],
  },
  {
    field: 'useCase',
    botMessage: (useCase) =>
      `Awesome — **${useCase}** it is! I'm optimised for that.\n\nOne last thing: how would you like my responses? Short and punchy, or detailed and thorough?`,
    suggestions: ['Short & punchy ⚡', 'Detailed & thorough 📖', 'Mix it up 🎲'],
  },
  {
    field: 'style',
    botMessage: () => null, // terminal step — handled in hook
    suggestions: [],
  },
]

/** Human-readable labels for chat timestamps. */
export function formatTime(timestamp) {
  return new Intl.DateTimeFormat('en', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(new Date(timestamp))
}
