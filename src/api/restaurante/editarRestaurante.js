export default function editarRestaurante(datosUsuario, id_usuario) {
    
    let parametros = {
        method: 'PUT',
        body: JSON.stringify(datosUsuario),
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return fetch(`http://localhost:8080/restaurante/${id_usuario}`, parametros) 
}