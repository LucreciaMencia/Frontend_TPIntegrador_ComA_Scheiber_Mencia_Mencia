import { BarraDeNavRestaurante } from '../../../navBar/Index'
import { useLoaderData } from 'react-router-dom';


function EditarComida() {
    const estilo = {
        color: 'white'
    }

    //asigno en datos el objeto que me devuelve useLoaderData()
    const datos = useLoaderData();

    //asigno en infoComida el objeto comida contenido en el objeto datos
    const infoComida = datos.comida;

    //asigno en infoRestaurante el objeto restaurante contenido en el objeto datos
    const infoRestaurante = datos.restaurante;

    return (
        <>
            <nav>
                <BarraDeNavRestaurante
                    nombre_restaurante={infoRestaurante.nombre}
                />
            </nav>
            <br></br>
            <div className='login template d-flex justify-content-center align-items-center bg-white'>
                <div className='form_container p-5 rounded custom-bg'>
                    <form style={estilo}>
                        <h3 className='text-center'>Modifica tu comida</h3>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>{infoComida.nombre}</label>
                            <input type="text" placeholder='' className='form-control'></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='lname'>{infoComida.descripcion}</label>
                            <textarea type="text" placeholder='' className='form-control'></textarea>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>{infoComida.precio}</label>
                            <input type="text" placeholder='' className='form-control'></input>
                        </div>
                        <div className='d-grid mt-2'>
                            <button className='entrarButton btn btn-outline-secondary'>Modificar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditarComida