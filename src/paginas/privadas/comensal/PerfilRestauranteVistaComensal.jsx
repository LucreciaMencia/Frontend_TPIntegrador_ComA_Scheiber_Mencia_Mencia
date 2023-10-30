import { BarraDeNavComensal } from '../../../navBar/Index'
import { useLoaderData } from 'react-router-dom';
import { FoodCard, InformacionRestaurante } from '../../../componentes/Index';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

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

            <InformacionRestaurante
                ubicacion={infoRestaurante.ubicacion}
                horario={infoRestaurante.horario}
                contacto={infoRestaurante.contacto}
                descripcion_restaurante={infoRestaurante.descripcion_resto}
            />

            <ResponsiveMasonry
                columnsCountBreakPoints={{ 600: 1, 1220: 2, 1840: 3 }}>
                <Masonry>
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
                </Masonry>
            </ResponsiveMasonry>
        </>
    )
}

export default PerfilRestauranteVistaComensal