export default function crearUsuario(datosUsuario) {
    
    let parametros = {
        method: 'POST',
        body: JSON.stringify(datosUsuario),
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return fetch("http://localhost:8080/usuario/", parametros) //ver ruta
} 