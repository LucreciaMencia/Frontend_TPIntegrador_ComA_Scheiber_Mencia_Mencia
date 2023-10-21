export default function obtenerComidas(id_restaurante) {
    let parametros = {
      method: 'GET'
    }
    return fetch(`http://localhost:8080/comida?restaurante=${id_restaurante}`, parametros)
  }