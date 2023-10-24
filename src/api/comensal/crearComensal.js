export default function crearComensal(datosUsuario) {
    const parametros = {
        method: 'POST',
        body: JSON.stringify(datosUsuario),
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return fetch("http://localhost:8080/comensal/", parametros) 
}