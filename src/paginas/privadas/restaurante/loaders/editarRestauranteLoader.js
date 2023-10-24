import { obtenerUsuario } from '../../../../api/usuario/index'
import { obtenerRestaurante } from '../../../../api/restaurante/index'

export default async function editarRestauranteLoader() {

    const token = sessionStorage.getItem('token') //guardamos el token de sessionStorage
    const id_usuario = 4; //Crear funcion en utilerias para extraer el id_usuario del token y llamarlo aqui

    const usuario = await obtenerUsuario(id_usuario)
        .then((res) => res.json())

     //declaro la variable restaurante y guardo los datos obtenidos
     const restaurante = await obtenerRestaurante(id_usuario, token)
     .then((res) => res.json())

 return { usuario, restaurante };
}