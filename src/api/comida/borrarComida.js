export default function borrarComida(id_comida) {
    const parametros = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return fetch(`http://localhost:8080/comida/${id_comida}`, parametros) 
}