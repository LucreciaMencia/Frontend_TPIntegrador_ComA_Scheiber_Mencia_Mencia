import { BarraDeNavComensal } from '../../../navBar/Index'
import '../../../estilos/Estilos.css'
import editarComensal from '../../../api/comensal/editarComensal';
import editarUsuario from '../../../api/usuario/editarUsuario'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react'
import { toastExitoso, toastError } from '../../../utilerias/toast'
import { obtenerId } from '../../../utilerias/index';


function EditarComensal() {
    const estilo = {
        color: 'white'
    }

    //asigno en datos el objeto que me devuelve useLoaderData()
    const datos = useLoaderData();

    const infoUsuario = datos.usuario;

    //asigno en infoComensal el objeto comensal contenido en el objeto datos
    const infoComensal = datos.comensal;

    const navigate = useNavigate();

    const [formulario, setFormulario] = useState({
        nickname: '',
        mail: '',
        password: '',
        nombre: '',
        apellido: ''
    })

    const handleSubmit = useCallback((event) => {
        event.preventDefault()

        const usuario = {
            nickname: formulario.nickname,
            mail: formulario.mail,
            password: formulario.password
        }

        const comensal = {
            nombre: formulario.nombre,
            apellido: formulario.apellido
        }

        const token = sessionStorage.getItem('token');
        const id_usuario = obtenerId(token);

        editarUsuario(usuario, id_usuario)
        editarComensal(comensal, id_usuario)
            .then(result => { 
                toastExitoso("Se han modificado sus datos")
                navigate('/perfilComensal')
            })
            .catch((error) => {
                toastError(error.message)
            });
    }, [formulario, navigate]);

    function handleChange(event) {
        setFormulario((valorActualDeFormulario) => {
            return {
                ...valorActualDeFormulario,
                [event.target.name]: event.target.value
            }
        });
    }


    return (
        <>
            <nav>
                <BarraDeNavComensal
                    nombre_comensal={infoComensal.nombre}
                />
            </nav>
            <br></br>
            <div className='login template d-flex justify-content-center align-items-center vh-100 bg-white'>
                <div className='form_container p-5 rounded custom-bg'>
                    <form onSubmit={handleSubmit} style={estilo}>

                        <h3 className='text-center'>Editar Usuario</h3>
                        <br></br>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>{infoUsuario.nickname}</label>
                            <input type="text" placeholder='nuevo nickname' className='form-control'
                            onChange={handleChange}
                            value={formulario.nickname}
                            name='nickmane'>
                            </input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='mail'>{infoUsuario.mail}</label>
                            <input type="email" placeholder='nuevo mail' className='form-control'
                            onChange={handleChange}
                            value={formulario.mail}
                            name='mail'>
                            </input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='password'>Contraseña</label>
                            <input type="password" placeholder='**********' className='form-control'
                            onChange={handleChange}
                            value={formulario.password}
                            name='password'>
                            </input>
                        </div>
                        <div className='d-grid mt-2'>
                            <button className='btn btn-outline-secondary'>Guardar cambios</button>
                        </div>
                        <br></br>
                        <h4 className='text-center'>Editar Comensal</h4>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>{infoComensal.nombre}</label>
                            <input type="text" placeholder='Juan Luis' className='form-control'
                            onChange={handleChange}
                            value={formulario.nombre}
                            name='nombre'>
                            </input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>{infoComensal.apellido}</label>
                            <input type="text" placeholder='Guerra' className='form-control'
                            onChange={handleChange}
                            value={formulario.apellido}
                            name='apellido'>
                            </input>
                        </div>
                        <div className='d-grid mt-2'>
                            <button className='btn btn-outline-secondary'>Guardar cambios</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditarComensal