import { URL_BASE } from "../config";

export async function getAllBooks(){
    try {
        const respuestaJson = await fetch(`${URL_BASE}/books`);
        const respuesta = await  respuestaJson.json()
        return respuesta
    } catch (error) {
      throw new Error("Falló el servidor a la hora de obtener libros") 
    }

}

export async function deleteBookByCode(codigo = 0) {
  try {
    const respuestaJson = await fetch(`${URL_BASE}/book/${codigo}`,{
      method: "DELETE"
    });
    const respuesta = await  respuestaJson.json()
    return respuesta
} catch (error) {
  throw new Error("Falló el servidor a la hora de eliminar libros") 
}
    
    
}