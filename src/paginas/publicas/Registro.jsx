import { Component } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../../estilos/Estilos.css'
import {BarraDeNavInicio} from '../../navBar/Index'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Form from 'react-bootstrap/Form';


export class InternalSingupUsuario extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nickname: '',
            mail: '',
            password: '',
            rol: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const usuario = {
            nickname: this.state.nickname,
            mail: this.state.mail,
            password: this.state.password,
            rol: this.state.rol
        }

        const parametros = {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        fetch("http://localhost:8080/usuario", parametros)
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
                        this.props.navigate('/iniciar-sesion')
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
                            <h3 className='text-center'>Registratrate en Mi Menú</h3>
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
                            <label htmlFor='rol'>Selecciones su rol como usuario</label>
                                <Form.Select type='rol'
                                    onChange={this.handleChange}
                                    value={this.state.rol}
                                    name='rol'>
                                    <option>Seleccionar</option>
                                    <option value="1">Comensal</option>
                                    <option value="2">Restaurante</option>
                                </Form.Select>
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

}

export default InternalSingupUsuario

export function Registro() {
    const p = useParams();

    const navigate = useNavigate();
    return (
        <>
            <InternalSingupUsuario navigate={navigate} params={p} />
        </>
    );
}