import { obtenerComensal } from "../../../../api/comensal";
import { obtenerUsuario } from '../../../../api/usuario';

export default async function editarComensalLoader() {

    const token = sessionStorage.getItem('token') //guardamos el token de sessionStorage
    const id_usuario = 4; //Crear funcion en utilerias para extraer el id_usuario del token y llamarlo aqui

    const usuario = await obtenerUsuario(id_usuario)
        .then((res) => res.json())

    const comensal = await obtenerComensal(id_usuario)
        .then((res) => res.json())

    return { usuario, comensal }
}