const URL_BASE = 'http://localhost:8000/api'

export async function login(email, password) {
  try {
    const responseJson = await fetch(`${URL_BASE}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    });
    const response = await responseJson.json()
    return response
  } catch (error) {
    throw new Error(error)
  }
}



