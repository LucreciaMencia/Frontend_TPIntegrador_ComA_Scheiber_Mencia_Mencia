export default function borrarComensal(id_usuario) {
    const parametros = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return fetch(`http://localhost:8080/comensal/${id_usuario}`, parametros)
}