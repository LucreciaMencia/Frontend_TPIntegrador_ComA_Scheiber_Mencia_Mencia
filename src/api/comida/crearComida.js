export default function crearComida(datosComida) {
    let parametros = {
        method: 'POST',
        body: JSON.stringify(datosComida),
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return fetch("http://localhost:8080/comida/", parametros) //ver ruta
}