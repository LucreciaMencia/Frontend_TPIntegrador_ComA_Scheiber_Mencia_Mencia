export default function obtenerRestaurante(id_restaurante, token) {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    let parametros = {
        method: 'GET',
        headers: headers
    }
    return fetch(`http://localhost:8080/restaurante/${id_restaurante}`, parametros)
}

