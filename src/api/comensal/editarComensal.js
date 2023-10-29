export default function editarComensal(datosUsuario, id_usuario) {

    const token = sessionStorage.getItem('token')

    const parametros = {
        method: 'PUT',
        body: JSON.stringify(datosUsuario),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    return fetch(`http://localhost:8080/comensal/${id_usuario}`, parametros) 
}