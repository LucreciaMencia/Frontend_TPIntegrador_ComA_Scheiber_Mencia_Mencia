//importar funciones
import { obtenerComensal } from "../../../../api/comensal";
import { obtenerComidas } from "../../../../api/comida";


export default async function perfilComensalLoader() {

    const token = sessionStorage.getItem('token') //guardamos el token de sessionStorage
    const id_usuario = 4; //Crear funcion en utilerias para extraer el id_usuario del token y llamarlo aqui

    //declaro la variable comida y guardo los datos obtenidos
    const comidas = await obtenerComidas(id_usuario) //hace el fetch
        .then((res) => res.json()) //se convierte en un objeto json

    //declaro la variable comensal y guardo los datos obtenidos
    const comensal = await obtenerComensal(id_usuario, token)
        .then((res) => res.json())

    return { comidas, comensal } //devuleve un OBJETO que contiene esas dos variables
}