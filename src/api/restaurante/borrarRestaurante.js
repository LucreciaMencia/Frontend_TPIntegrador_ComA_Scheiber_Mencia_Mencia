export default function borrarRestaurante(id_usuario) {
    
    let parametros = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return fetch(`http://localhost:8080/restaurante/${id_usuario}`, parametros) 
}