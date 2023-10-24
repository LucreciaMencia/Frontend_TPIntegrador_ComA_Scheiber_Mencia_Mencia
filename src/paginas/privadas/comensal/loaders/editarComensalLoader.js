import { obtenerComensal } from "../../../../api/comensal";
import { obtenerUsuario } from '../../../../api/usuario';

import { obtenerId } from '../../../../utilerias/index';

export default async function editarComensalLoader() {

    const token = sessionStorage.getItem('token') //guardamos el token de sessionStorage
    
    //obtenemos los datos del token y guardamos el id_usuario
    const datosToken = obtenerId(token);
    const id_usuario = datosToken.id_usuario;

    const usuario = await obtenerUsuario(id_usuario)
        .then((res) => res.json())

    const comensal = await obtenerComensal(id_usuario)
        .then((res) => res.json())

    return { usuario, comensal }
}