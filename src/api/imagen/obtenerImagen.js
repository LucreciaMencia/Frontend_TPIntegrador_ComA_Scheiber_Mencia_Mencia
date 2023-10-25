export default function obtenerImagen(id_comida) {

    const token = sessionStorage.getItem('token')

    const parametros = {
        method: 'GET',
        hedears: {
            'Authorization': `Bearer ${token}`
        }
    }

    return fetch(`http://localhost:8080/imagen/${id_comida}`, parametros) 
}