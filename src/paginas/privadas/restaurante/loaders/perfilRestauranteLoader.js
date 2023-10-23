//importo funciones
import { obtenerRestaurante } from '../../../../api/restaurante';
import { obtenerComidas } from '../../../../api/comida';

export default async function perfilRestauranteLoader() {

    const token = sessionStorage.getItem('token')
    const id_usuario = 4; //guardar el valor del id del usuario extraido del token

    //declaro la variable comida y guardo los datos obtenidos
    const comidas = await obtenerComidas(id_usuario) //hace el fetch
        .then((res) => res.json()) //se convierte en json

    //declaro la variable restaurante y guardo los datos obtenidos
    const restaurante = await obtenerRestaurante(id_usuario, token)
        .then((res) => res.json())

    return {comidas, restaurante} //devuleve un OBJETO que contiene esas dos variables

}