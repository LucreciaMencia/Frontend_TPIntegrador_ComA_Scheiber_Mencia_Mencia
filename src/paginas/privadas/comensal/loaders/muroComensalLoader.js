import { obtenerComensal } from "../../../../api/comensal";
import { obtenerTodasLasComidas } from "../../../../api/comida";

export default async function muroComensalLoader() {

    const token = sessionStorage.getItem('token') //guardamos el token de sessionStorage
    const id_usuario = 4; //Crear funcion en utilerias para extraer el id_usuario del token y llamarlo aqui

    //declaro la variable comida y guardo los datos obtenidos
    //debe traer tooodas las comidas de la base de datos
    const comidas = await obtenerTodasLasComidas() //hace el fetch
        .then((res) => res.json()) //se convierte en un objeto json

    //declaro la variable comensal y guardo los datos obtenidos
    const comensal = await obtenerComensal(id_usuario, token)
        .then((res) => res.json())


    return { comidas, comensal } //devuleve un OBJETO que contiene esas dos variables

}