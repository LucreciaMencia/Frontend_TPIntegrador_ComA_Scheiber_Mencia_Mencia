import '../../estilos/Estilos.css'
import { BarraDeNavInicio } from '../../navBar/Index'
import { crearRestaurante } from '../../api/restaurante/index'
import { toastError, toastExitoso } from '../../utilerias/toast'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function RegistroRestaurante() {

    const estilo = {
        color: 'white'
    }

    const navigate = useNavigate();

    const [formulario, setFormulario] = useState({
        nickname: '',
        mail: '',
        password: '',
        nombre: '',
        ubicacion: '',
        contacto: '',
        horario: '',
        descripcion: ''
    })

    const [errores, setErrores] = useState({
        nickname: '',
        mail: '',
        password: '',
        nombre: '',
        ubicacion: '',
        contacto: '',
        horario: '',
        descripcion: ''
    })

    const handleSubmit = useCallback((event) => {
        event.preventDefault()

        if (validateForm()) {
            crearRestaurante(formulario)
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

        if (!formulario.ubicacion) {
            valid = false;
            errors.ubicacion = "Campo obligatorio";
        }

        if (!formulario.contacto) {
            valid = false;
            errors.contacto = "Campo obligatorio";
        }

        if (!formulario.horario) {
            valid = false;
            errors.horario = "Campo obligatorio";
        }

        if (!/^.{1,255}$/.test(formulario.descripcion)) {
            valid = false;
            errors.descripcion = "El campo no admite más de 255 caracteres";
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
                        <h3 className='text-center'>Registrarme como restaurante</h3>
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
                            <label htmlFor='fnameresto'>Nombre del restaurante</label>
                            <input type="text" placeholder='Mi restaurante' className='form-control'
                                onChange={handleChange}
                                value={formulario.nombre}
                                name='nombre'>
                            </input>
                            {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='lname'>Ubicación</label>
                            <input type="text" placeholder='Calle 53 N 1234' className='form-control'
                                onChange={handleChange}
                                value={formulario.ubicacion}
                                name='ubicacion'>
                            </input>
                            {errores.ubicacion && <p style={{ color: 'red' }}>{errores.ubicacion}</p>}
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='lname'>Contacto</label>
                            <input type="text" placeholder='3765829882' className='form-control'
                                onChange={handleChange}
                                value={formulario.contacto}
                                name='contacto'>
                            </input>
                            {errores.contacto && <p style={{ color: 'red' }}>{errores.contacto}</p>}
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='lname'>Horario</label>
                            <input type="text" placeholder='Todos los días de 16hs a 00hs' className='form-control'
                                onChange={handleChange}
                                value={formulario.horario}
                                name='horario'>
                            </input>
                            {errores.horario && <p style={{ color: 'red' }}>{errores.horario}</p>}
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='lname'>Descripción</label>
                            <textarea type="text" placeholder='Tenemos lo que estás buscando.' className='form-control'
                                onChange={handleChange}
                                value={formulario.descripcion}
                                name='descripcion'>
                            </textarea>
                            {errores.descripcion && <p style={{ color: 'red' }}>{errores.descripcion}</p>}
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

export default RegistroRestaurante

/*
export class InternalRegistroRestaurante extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nickname: '',
            mail: '',
            password: '',
            nombre: '',
            ubicacion: '',
            contacto: '',
            horario: '',
            descripcion: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const usuario = {
            nickname: this.state.nickname,
            mail: this.state.mail,
            password: this.state.password,
            nombre: this.state.nombre,
            ubicacion: this.state.ubicacion,
            contacto: this.state.contacto,
            horario: this.state.horario,
            descripcion: this.state.descripcion
        }


        crearRestaurante(usuario)
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

                        toastExitoso("El usuario se ha registrado correctamente")

                        this.props.navigate("/crearComida")

                    } else {
                        toastError(result.body.message)
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
                            <h3 className='text-center'>Registrarme como restaurante</h3>
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
                                <label htmlFor='fnameresto'>Nombre del restaurante</label>
                                <input type="text" placeholder='Mi restaurante' className='form-control'
                                    onChange={this.handleChange}
                                    value={this.state.nombre}
                                    name='nombre'
                                ></input>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='lname'>Ubicación</label>
                                <input type="text" placeholder='Calle 53 N 1234' className='form-control'
                                    onChange={this.handleChange}
                                    value={this.state.ubicacion}
                                    name='ubicacion'
                                ></input>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='lname'>Contacto</label>
                                <input type="text" placeholder='3765829882' className='form-control'
                                    onChange={this.handleChange}
                                    value={this.state.contacto}
                                    name='contacto'
                                ></input>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='lname'>Horario</label>
                                <input type="text" placeholder='Todos los días de 16hs a 00hs' className='form-control'
                                    onChange={this.handleChange}
                                    value={this.state.horario}
                                    name='horario'
                                ></input>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='lname'>Descripción</label>
                                <textarea type="text" placeholder='Tenemos lo que estás buscando.' className='form-control'
                                    onChange={this.handleChange}
                                    value={this.state.descripcion}
                                    name='descripcion'
                                ></textarea>
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


export default function RegistroRestaurante() {
    const p = useParams();

    const navigate = useNavigate();

    return <InternalRegistroRestaurante navigate={navigate} params={p} />

}
*/