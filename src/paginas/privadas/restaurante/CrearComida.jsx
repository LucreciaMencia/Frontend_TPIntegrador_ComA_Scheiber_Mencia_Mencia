import { BarraDeNavRestaurante } from '../../../navBar/Index'

function CrearComida() {
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
                        <h3 className='text-center'>Agrega una nueva comida</h3>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>Nombre de comida</label>
                            <input type="text" placeholder='' className='form-control'></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='lname'>Descripción</label>
                            <textarea type="text" placeholder='' className='form-control'></textarea>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>Precio</label>
                            <input type="text" placeholder='' className='form-control'></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='lname'>Primer agregado</label>
                            <input type="text" placeholder='' className='form-control'></input>
                        </div>
                        <div className='d-grid mt-2'>
                            <button className='btn btn-outline-secondary'>Crear</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CrearComida