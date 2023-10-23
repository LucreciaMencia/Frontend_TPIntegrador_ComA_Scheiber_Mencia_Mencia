export default function editarComensal(datosUsuario, id_usuario) {
    let parametros = {
        method: 'PUT',
        body: JSON.stringify(datosUsuario),
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return fetch(`http://localhost:8080/comensal/${id_usuario}`, parametros) //ver ruta
}