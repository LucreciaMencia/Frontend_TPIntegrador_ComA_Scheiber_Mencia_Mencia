export default function borrarRestaurante(id_usuario) {
    
    const parametros = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return fetch(`http://localhost:8080/restaurante/${id_usuario}`, parametros) 
}