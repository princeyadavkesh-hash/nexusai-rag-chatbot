const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function sendMessage(message) {
  try {
    const response = await fetch(`${BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error(errText)
      throw new Error('Failed to get response')
    }

    return await response.json()

  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function fetchSuggestions() {
  return []
}