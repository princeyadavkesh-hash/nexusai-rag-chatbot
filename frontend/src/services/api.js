/**
 * services/api.js — All HTTP communication with the FastAPI backend.
 *
 * This is the ONLY file that constructs fetch() calls.
 * Components and hooks import from here — never call fetch directly elsewhere.
 */

const API_BASE_URL = "https://nexusai-rag-chatbot.onrender.com"

/** Generic JSON POST helper with error normalisation. */
async function post(path, body) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    // Attempt to read a FastAPI-style error detail
    const err = await res.json().catch(() => ({}))
    throw new Error(err.detail || `Request failed (${res.status})`)
  }

  return res.json()
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Send the full conversation history to the backend and get an AI reply.
 *
 * @param {Array<{role: string, content: string}>} messages
 * @returns {Promise<{reply: string, model: string, usage: object}>}
 */
export async function sendMessage(messages) {
  return post('/api/chat', { messages })
}

/**
 * Fetch contextual follow-up suggestion chips based on the last AI reply.
 *
 * @param {string} lastMessage
 * @returns {Promise<string[]>}
 */
export async function fetchSuggestions(lastMessage) {
  const data = await post('/api/suggestions', { last_message: lastMessage })
  return data.suggestions ?? []
}

/**
 * Ping the /health endpoint to verify the backend is reachable.
 *
 * @returns {Promise<boolean>}
 */
export async function checkHealth() {
  try {
    const res = await fetch(`${BASE_URL}/health`)
    return res.ok
  } catch {
    return false
  }
}
