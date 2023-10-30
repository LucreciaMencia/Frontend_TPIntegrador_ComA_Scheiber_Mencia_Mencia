import { BarraDeNavComensal } from '../../../navBar/Index'
import '../../../estilos/Estilos.css'
import editarComensal from '../../../api/comensal/editarComensal';
import editarUsuario from '../../../api/usuario/editarUsuario'
import { useLoaderData, Link, useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react'
import { toastExitoso, toastError } from '../../../utilerias/toast'
import { obtenerId } from '../../../utilerias/index';


function EditarComensal() {
    const estilo = {
        color: 'white'
    }

    const navigate = useNavigate()

    //asigno en datos el objeto que me devuelve useLoaderData()
    const datos = useLoaderData();

    const infoUsuario = datos.usuario;

    //asigno en infoComensal el objeto comensal contenido en el objeto datos
    const infoComensal = datos.comensal;

    const initialFormUser = {
        nickname: infoUsuario.nickname || '',
        mail: infoUsuario.mail || '',
      };

    const [formUser, setFormUser] = useState(initialFormUser);

    const [formPassword, setFormPassword] = useState({
        password: ''
    })

    const initialFormComensal = {
        nombre: infoComensal.nombre || '',
        apellido: infoComensal.apellido || '',
      };

    const [formComensal, setFormComensal] = useState(initialFormComensal);

    const [errUser, setErrUser] = useState({
        nickname: '',
        mail: ''
    })

    const [errPassword, setErrPassword] = useState({
        password: ''
    })

    const [errComensal, setErrComensal] = useState({
        nombre: '',
        apellido: ''
    })

    const handleSubmitFormUser = useCallback((event) => {
        event.preventDefault()

        const usuario = {
            nickname: formUser.nickname,
            mail: formUser.mail,
        }

        const token = sessionStorage.getItem('token');
        const id_usuario = obtenerId(token).id_usuario;

        if (validateFormUser()) {
            editarUsuario(usuario, id_usuario)
                .then(result => {
                    toastExitoso("Se han modificado sus datos de Usuario")
                    navigate('/editarComensal')
                })
                .catch((error) => {
                    toastError(error.message)
                });
        }
    }, [formUser, navigate]);

    const handleSubmitFormPassword = useCallback((event) => {
        event.preventDefault()

        const contraseña = {
            password: formPassword.password
        }

        const token = sessionStorage.getItem('token');
        const id_usuario = obtenerId(token).id_usuario;

        if (validateFormPassword()) {
            editarUsuario(contraseña, id_usuario)
                .then(result => {
                    toastExitoso("Se ha modificado su contraseña")
                    navigate('/editarComensal')
                })
                .catch((error) => {
                    toastError(error.message)
                });
        }
    }, [formPassword, navigate]);

    const handleSubmitFormComensal = useCallback((event) => {
        event.preventDefault()

        const comensal = {
            nombre: formComensal.nombre,
            apellido: formComensal.apellido
        }

        const token = sessionStorage.getItem('token');
        const id_usuario = obtenerId(token).id_usuario;

        if (validateFormComensal()) {
            editarComensal(comensal, id_usuario)
                .then(result => {
                    toastExitoso("Se han modificado sus datos personales")
                    navigate('/editarComensal')
                })
                .catch((error) => {
                    toastError(error.message)
                });
        }
    }, [formComensal, navigate]);


    const validateFormUser = () => {
        let valid = true;
        const errors = {};

        if (!formUser.nickname && formUser.nickname !== infoUsuario.nickname) {
            valid = false;
            errors.nickname = "Campo obligatorio";
        }

        if (!formUser.mail && formUser.mail !== infoUsuario.mail) {
            valid = false;
            errors.mail = "Campo obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(formUser.mail)) {
            valid = false;
            errors.mail = "El email es inválido"
        }

        setErrUser(errors);
        return valid;
    };

    const validateFormPassword = () => {
        let valid = true;
        const errors = {};

        if (!formPassword.password) {
            valid = false;
            errors.password = "Campo obligatorio";
        } else if (formPassword.password.length < 6) {
            valid = false;
            errors.password = "La contraseña debe tener al menos 6 dígitos"
        }

        setErrPassword(errors);
        return valid;
    };

    const validateFormComensal = () => {
        let valid = true;
        const errors = {};

        if (!formComensal.nombre && formComensal.nombre !== infoComensal.nombre) {
            valid = false;
            errors.nombre = "Campo obligatorio";
        }

        if (!formComensal.apellido && formComensal.apellido !== infoComensal.apellido) {
            valid = false;
            errors.apellido = "Campo obligatorio";
        }

        setErrComensal(errors);
        return valid;
    };



    function handleChange(event) {
        setFormUser((valorActualDeFormulario) => {
            return {
                ...valorActualDeFormulario,
                [event.target.name]: event.target.value
            }
        });

        setFormPassword((valorActualDeFormulario) => {
            return {
                ...valorActualDeFormulario,
                [event.target.name]: event.target.value
            }
        });

        setFormComensal((valorActualDeFormulario) => {
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
                    nombre_comensal={infoComensal.nombre_comensal}
                    apellido_comensal={infoComensal.apellido_comensal}
                />
            </nav>
            <br></br>
            <div className='login template d-flex justify-content-center align-items-center bg-white'>
                <div className='form_container p-5 rounded custom-bg'>
                    <form onSubmit={handleSubmitFormUser} style={estilo}>

                        <h3 className='text-center'>Editar Usuario</h3>
                        <br></br>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>Nickname</label>
                            <input type="text" placeholder='nuevo nickname' className='form-control'
                                onChange={handleChange}
                                value={formUser.nickname !== '' ? formUser.nickname : infoUsuario.nickname}
                                name='nickname'>
                            </input>
                            {errUser.nickname && <p style={{ color: 'red' }}>{errUser.nickname}</p>}
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='mail'>Email</label>
                            <input type="email" placeholder='nuevo mail' className='form-control'
                                onChange={handleChange}
                                value={formUser.mail !== '' ? formUser.mail : infoUsuario.mail}
                                name='mail'>
                            </input>
                            {errUser.mail && <p style={{ color: 'red' }}>{errUser.mail}</p>}
                        </div>
                        <div className='d-grid mt-2'>
                            <button className='entrarButton btn btn-outline-secondary'>Guardar cambios</button>
                        </div>
                    </form>
                    <br></br>
                    <form onSubmit={handleSubmitFormPassword} style={estilo}>
                        <h4 className='text-center'>Editar Contraseña</h4>
                        <div className='mb-2'>
                            <label htmlFor='password'>Nueva contraseña</label>
                            <input type="password" placeholder='**********' className='form-control'
                                onChange={handleChange}
                                value={formPassword.password}
                                name='password'>
                            </input>
                            {errPassword.password && <p style={{ color: 'red' }}>{errPassword.password}</p>}
                        </div>
                        <div className='d-grid mt-2'>
                            <button className='entrarButton btn btn-outline-secondary'>Guardar cambios</button>
                        </div>
                    </form>
                    <br></br>
                    <form onSubmit={handleSubmitFormComensal} style={estilo}>
                        <h4 className='text-center'>Editar datos del comensal</h4>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>Nombre</label>
                            <input type="text" placeholder='Nuevo nombre' className='form-control'
                                onChange={handleChange}
                                value={formComensal.nombre !== '' ? formComensal.nombre : infoComensal.nombre}
                                name='nombre'>
                            </input>
                            {errComensal.nombre && <p style={{ color: 'red' }}>{errComensal.nombre}</p>}
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>Apellido</label>
                            <input type="text" placeholder='Nuevo apellido' className='form-control'
                                onChange={handleChange}
                                value={formComensal.apellido !== '' ? formComensal.apellido : infoComensal.apellido}
                                name='apellido'>
                            </input>
                            {errComensal.apellido && <p style={{ color: 'red' }}>{errComensal.apellido}</p>}
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