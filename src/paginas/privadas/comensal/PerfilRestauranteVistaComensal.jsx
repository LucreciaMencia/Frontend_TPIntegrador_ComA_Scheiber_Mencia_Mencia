import { BarraDeNavComensal } from '../../../navBar/Index'
import { useLoaderData } from 'react-router-dom';
import { FoodCard, InformacionRestaurante } from '../../../componentes/Index';

function PerfilRestauranteVistaComensal() {
    //asigno en datos el objeto que me devuelve useLoaderData()
    const datos = useLoaderData();

    //asigno en infoComensal el objeto comensal contenido en el objeto datos
    const infoComensal = datos.comensal;
    //asigno en infoComidas el objeto comidas contenido en el objeto datos
    const infoComidas = datos.comidas;
    //asigno en infoRestaurante el objeto restaurante contenido en el objeto datos
    const infoRestaurante = datos.restaurante;



    return (
        <>
            <nav>
                <BarraDeNavComensal //le paso al NavBar el dato nombre contenido en el objeto infoComensal
                    nombre_comensal={infoComensal.nombre_comensal}
                    apellido_comensal={infoComensal.apellido_comensal}
                />
            </nav>
            <br></br>

            <div className='container justify-content-center align-items-center vh-100 bg-white'>

                <InformacionRestaurante
                    ubicacion={infoRestaurante.ubicacion}
                    horario={infoRestaurante.horario}
                    contacto={infoRestaurante.contacto}
                    descripcion_restaurante={infoRestaurante.descripcion_resto}
                />
                <div className='rowComidas row'>
                    {
                        infoComidas.map(unaComida =>
                            <FoodCard
                                id={unaComida.id_comida}
                                id_restaurante={unaComida.id_usuario}
                                nombre={unaComida.nombre_comida}
                                descripcion={unaComida.descripcion_comida}
                                precio={unaComida.precio_comida}
                                puntaje={unaComida.promedio_estrellas}
                                puedePuntuar={false}
                                puedeBorrarValoracion={false}
                                puedeEditar={false}
                                linkRestaurante={false}
                                borrarComida={false}
                            />)
                    }
                </div>
            </div>
        </>
    )
}

export default PerfilRestauranteVistaComensal