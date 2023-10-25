export default function obtenerUnaComida(id_comida) {

    const token = sessionStorage.getItem('token')

    const parametros = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    return fetch(`http://localhost:8080/comida?comida=${id_comida}`, parametros) 
}