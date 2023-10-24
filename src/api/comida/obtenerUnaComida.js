export default function obtenerUnaComida(id_comida) {
    let parametros = {
        method: 'GET',
    }

    return fetch(`http://localhost:8080/comida?comida=${id_comida}`, parametros) 
}