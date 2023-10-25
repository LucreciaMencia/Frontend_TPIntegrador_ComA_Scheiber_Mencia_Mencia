export default function borrarRestaurante(id_usuario) {

    const token = sessionStorage.getItem('token')
    
    const parametros = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    return fetch(`http://localhost:8080/restaurante/${id_usuario}`, parametros) 
}