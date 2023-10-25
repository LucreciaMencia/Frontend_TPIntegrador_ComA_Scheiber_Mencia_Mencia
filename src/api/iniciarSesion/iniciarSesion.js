export default function iniciarSesion(datosUsuario) {
    
    const parametros = {
        method: 'POST',
        body: JSON.stringify(datosUsuario),
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return fetch("http://localhost:8080/sesion/", parametros) 
} 