import { BarraDeNavRestaurante } from '../../../navBar/Index'
import { DragDropImageUploader } from '../../../componentes/Index'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom';


function CrearComida() {

    const estilo = {
        color: 'white'
    }

    //asigno en datos el objeto que me devuelve useLoaderData()
    const datos = useLoaderData();

    //asigno en infoRestaurante el objeto restaurante contenido en el objeto datos
    const infoRestaurante = datos.restaurante;

    
    const [image, setImage] = useState();

    function onImagenSeleccionada(imageAttributes) {
        setImage(imageAttributes)
    }

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
                            <label htmlFor='lname'>Agregado</label>
                            <input type="text" placeholder='' className='form-control'></input>
                        </div>
                        <div>
                            <DragDropImageUploader onImagenSeleccionada={onImagenSeleccionada} />
                        </div>
                        <div className='d-grid mt-2'>
                            <button className='entrarButton btn btn-outline-secondary'>Crear</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CrearComida