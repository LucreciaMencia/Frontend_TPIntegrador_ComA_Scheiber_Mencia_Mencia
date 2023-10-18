import {BarraDeNavRestaurante} from '../../../navBar/Index'
import '../../../estilos/Estilos.css'
import {Component} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export class InternalEditarRestaurante extends Component {

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

    componentDidMount() {
        
        if (this.props.params.id_usuario) {
           
            let parametros = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'authorization': sessionStorage.getItem('token')
                }
            }
      
            fetch(`http://localhost:8080/usuario/restaurante/${this.props.params.id_usuario}`, parametros)
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
                            this.setState({
                                nickname: result.body.detail.nickname,
                                mail: result.body.detail.mail,
                                password: result.body.detail.password,
                                nombre: result.body.detail.nombre,
                                ubicacion: result.body.detail.ubicacion,
                                contacto: result.body.detail.contacto,
                                horario: result.body.detail.horario,
                                descripcion: result.body.detail.descripcion
                            });
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
                    (error) => { console.log(error) }
                );
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let usuario = {
            nickname: this.state.nickname,
            mail: this.state.mail,
            password: this.state.password,
            nombre: this.state.nombre,
            ubicacion: this.state.ubicacion,
            contacto: this.state.contacto,
            horario: this.state.horario,
            descripcion: this.state.descripcion
        }

        let parametros = {
            method: this.props.params.id_usuario ? 'PUT' : 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const url = this.props.params.id_usuario ? `http://localhost:8080/usuario/restaurante/${this.props.params.id_usuario}` : "http://localhost:8080/usuario"
        fetch(url, parametros)
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

                        toast.success("Su perfil ha sido modificado", {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        this.props.navigate('/perfilRestaurante')
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

    render () {

        const estilo = {
            color: 'white'
        }
        return (
            <>
                <nav>
                    <BarraDeNavRestaurante />
                </nav>
                <br></br>
                <div className='login template d-flex justify-content-center align-items-center bg-white'>
                    <div className='form_container p-5 rounded custom-bg'>
                        <form onSubmit={this.handleSubmit} style={estilo}>
                            <h3 className='text-center'>Editar Perfil</h3>
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
                            <br></br>
                            <h4 className='text-center'>Información del restaurante</h4>
                            <div className='mb-2'>
                                <label htmlFor='fnameresto'>Nombre del restaurante</label>
                                <input type="text" placeholder='Mi restaurante' className='form-control'
                                onChange={this.handleChange}
                                value={this.state.nombre}
                                name='nombre'>
                                </input>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='lname'>Ubicación</label>
                                <input type="text" placeholder='Calle 53 N 1234' className='form-control'
                                onChange={this.handleChange}
                                value={this.state.ubicacion}
                                name='ubicacion'>
                                </input>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='lname'>Contacto</label>
                                <input type="text" placeholder='3765829882' className='form-control'
                                onChange={this.handleChange}
                                value={this.state.contacto}
                                name='contacto'>
                                </input>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='lname'>Horario</label>
                                <input type="text" placeholder='Todos los días de 16hs a 00hs' className='form-control'
                                onChange={this.handleChange}
                                value={this.state.horario}
                                name='horario'>
                                </input>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='lname'>Descripción</label>
                                <textarea type="text" placeholder='Tenemos lo que estás buscando.' className='form-control'
                                onChange={this.handleChange}
                                value={this.state.descripcion}
                                name='descripcion'>
                                </textarea>
                            </div>
                            <div className='d-grid mt-2'>
                                <button className='btn btn-outline-secondary'>Guardar Cambios</button>
                            </div>
    
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default function EditarRestaurante() {
    const p = useParams();

    const navigate = useNavigate();

    return <InternalEditarRestaurante navigate={navigate} params={p} />
}








/*import {BarraDeNavRestaurante} from '../../../navBar/Index'
import '../../../estilos/Estilos.css'

function EditarRestaurante() {
    const estilo = {
        color: 'white'
    }
    return (
        <>
            <nav>
                <BarraDeNavRestaurante />
            </nav>
            <br></br>
            <div className='login template d-flex justify-content-center align-items-center bg-white'>
                <div className='form_container p-5 rounded custom-bg'>
                    <form style={estilo}>
                        <h3 className='text-center'>Editar Perfil</h3>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>Nombre de usuario</label>
                            <input type="text" placeholder='Resto10' className='form-control'></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='mail'>Email</label>
                            <input type="email" placeholder='restaurante@mail.com' className='form-control'></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='password'>Contraseña</label>
                            <input type="password" placeholder='**********' className='form-control'></input>
                        </div>
                        <br></br>
                        <h4 className='text-center'>Información del restaurante</h4>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>Nombre del restaurante</label>
                            <input type="text" placeholder='Mi restaurante' className='form-control'></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='lname'>Ubicación</label>
                            <input type="text" placeholder='Calle 53 N 1234' className='form-control'></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='lname'>Contacto</label>
                            <input type="text" placeholder='3765829882' className='form-control'></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='lname'>Horario</label>
                            <input type="text" placeholder='Todos los días de 16hs a 00hs' className='form-control'></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='lname'>Descripción</label>
                            <textarea type="text" placeholder='Tenemos lo que estás buscando.' className='form-control'></textarea>
                        </div>
                        <div className='d-grid mt-2'>
                            <button className='btn btn-outline-secondary'>Guardar Cambios</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default EditarRestaurante*/