import {URL_BASE} from "../config";

export async function getAllBooks() {
    try {
        const respuestaJson = await fetch(`${URL_BASE}/books`);
        const respuesta = await respuestaJson.json()
        return respuesta
    } catch (error) {
        throw new Error("Falló el servidor a la hora de obtener libros")
    }

}

export async function deleteBookByCode(codigo = 0) {
    try {
        const respuestaJson = await fetch(`${URL_BASE}/book/${codigo}`, {
            method: "DELETE"
        });
        const respuesta = await respuestaJson.json()
        return respuesta
    } catch (error) {
        throw new Error("Falló el servidor a la hora de eliminar libros")
    }
}

export async function createBook({nom_lib, imagen, precio_lib, aut_lib, gen_lib, stock,}) {
    try {
        const respuestaJson = await fetch(`${URL_BASE}/book`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                nom_lib: nom_lib,
                imagen: imagen,
                precio_lib: precio_lib,
                aut_lib: aut_lib,
                gen_lib: gen_lib,
                stock: stock
            })
        });
        const respuesta = await respuestaJson.json()
        //Si la respuesta llega con una propiedad error quiere decir que no se creó el libro
        let isCreate;
        if (respuesta.error === undefined || respuesta.error === null) {
            isCreate = true;
        } else {
            isCreate = false;
        }
        return {
            isCreate: isCreate,
            data: respuesta
        }

    } catch (error) {
        throw new Error("Falló el servidor a la hora de crear un nuevo libro.")
    }

}

export async function updateBook({codigo, nom_lib, imagen, precio_lib, aut_lib, gen_lib, stock,}) {
    try {
        const respuestaJson = await fetch(`${URL_BASE}/book/${codigo}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                nom_lib: nom_lib,
                imagen: imagen,
                precio_lib: precio_lib,
                aut_lib: aut_lib,
                gen_lib: gen_lib,
                stock: stock
            })
        });
        const respuesta = await respuestaJson.json()
        //Si la respuesta llega con una propiedad error quiere decir que no se creó el libro
        return respuesta;

    } catch (error) {
        throw new Error("Falló el servidor a la hora de crear un nuevo libro.")
    }

}