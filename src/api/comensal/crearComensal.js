export default function crearComensal(datosUsuario) {
    let parametros = {
        method: 'POST',
        body: JSON.stringify(datosUsuario),
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return fetch("http://localhost:8080/comensal/", parametros) 
}