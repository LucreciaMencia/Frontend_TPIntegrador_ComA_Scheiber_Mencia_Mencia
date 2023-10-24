import { obtenerUsuario } from '../../../../api/usuario/index'
import { obtenerRestaurante } from '../../../../api/restaurante/index'

import { obtenerId } from '../../../../utilerias/index';


export default async function editarRestauranteLoader() {

    const token = sessionStorage.getItem('token') //guardamos el token de sessionStorage

    //obtenemos los datos del token y guardamos el id_usuario
    const datosToken = obtenerId(token);
    const id_usuario = datosToken.id_usuario;
    
    const usuario = await obtenerUsuario(id_usuario)
        .then((res) => res.json())

     //declaro la variable restaurante y guardo los datos obtenidos
     const restaurante = await obtenerRestaurante(id_usuario, token)
     .then((res) => res.json())

 return { usuario, restaurante };
}