const URL_BASE = 'http://localhost:8000/api'

export async function getHomeInformation() {
    try {
        const respuestaJson = await fetch(`${URL_BASE}/home`);
        const respuesta = await  respuestaJson.json()
        return respuesta
    } catch (error) {
        throw new Error(error)
    }
}