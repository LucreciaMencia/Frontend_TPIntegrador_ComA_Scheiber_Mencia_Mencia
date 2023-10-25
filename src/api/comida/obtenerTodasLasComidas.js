export default function obtenerTodasLasComidas() {

    const parametros = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(`http://localhost:8080/comida`, parametros)
}