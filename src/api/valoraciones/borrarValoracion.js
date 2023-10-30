export default function borrarValoracion(id_valoracion) {

    const token = sessionStorage.getItem('token')

    const parametros = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    return fetch(`http://localhost:8080/valoracion/${id_valoracion}`, parametros) 
}