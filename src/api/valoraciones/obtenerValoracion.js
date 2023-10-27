export default function obtenerValoracion(id_usuario) {

    const token = sessionStorage.getItem('token')

    const parametros = {
        method: 'GET',
        'Authorization': `Bearer ${token}`
    }

    return fetch(`http://localhost:8080/valoracion?comensal=${id_usuario}`, parametros) 
}