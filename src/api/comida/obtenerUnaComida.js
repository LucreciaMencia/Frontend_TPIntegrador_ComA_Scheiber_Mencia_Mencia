export default function obtenerUnaComida(id_comida) {
    const parametros = {
        method: 'GET',
    }

    return fetch(`http://localhost:8080/comida?comida=${id_comida}`, parametros) 
}