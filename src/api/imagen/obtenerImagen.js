export default function obtenerImagen(id_comida) {
    let parametros = {
        method: 'GET'
    }

    return fetch(`http://localhost:8080/imagen/${id_comida}`, parametros) 
}