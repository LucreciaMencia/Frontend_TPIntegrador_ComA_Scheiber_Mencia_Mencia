import { BarraDeNavInicio } from '../../navBar/Index'
import '../../estilos/Estilos.css'
import { editarUsuario } from '../../api/usuario/index'
import { useNavigate } from 'react-router-dom'
import { useCallback, useState } from 'react'
import { toastExitoso, toastError } from '../../utilerias/toast'

export default function RecuperarPassword() {
    const estilo = {
        color: 'white'
    }

    const navigate = useNavigate();

    const [formulario, setFormulario] = useState({
        mail: '',
        password: ''
    })

    const handleSubmit = useCallback((event) => {
        event.preventDefault()

        let usuario = {
            mail: formulario.mail,
            password: formulario.password
        }

        editarUsuario(usuario)
            .then(result => {
                toastExitoso("Su contraseña ha sido modificada")
                navigate('/iniciarSesion')
            })
            .catch((error) => {
                toastError(error.message)
            });
    }, [formulario]);

    function handleChange(event) {
        setFormulario({[event.target.name]: event.target.value});
    }

    return (

        <>
            <nav>
                <BarraDeNavInicio />
            </nav>
            <br></br>
            <div className='login template d-flex justify-content-center align-items-center bg-white'>
                <div className='form_container p-5 rounded custom-bg'>
                    <form onSubmit={handleSubmit} style={estilo}>
                        <h3 className='text-center'>Recuperación de cuenta</h3>
                        <div className='mb-2'>
                            <label htmlFor='mail'>Email</label>
                            <input type="email" placeholder='usuario10@mail.com' className='form-control'
                                onChange={handleChange}
                                value={formulario.mail}
                                name='mail'>
                            </input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='password'>Nueva contraseña</label>
                            <input type="password" placeholder='***********' className='form-control'
                                onChange={handleChange}
                                value={formulario.password}
                                name='password'>
                            </input>
                        </div>
                        <div className='d-grid'>
                            <button className='btn btn-outline-secondary'>Cambiar contraseña</button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}
