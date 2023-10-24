//importo funciones
import { obtenerUnaComida } from "../../../../api/comida";
import { obtenerRestaurante } from "../../../../api/restaurante";

export default async function editarComidaLoader() {

    const token = sessionStorage.getItem('token') //guardamos el token de sessionStorage
    const id_usuario = 4; //Crear funcion en utilerias para extraer el id_usuario del token y llamarlo aqui

    const comida = await obtenerUnaComida(id_usuario)
        .then((res) => res.json())

    //declaro la variable restaurante y guardo los datos obtenidos
    const restaurante = await obtenerRestaurante(id_usuario, token)
        .then((res) => res.json())

    return { comida, restaurante };
}