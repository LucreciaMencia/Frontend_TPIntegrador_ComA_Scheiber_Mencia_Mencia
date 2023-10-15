import {BarraDeNavRestaurante} from '../../../navBar/Index'
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

export default EditarRestaurante