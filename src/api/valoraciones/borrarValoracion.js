export default function borrarValoracin(id_valoracion) {
    const parametros = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return fetch(`http://localhost:8080/valoracion/${id_valoracion}`, parametros) 
}