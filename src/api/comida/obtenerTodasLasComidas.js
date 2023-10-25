export default function obtenerTodasLasComidas(token) {
    const parametros = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    return fetch(`http://localhost:8080/comida`, parametros)

}