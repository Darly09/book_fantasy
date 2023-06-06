const URL_BASE = 'http://localhost:8000/api'

export async function login(email, password) {
    if (email === "" || password === "") {
        throw new Error("Hay campos que faltan por llenar.")
    }
    try {
        const responseJson = await fetch(`${URL_BASE}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, password: password})
        });
        return await responseJson.json()
    } catch (error) {
        throw new Error(error)
    }
}



