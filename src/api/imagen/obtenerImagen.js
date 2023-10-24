export default function obtenerImagen(id_comida) {
    const parametros = {
        method: 'GET'
    }

    return fetch(`http://localhost:8080/imagen/${id_comida}`, parametros) 
}