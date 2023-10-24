export default function editarComida(datosComida, id_comida) {
   
    const token = sessionStorage.getItem('token') //guardamos el token de sessionStorage
   
    const parametros = {
        method: 'PUT',
        body: JSON.stringify(datosComida),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    return fetch(`http://localhost:8080/comida/${id_comida}`, parametros) 
}