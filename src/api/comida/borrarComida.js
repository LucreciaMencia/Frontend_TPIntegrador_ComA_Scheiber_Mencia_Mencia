export default function borrarComida(id_comida) {

    const token = sessionStorage.getItem('token')

    const parametros = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    return fetch(`http://localhost:8080/comida/${id_comida}`, parametros) 
}