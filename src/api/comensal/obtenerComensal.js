
export default function obtenerComensal(id_usuario, token) {
    const parametros = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    return fetch(`http://localhost:8080/comensal/${id_usuario}`, parametros) 

}