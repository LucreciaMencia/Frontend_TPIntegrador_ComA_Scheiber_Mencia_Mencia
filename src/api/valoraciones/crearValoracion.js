export default function crearValoracion(datosValoracion) {
    
    const token = sessionStorage.getItem('token')

    const parametros = {
        method: 'POST',
        body: JSON.stringify(datosValoracion),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    return fetch("http://localhost:8080/valoracion/", parametros) 
}