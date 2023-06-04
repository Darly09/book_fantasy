import { URL_BASE } from "../config";

export async function getHomeInformation() {
    try {
        const respuestaJson = await fetch(`${URL_BASE}/home`);
        const respuesta = await  respuestaJson.json()
        return respuesta
    } catch (error) {
        throw new Error(error)
    }
}

