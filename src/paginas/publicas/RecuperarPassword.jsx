import {BarraDeNavInicio} from '../../navBar/Index'
import '../../estilos/Estilos.css'

export default function RecuperarPassword() {
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
                    <form style={estilo}>
                        <h3 className='text-center'>Recuperación de cuenta</h3>
                        <div className='mb-2'>
                            <label htmlFor='mail'>Email</label>
                            <input type="email" placeholder='usuario10@mail.com' className='form-control'></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='password'>Nueva contraseña</label>
                            <input type="password" placeholder='***********' className='form-control'></input>
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
