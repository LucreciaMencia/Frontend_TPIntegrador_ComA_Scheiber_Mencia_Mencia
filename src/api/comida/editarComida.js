export default function editarComida(datosComida, id_comida) {
    let parametros = {
        method: 'PUT',
        body: JSON.stringify(datosComida),
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return fetch(`http://localhost:8080/comida/${id_comida}`, parametros) 
}