import { BarraDeNavComensal } from '../../../navBar/Index'
import '../../../estilos/Estilos.css'
import { useLoaderData } from 'react-router-dom';



function EditarComensal() {
    const estilo = {
        color: 'white'
    }

    //asigno en datos el objeto que me devuelve useLoaderData()
    const datos = useLoaderData();

    const infoUsuario = datos.usuario;

    //asigno en infoComensal el objeto comensal contenido en el objeto datos
    const infoComensal = datos.comensal;

    return (
        <>
            <nav>
                <BarraDeNavComensal
                    nombre_comensal={infoComensal.nombre}
                    apellido_comensal={infoComensal.apellido}
                />
            </nav>
            <br></br>
            <div className='login template d-flex justify-content-center align-items-center vh-100 bg-white'>
                <div className='form_container p-5 rounded custom-bg'>
                    <form style={estilo}>

                        <h3 className='text-center'>Editar Usuario</h3>
                        <br></br>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>Nombre de usuario</label>
                            <input type="text" placeholder='nuevo nickname' className='form-control' value={infoUsuario.nickname}></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='mail'>Mail</label>
                            <input type="email" value={infoUsuario.mail} placeholder='nuevo mail' className='form-control'></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='password'>Contraseña</label>
                            <input type="password" placeholder='**********' className='form-control'></input>
                        </div>
                        <div className='d-grid mt-2'>
                            <button className='entrarButton btn btn-outline-secondary'>Guardar cambios</button>
                        </div>
                        <br></br>
                        <h4 className='text-center'>Editar datos del comensal</h4>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>Nombre del comensal</label>
                            <input type="text" value={infoComensal.nombre} placeholder='Nuevo Nombre' className='form-control'></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>Apellido</label>
                            <input type="text" value={infoComensal.apellido} placeholder='Nuevo apellido' className='form-control'></input>
                        </div>
                        <div className='d-grid mt-2'>
                            <button className='entrarButton btn btn-outline-secondary'>Guardar cambios</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditarComensal