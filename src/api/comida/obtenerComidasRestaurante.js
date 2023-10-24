export default function obtenerComidasRestaurante(id_usuario) {
    const parametros = {
      method: 'GET'
    }
    return fetch(`http://localhost:8080/comida?restaurante=${id_usuario}`, parametros)
  }