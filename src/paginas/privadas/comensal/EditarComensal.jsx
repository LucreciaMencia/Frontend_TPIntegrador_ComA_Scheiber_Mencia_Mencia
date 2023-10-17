import { BarraDeNavComensal } from '../../../navBar/Index'
import '../../../estilos/Estilos.css'


function EditarComensal() {
    const estilo = {
        color: 'white'
    }
    return (
        <>
            <nav>
                <BarraDeNavComensal />
            </nav>
            <br></br>
            <div className='login template d-flex justify-content-center align-items-center vh-100 bg-white'>
                <div className='form_container p-5 rounded custom-bg'>
                    <form style={estilo}>

                        <h3 className='text-center'>Editar Perfil</h3>
                        <br></br>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>Nombre de usuario</label>
                            <input type="text" placeholder='Juan10' className='form-control'></input>
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
                        <h4 className='text-center'>Información personal</h4>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>Nombre </label>
                            <input type="text" placeholder='Juan Luis' className='form-control'></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>Apellido </label>
                            <input type="text" placeholder='Guerra' className='form-control'></input>
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