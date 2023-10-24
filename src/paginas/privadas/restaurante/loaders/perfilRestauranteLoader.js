//importo funciones
import { obtenerRestaurante } from '../../../../api/restaurante';
import { obtenerComidasRestaurante } from '../../../../api/comida';

import { obtenerId } from '../../../../utilerias/index';


export default async function perfilRestauranteLoader() {

    const token = sessionStorage.getItem('token') //guardamos el token de sessionStorage

    //obtenemos los datos del token y guardamos el id_usuario
    const datosToken = obtenerId(token);
    const id_usuario = datosToken.id_usuario;
    
    //declaro la variable comida y guardo los datos obtenidos
    const comidas = await obtenerComidasRestaurante(id_usuario) //hace el fetch
        .then((res) => res.json()) //se convierte en un objeto json

    //declaro la variable restaurante y guardo los datos obtenidos
    const restaurante = await obtenerRestaurante(id_usuario, token)
        .then((res) => res.json())

    return {comidas, restaurante} //devuleve un OBJETO que contiene esas dos variables
}