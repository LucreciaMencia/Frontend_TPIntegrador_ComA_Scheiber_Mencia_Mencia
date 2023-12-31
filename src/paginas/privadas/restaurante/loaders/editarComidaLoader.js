//importo funciones
import { obtenerUnaComida } from "../../../../api/comida";
import { obtenerRestaurante } from "../../../../api/restaurante";

import { obtenerId } from '../../../../utilerias/index';

export default async function editarComidaLoader(argumentos) {

    const id_comida = argumentos.params.id_comida

    const token = sessionStorage.getItem('token') //guardamos el token de sessionStorage

    //obtenemos los datos del token y guardamos el id_usuario
    const datosToken = obtenerId(token);
    const id_usuario = datosToken.id_usuario;

    
    const comida = await obtenerUnaComida(id_comida)
        .then((res) => res.json())

    //declaro la variable restaurante y guardo los datos obtenidos
    const restaurante = await obtenerRestaurante(id_usuario, token)
        .then((res) => res.json())

    return { comida, restaurante };
}