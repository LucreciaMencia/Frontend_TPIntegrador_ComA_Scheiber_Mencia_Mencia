//importo funciones
import { obtenerRestaurante } from '../../../../api/restaurante';
import { obtenerComidas } from '../../../../api/comida';

export default async function perfilRestauranteLoader() {

    const token = sessionStorage.getItem('token') //guardamos el token de sessionStorage
    const id_usuario = 4; //Crear funcion en utilerias para extraer el id_usuario del token y llamarlo aqui

    //declaro la variable comida y guardo los datos obtenidos
    const comidas = await obtenerComidas(id_usuario) //hace el fetch
        .then((res) => res.json()) //se convierte en un objeto json

    //declaro la variable restaurante y guardo los datos obtenidos
    const restaurante = await obtenerRestaurante(id_usuario, token)
        .then((res) => res.json())

    return {comidas, restaurante} //devuleve un OBJETO que contiene esas dos variables

}