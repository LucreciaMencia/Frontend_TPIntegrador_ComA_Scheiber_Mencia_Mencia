export default function crearImagen(datosImagen) {
    let parametros = {
        method: 'Post',
        body: JSON.stringify(datosImagen),
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return fetch("http://localhost:8080/", parametros) //ver ruta
}