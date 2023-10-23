
export default function crearImagen(imagen) {
    const data = new FormData();
    data.append('url-imagen', imagen.url);
    data.append('nombre', imagen.name);

    let parametros = {
        method: 'POST',
        body: data
    }

    return fetch("http://localhost:8080/comida/imagen", parametros)
}