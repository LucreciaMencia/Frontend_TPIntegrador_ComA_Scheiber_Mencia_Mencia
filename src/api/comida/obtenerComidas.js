export default function obtenerComidas(id_usuario) {
    let parametros = {
      method: 'GET'
    }
    return fetch(`http://localhost:8080/comida?restaurante=${id_usuario}`, parametros)
  }