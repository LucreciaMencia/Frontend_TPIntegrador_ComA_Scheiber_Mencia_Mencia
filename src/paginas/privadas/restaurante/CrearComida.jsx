import { BarraDeNavRestaurante } from '../../../navBar/Index'
import { DragDropImageUploader } from '../../../componentes/Index'
import { useCallback, useState } from 'react'
import { toastExitoso, toastError } from '../../../utilerias/toast'
import { useNavigate } from 'react-router-dom';
import crearComida from '../../../api/comida/crearComida';

function CrearComida() {

    const navigate = useNavigate();

    console.log("crear comida")
    
    const [image, setImage] = useState();
    console.log(image);

    const estilo = {
        color: 'white'
    }

    function onImagenSeleccionada(imageAttributes) {
        setImage(imageAttributes)
        console.log("imagen seteada")
    }

    const [formulario, setFormulario] = useState({
        nombre: '',
        descripcion: '',
        precio: ''
    })

    const handleSubmit = useCallback((event) => {
        event.preventDefault()

        const comida = {
            nombre: formulario.nombre,
            descripcion: formulario.descripcion,
            precio: formulario.precio
        }

        crearComida(comida)
            .then(result => { 
                toastExitoso("Se ha cargado una nueva comida")
                navigate('/perfilRestaurante')
            })
            .catch((error) => {
                toastError(error.message)
            });
    }, [formulario, navigate]);

    function handleChange(event) {
        setFormulario((valorActualDeFormulario) => {
            return {
                ...valorActualDeFormulario,
                [event.target.name]: event.target.value
            }
        });
    }

    return (
        <>
            <nav>
                <BarraDeNavRestaurante />
            </nav>
            <br></br>
            <div className='login template d-flex justify-content-center align-items-center bg-white'>
                <div className='form_container p-5 rounded custom-bg'>
                    <form onSubmit={handleSubmit} style={estilo}>
                        <h3 className='text-center'>Agrega una nueva comida</h3>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>Nombre de comida</label>
                            <input type="text" placeholder='' className='form-control'
                             onChange={handleChange}
                             value={formulario.nombre}
                             name='nombre'>
                             </input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='lname'>Descripción</label>
                            <textarea type="text" placeholder='' className='form-control'
                             onChange={handleChange}
                             value={formulario.descripcion}
                             name='descripcion'>
                            </textarea>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>Precio</label>
                            <input type="text" placeholder='' className='form-control'
                             onChange={handleChange}
                             value={formulario.precio}
                             name='precio'>
                             </input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='lname'>Agregado</label>
                            <input type="text" placeholder='' className='form-control'></input>
                        </div>
                        <div>
                            <DragDropImageUploader onImagenSeleccionada={onImagenSeleccionada} />
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