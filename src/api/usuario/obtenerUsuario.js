export default function obtenerUsuario(id_usuario, token) {
    const parametros = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    return fetch(`http://localhost:8080/usuario/${id_usuario}`, parametros) 
}