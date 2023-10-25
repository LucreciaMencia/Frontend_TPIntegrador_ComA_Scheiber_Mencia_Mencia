export default function obtenerComidasValoradasPorComensal(id_usuario, token) {
    const parametros = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    return fetch(`http://localhost:8080/comida?id_usuario=${id_usuario}`, parametros) 
}