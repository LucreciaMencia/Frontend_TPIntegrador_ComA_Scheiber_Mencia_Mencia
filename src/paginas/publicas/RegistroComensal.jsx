import '../../estilos/Estilos.css'
import { BarraDeNavInicio } from '../../navBar/Index'
import { toastExitoso, toastError } from '../../utilerias/toast'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { crearComensal } from '../../api/comensal/index'

function RegistroComensal() {

    const estilo = {
        color: 'white'
    }

    const navigate = useNavigate();

    const [formulario, setFormulario] = useState({
        nickname: '',
        mail: '',
        password: '',
        nombre: '',
        apellido: ''
    })

    const [errores, setErrores] = useState({
        nickname: '',
        mail: '',
        password: '',
        nombre: '',
        apellido: ''
    })

    const handleSubmit = useCallback((event) => {
        event.preventDefault()

        if (validateForm()) {
            crearComensal(formulario)
                .then(result => {
                    toastExitoso("El usuario se ha registrado con éxito")
                    navigate('/iniciarSesion')
                })
                .catch((error) => {
                    toastError(error.message)
                });
        }

    }, [formulario, navigate]);

    const validateForm = () => {
        let valid = true;
        const errors = {};

        if (!formulario.nickname) {
            valid = false;
            errors.nickname = "Campo obligatorio";
        }

        if (!formulario.mail) {
            valid = false;
            errors.mail = "Campo obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(formulario.mail)) {
            valid = false;
            errors.mail = "El email es inválido"
        }

        if (!formulario.password) {
            valid = false;
            errors.password = "Campo obligatorio";
        } else if (formulario.password.length < 6) {
            valid = false;
            errors.password = "La contraseña debe tener al menos 6 dígitos"
        }

        if (!formulario.nombre) {
            valid = false;
            errors.nombre = "Campo obligatorio";
        }

        if (!formulario.apellido) {
            valid = false;
            errors.apellido = "Campo obligatorio";
        }

        setErrores(errors);
        return valid;
    };

    const handleChange = (event) => {
        setFormulario((formularioActual) => {
            return {
                ...formularioActual,
                [event.target.name]: event.target.value
            }
        });
    };

    return (
        <>
            <nav>
                <BarraDeNavInicio />
            </nav>
            <br></br>
            <div className='login template d-flex justify-content-center align-items-center bg-white'>
                <div className='form_container p-5 rounded custom-bg'>
                    <form onSubmit={handleSubmit} style={estilo}>
                        <h3 className='text-center'>Registrarme como comensal</h3>
                        <br></br>

                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>Nombre de usuario</label>
                            <input type="text" placeholder='Resto10' className='form-control'
                                onChange={handleChange}
                                value={formulario.nickname}
                                name='nickname'>
                            </input>
                            {errores.nickname && <p style={{ color: 'red' }}>{errores.nickname}</p>}
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='mail'>Email</label>
                            <input type="email" placeholder='restaurante@mail.com' className='form-control'
                                onChange={handleChange}
                                value={formulario.mail}
                                name='mail'>
                            </input>
                            {errores.mail && <p style={{ color: 'red' }}>{errores.mail}</p>}
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='password'>Contraseña</label>
                            <input type="password" placeholder='**********' className='form-control'
                                onChange={handleChange}
                                value={formulario.password}
                                name='password'>
                            </input>
                            {errores.password && <p style={{ color: 'red' }}>{errores.password}</p>}
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>Nombre </label>
                            <input type="text" placeholder='Juan Luis' className='form-control'
                                onChange={handleChange}
                                value={formulario.nombre}
                                name='nombre'>
                            </input>
                            {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>Apellido </label>
                            <input type="text" placeholder='Guerra' className='form-control'
                                onChange={handleChange}
                                value={formulario.apellido}
                                name='apellido'>
                            </input>
                            {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
                        </div>
                        <div className='d-grid mt-2'>
                            <button className='btn btn-outline-secondary'>Registrarme</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )

}

export default RegistroComensal




/*
export class InternalRegistroComensal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nickname: '',
            mail: '',
            password: '',
            nombre: '',
            apellido: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const usuario = {
            nickname: this.state.nickname,
            mail: this.state.mail,
            password: this.state.password,
            nombre: this.state.nombre,
            apellido: this.state.apellido
        }

        const parametros = {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        fetch("http://localhost:8080/usuario/comensal", parametros)
            .then(res => {
                return res.json()
                    .then(body => {
                        return {
                            status: res.status,
                            ok: res.ok,
                            headers: res.headers,
                            body: body
                        };
                    })
            }).then(
                result => {
                    if (result.ok) {
                        sessionStorage.setItem('token', result.body.token)

                        toast.success("El usuario se ha registrado correctamente", {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        this.props.navigate('/muroComensal')
                    } else {
                        toast.error(result.body.message, {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                }
            ).catch(
                (error) => {
                    toast.error(error.message, {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            );
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {

        const estilo = {
            color: 'white'
        }

        return (
            <>
                <nav>
                    <BarraDeNavInicio />
                </nav>
                <br></br>
                <div className='login template d-flex justify-content-center align-items-center bg-white'>
                    <div className='form_container p-5 rounded custom-bg'>
                        <form onSubmit={this.handleSubmit} style={estilo}>
                            <h3 className='text-center'>Registrarme como comensal</h3>
                            <br></br>

                            <div className='mb-2'>
                                <label htmlFor='fnameresto'>Nombre de usuario</label>
                                <input type="text" placeholder='Resto10' className='form-control'
                                    onChange={this.handleChange}
                                    value={this.state.nickname}
                                    name='nickname'>
                                </input>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='mail'>Email</label>
                                <input type="email" placeholder='restaurante@mail.com' className='form-control'
                                    onChange={this.handleChange}
                                    value={this.state.mail}
                                    name='mail'>
                                </input>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='password'>Contraseña</label>
                                <input type="password" placeholder='**********' className='form-control'
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                    name='password'>
                                </input>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='fnameresto'>Nombre </label>
                                <input type="text" placeholder='Juan Luis' className='form-control'
                                    onChange={this.handleChange}
                                    value={this.state.nombre}
                                    name='nombre'
                                ></input>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='fnameresto'>Apellido </label>
                                <input type="text" placeholder='Guerra' className='form-control'
                                    onChange={this.handleChange}
                                    value={this.state.apellido}
                                    name='apellido'
                                ></input>
                            </div>
                            <div className='d-grid mt-2'>
                                <button className='entrarButton btn btn-outline-secondary'>Registrarme</button>
                            </div>

                        </form>
                    </div>
                </div>
            </>
        )
    }

}


export default function RegistroComensal() {
    const p = useParams();

    const navigate = useNavigate();

    return <InternalRegistroComensal navigate={navigate} params={p} />
}

*/
