export default function obtenerComidasRestaurante(id_usuario) {

  const token = sessionStorage.getItem('token')

  const parametros = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }
  return fetch(`http://localhost:8080/comida?restaurante=${id_usuario}`, parametros)
}