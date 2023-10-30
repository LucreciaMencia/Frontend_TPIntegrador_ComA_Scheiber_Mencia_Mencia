//importar funciones
import { obtenerRestaurante } from "../../../../api/restaurante";
import { obtenerComensal } from "../../../../api/comensal";
import { obtenerId } from '../../../../utilerias/index';
import { obtenerComidasRestaurante } from '../../../../api/comida';



export default async function perfilRestauranteVistaComensalLoader(argumentos) {

    const id_restaurante = argumentos.params.id_restaurante

    const token = sessionStorage.getItem('token') //guardamos el token de sessionStorage

    //obtenemos los datos del token y guardamos el id_usuario
    const datosToken = obtenerId(token);
    const id_usuario = datosToken.id_usuario;

    //declaro la variable comensal y guardo los datos obtenidos
    const comensal = await obtenerComensal(id_usuario, token)
        .then((res) => res.json())

    //declaro la variable restaurante y guardo los datos obtenidos
    const restaurante = await obtenerRestaurante(id_restaurante, token)
        .then((res) => res.json())
    //declaro la variable comida y guardo los datos obtenidos
    
    const comidas = await obtenerComidasRestaurante(id_restaurante) //hace el fetch
        .then((res) => res.json()) //se convierte en un objeto json

    return { comidas, comensal, restaurante } //devuleve un OBJETO que contiene esas dos variables
}