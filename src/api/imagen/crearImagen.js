export default function crearImagen(imagen, id_comida) {
    const token = sessionStorage.getItem('token')

    const data = new FormData();
    data.append('image', imagen, imagen.name);

    const parametros = {
        method: 'POST',
        body: data,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    return fetch(`http://localhost:8080/comida/${id_comida}/imagen`, parametros)
}