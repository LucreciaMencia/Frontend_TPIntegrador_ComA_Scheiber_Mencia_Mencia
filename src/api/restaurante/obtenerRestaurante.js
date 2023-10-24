export default function obtenerRestaurante(id_usuario, token) {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    const parametros = {
        method: 'GET',
        headers: headers
    }
    return fetch(`http://localhost:8080/restaurante/${id_usuario}`, parametros)
}

