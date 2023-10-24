export default function crearValoracion(datosValoracion) {
    const parametros = {
        method: 'POST',
        body: JSON.stringify(datosValoracion),
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return fetch("http://localhost:8080/valoracion/", parametros) 
}