import '../../estilos/Estilos.css'
import { BarraDeNavInicio } from '../../navBar/Index'
import { toastExitoso, toastError } from '../../utilerias/toast'
import { useCallback, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import iniciarSesion from '../../api/iniciarSesion/iniciarSesion'

function IniciarSesion() {

    const estilo = {
        color: 'white'
    }

    const navigate = useNavigate();

    const [formulario, setFormulario] = useState({
        nickname: '',
        password: '',
    })

    const handleSubmit = useCallback((event) => {
        event.preventDefault()

        const usuario = {
            nickname: formulario.nickname,
            password: formulario.password
        }

        iniciarSesion(usuario)
            .then(response => response.json()) //decodifica el body del response
            .then(body => {
                sessionStorage.setItem('token', body.token)
                if (body.rol === "restaurante") {  //para este caso es mejor usar un switch
                    toastExitoso("Bienvenido")
                    navigate("/crearComida")
                } else if (body.rol === "comensal") {
                    toastExitoso("Bienvenido")
                    navigate("/muroComensal")
                } else {
                    toastError("Usuario o contraseña incorrectos")
                    navigate( "/iniciarSesion")
                }
            })
            .catch((error) => {
                toastError(error.message)
            });
    }, [formulario, navigate]);

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
                        <h3 className='text-center'>Iniciar Sesión</h3>
                        <div className='mb-2'>
                            <label htmlFor='nickname'>Nickname</label>
                            <input
                                type="text"
                                placeholder='Ingrese su nickname'
                                className='form-control'
                                onChange={handleChange}
                                value={formulario.nickname}
                                name='nickname'>
                            </input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='password'>Contraseña</label>
                            <input
                                type="password"
                                placeholder='Ingrese su contraseña'
                                className='form-control'
                                onChange={handleChange}
                                value={formulario.password}
                                name='password'>
                            </input>
                        </div>

                        {/* <div className='mb-2'>
                            <input type="checkbox" className='custom-control custom-checkbox' id="check" />
                            <label htmlFor='check' className='custom-input-label ms-2'>
                                Recuérdame
                            </label>
                         </div> */}

                        <div className='d-grid'>
                            <button className='btn btn-outline-secondary'>Iniciar Sesión</button>
                        </div>
                        <div className='d-grid'>
                            <Link to="/recuperarPassword">
                                <button
                                    className='btn btn-outline-secondary'>
                                    Recuperar contraseña
                                </button>
                            </Link>
                        </div>
                        <br></br>


                        <Link to="/registroRestaurante" className='me-2'>
                            <button
                                className='btn btn-outline-secondary'>
                                Registrarme como restaurante
                            </button>
                        </Link>
                        <Link to="/registroComensal">
                            <button
                                className='btn btn-outline-secondary'>
                                Registrarme como comensal
                            </button>
                        </Link>
                        <br></br>
                    </form>
                </div>
            </div>
        </>
    )

}

export default IniciarSesion


/*
export class InternalLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nickname: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const usuario = {
            nickname: this.state.nickname,
            password: this.state.password
        }

        const parametros = {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        fetch("http://localhost:8080/sesion", parametros)
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

                        toast.success("bienvenido", {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });

                        if (result.body.rol === "restaurante") {
                            this.props.navigate("/perfilRestaurante")
                        } else {
                            this.props.navigate("/muroComensal")
                        }

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
                            <h3 className='text-center'>Iniciar Sesión</h3>
                            <div className='mb-2'>
                                <label htmlFor='nickname'>Nickname</label>
                                <input
                                    type="text"
                                    placeholder='Ingrese su nickname'
                                    className='form-control'
                                    onChange={this.handleChange}
                                    value={this.state.nickname}
                                    name='nickname'>
                                </input>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='password'>Contraseña</label>
                                <input
                                    type="password"
                                    placeholder='Ingrese su contraseña'
                                    className='form-control'
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                    name='password'>
                                </input>
                            </div>

                            {/* <div className='mb-2'>
                                <input type="checkbox" className='custom-control custom-checkbox' id="check" />
                                <label htmlFor='check' className='custom-input-label ms-2'>
                                    Recuérdame
                                </label>
                            </div> }

                            <div className='d-grid'>
                                <input
                                    className='entrarButton btn btn-outline-secondary'
                                    type="submit"
                                    value="Entrar">
                                </input>
                            </div>
                            <div className='d-grid'>
                                <Link to="/recuperarPassword">
                                    <button
                                        className='btn btn-outline-secondary'>
                                        Recuperar contraseña
                                    </button>
                                </Link>
                            </div>
                            <br></br>
                            <Link to="/registroRestaurante" className='me-2'>
                                <button
                                    className='btn btn-outline-secondary'>
                                    Registrarme como restaurante
                                </button>
                            </Link>
                            <Link to="/registroComensal">
                                <button
                                    className='btn btn-outline-secondary'>
                                    Registrarme como comensal
                                </button>
                            </Link>
                            <br></br>
                        </form>

                    </div>
                    <div>

                    </div>
                </div>
            </>
        )
    }
}


export default function IniciarSesion() {

    console.log("Soy el componente Iniciar sesion")
    const data = useLoaderData();
    console.log("Recibi esto: ", data)

    const p = useParams();

    const navigate = useNavigate();

    return <InternalLogin navigate={navigate} params={p} />
}
*/












// function Login() {
//     const estilo = {
//         color: 'white'
//     }
//     return (
//         <>
//             <nav>
//                 <BarraDeNavInicio />
//             </nav>
//             <br></br>
//             <div className='login template d-flex justify-content-center align-items-center vh-100 bg-white'>
//                 <div className='form_container p-5 rounded custom-bg'>
//                     <form style={estilo}>
//                         <h3 className='text-center'>Iniciar Sesión</h3>
//                         <div className='mb-2'>
//                             <label htmlFor='mail'>Email</label>
//                             <input type="email" placeholder='usuario10@mail.com' className='form-control'></input>
//                         </div>
//                         <div className='mb-2'>
//                             <label htmlFor='password'>Contraseña</label>
//                             <input type="password" placeholder='***********' className='form-control'></input>
//                         </div>
//                         {/* <div className='mb-2'>
//                 <input type="checkbox" className='custom-control custom-checkbox' id="check" />
//                 <label htmlFor='check' className='custom-input-label ms-2'>
//                     Recuérdame
//                 </label>
//             </div> */}
//                         <div className='d-grid'>
//                             <button className='btn btn-outline-secondary'>Iniciar Sesión</button>
//                         </div>
//                         <p className='text-end mt-2'>
//                             <Link to="/signupRestaurante" className='ms-2'>Registrarme como restaurante</Link>
//                         </p>
//                         <p className='text-end mt-2'>
//                             {/* Olvidaste tu <a href=''>Contraseña?</a> */}
//                             <Link to="/signupComensal" className='ms-2'>Registrarme como comensal</Link>
//                         </p>

//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Login




