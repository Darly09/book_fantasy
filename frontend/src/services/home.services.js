import homeJson from "../services/mock/home.json";


const URL_BASE = ''
export async function obtener_servicio_home() {
try {
    const respuestaJson = await fetch(`${URL_BASE}`);
    const respuesta = await  respuestaJson.json()
    return respuesta
} catch (error) {
    throw new Error(error)
}
}

export async function getHomeInformation() {
    try {
        return Promise.resolve(homeJson)
    } catch (error) {
        throw new Error(error)
    }
}