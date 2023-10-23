export default function obtenerValoracion(id_usuario) {
    let parametros = {
        method: 'GET',
    }

    return fetch(`http://localhost:8080/valoracion?comensal=${id_usuario}`, parametros) 
}