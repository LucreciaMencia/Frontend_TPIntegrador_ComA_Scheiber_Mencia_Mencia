export default function crearComida(datosComida) {

    const token = sessionStorage.getItem('token')

    const parametros = {
        method: 'POST',
        body: JSON.stringify(datosComida),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    return fetch("http://localhost:8080/comida/cargar", parametros) //ver ruta
}