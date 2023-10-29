import { BarraDeNavRestaurante } from '../../../navBar/Index'
import { DragDropImageUploader } from '../../../componentes/Index'
import { useState, useCallback } from 'react'
import { useLoaderData } from 'react-router-dom';
import { crearComida } from '../../../api/comida'
import { toastExitoso, toastError } from '../../../utilerias/toast';
import { useNavigate } from 'react-router-dom';
import { crearImagen } from '../../../api/imagen'

function CrearComida() {

    const estilo = {
        color: 'white'
    }

    const navigate = useNavigate();

    //asigno en datos el objeto que me devuelve useLoaderData()
    const datos = useLoaderData();

    //asigno en infoRestaurante el objeto restaurante contenido en el objeto datos
    const infoRestaurante = datos.restaurante;


    const [image, setImage] = useState();

    function onImagenSeleccionada(file) {
        setImage(file)
    }

    const [formulario, setFormulario] = useState({
        nombre: '',
        descripcion: '',
        precio: ''
    })

    const handleSubmit = useCallback((event) => {
        event.preventDefault()

        crearComida(formulario)
            .then(response => response.json())
            .then(bodyDeRespuesta => { 
                // Si estamos aca, es porque salio bien la carga de la comida
                // Vamos a agarrar el ID de la comida recien  creada
                const id_comida = bodyDeRespuesta.id_comida;

                console.log('antes de cargar la img')

                // Con ese ID vamos a llamar a crearImagen, y devolvemos esa llamada
                return crearImagen(image, id_comida);
            })
            .then(resultadoCrearImagen => {
                // Si estamos aca es porque la carga de la imagen funcionó!
                // Entonces podemos mostrar el toast de que anduvo todo
                toastExitoso("Se ha cargado una nueva comida y su imagen")
                navigate('/perfilRestaurante')
            })
            .catch((error) => {
                console.log(error)
                // Si estamos aca es porque la carga de la comida salió mal, o
                // la carga de la imagen salió mal.
                toastError("Lo sentimos, hubo un error cargando los datos de la comida o su imagen :(")
            });

        // Aca van todas las dependecias de este useCallback, es decir: todas las variables que fueron
        // creadas fuera de su ambito (sus llaves)
    }, [formulario, navigate, image]); 



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
                <BarraDeNavRestaurante
                    nombre_restaurante={infoRestaurante.nombre_resto}
                />
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
                            <input type="text" placeholder='Solo ingresar números' className='form-control'
                                onChange={handleChange}
                                value={formulario.precio}
                                name='precio'>
                            </input>
                        </div>
                        {/* <div className='mb-2'>
                            <label htmlFor='lname'>Agregado</label>
                            <input type="text" placeholder='' className='form-control'></input>
                        </div> */}
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