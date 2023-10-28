export default function crearImagen(imagen) {

    const token = sessionStorage.getItem('token')

    const data = new FormData();
    data.append('url-imagen', imagen.url);
    data.append('nombre', imagen.name);

    const parametros = {
        method: 'POST',
        body: data,
        'Authorization': `Bearer ${token}`
    }

    return fetch(`http://localhost:8080/comida/${id_comida}/imagen`, parametros)
}