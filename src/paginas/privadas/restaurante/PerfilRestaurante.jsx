import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import BorrarRestaurante from '../../../componentes/BorrarRestaurante';
import { InformacionRestaurante, FoodCard } from '../../../componentes/Index';
import { BarraDeNavRestaurante } from '../../../navBar/Index';
import { useLoaderData } from 'react-router-dom';


function PerfilRestaurante() {
  //asigno en datos el objeto que me devuelve useLoaderData()
  const datos = useLoaderData();

  //asigno en infoComidas el objeto comidas contenido en el objeto datos
  const infoComidas = datos.comidas;
  //asigno en infoRestaurante el objeto restaurante contenido en el objeto datos
  const infoRestaurante = datos.restaurante;

  return (
    <>
      <nav>
        <BarraDeNavRestaurante //le paso al NavBar el dato nombre contenido en el objeto infoRestaurante
          nombre_restaurante={infoRestaurante.nombre_resto}
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
                  nombre={unaComida.nombre_comida}
                  descripcion={unaComida.descripcion_comida}
                  precio={unaComida.precio_comida}
                  puntaje={unaComida.promedio_estrellas}
                  puedePuntuar={false}
                  puedeBorrarValoracion={false}
                  puedeEditar={true}
                  linkRestaurante={false}
                  borrarComida={true}
                />)
            }
          </Masonry>
        </ResponsiveMasonry>


          <BorrarRestaurante
            id_usuario={infoRestaurante.id_usuario}
          />
    </>
  )
}

export default PerfilRestaurante
