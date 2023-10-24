export default function editarRestaurante(datosUsuario, id_usuario) {
    
    const token = sessionStorage.getItem('token') //guardamos el token de sessionStorage

    let parametros = {
        method: 'PUT',
        body: JSON.stringify(datosUsuario),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    return fetch(`http://localhost:8080/restaurante/${id_usuario}`, parametros) 
}