import editarComida from '../../../api/comida/editarComida';
import { BarraDeNavRestaurante } from '../../../navBar/Index'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react'
import { toastExitoso, toastError } from '../../../utilerias/toast'
import { obtenerId } from '../../../utilerias/index';


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

    const navigate = useNavigate();

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

        const token = sessionStorage.getItem('token');
        const id_comida = obtenerId(token);

        editarComida(comida, id_comida)
            .then(result => { 
                toastExitoso(`La comida ${id_comida} ha sido modificada`)
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
                <BarraDeNavRestaurante
                    nombre_restaurante={infoRestaurante.nombre}
                />
            </nav>
            <br></br>
            <div className='login template d-flex justify-content-center align-items-center bg-white'>
                <div className='form_container p-5 rounded custom-bg'>
                    <form onSubmit={handleSubmit} style={estilo}>
                        <h3 className='text-center'>Modifica tu comida</h3>
                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>{infoComida.nombre}</label>
                            <input type="text" placeholder='' className='form-control'
                            onChange={handleChange}
                            value={formulario.nombre}
                            name='nombre'>
                            </input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='lname'>{infoComida.descripcion}</label>
                            <textarea type="text" placeholder='' className='form-control'
                            onChange={handleChange}
                            value={formulario.descripcion}
                            name='descripcion'>
                            </textarea>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor='fnameresto'>{infoComida.precio}</label>
                            <input type="text" placeholder='' className='form-control'
                            onChange={handleChange}
                            value={formulario.precio}
                            name='precio'>
                            </input>
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