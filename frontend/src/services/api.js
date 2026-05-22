// frontend/src/services/api.js

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function sendMessage(message) {
  try {
    const response = await fetch(`${BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })

    if (!response.ok) {
      throw new Error('Failed to get response')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function checkHealth() {
  try {
    const res = await fetch(`${BASE_URL}/health`)
    return res.ok
  } catch {
    return false
  }
}