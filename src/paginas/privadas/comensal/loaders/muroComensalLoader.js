import { obtenerComensal } from "../../../../api/comensal";
import { obtenerTodasLasComidas } from "../../../../api/comida";

import { obtenerId } from '../../../../utilerias/index';


export default async function muroComensalLoader() {

    const token = sessionStorage.getItem('token') //guardamos el token de sessionStorage

    //obtenemos los datos del token y guardamos el id_usuario
    const datosToken = obtenerId(token);
    const id_usuario = datosToken.id_usuario;

    //declaro la variable comida y guardo los datos obtenidos
    //debe traer tooodas las comidas de la base de datos
    const comidas = await obtenerTodasLasComidas(token) //hace el fetch
        .then((res) => res.json()) //se convierte en un objeto json

    //declaro la variable comensal y guardo los datos obtenidos
    const comensal = await obtenerComensal(id_usuario, token)
        .then((res) => res.json())


    return { comidas, comensal } //devuleve un OBJETO que contiene esas dos variables

}