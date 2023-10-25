export default function obtenerComidasValoradasPorComensal(id_usuario) {

    const token = sessionStorage.getItem('token')

    const parametros = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    return fetch(`http://localhost:8080/comida?comensal=${id_usuario}`, parametros)
}