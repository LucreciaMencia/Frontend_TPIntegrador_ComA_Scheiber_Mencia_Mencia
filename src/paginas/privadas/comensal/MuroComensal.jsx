import { BarraDeNavComensal } from '../../../navBar/Index'
import { FoodCard } from '../../../componentes/Index';
import { useLoaderData } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
// import { useCallback } from 'react';
// import crearValoracion from '../../../api/valoraciones/crearValoracion';

function MuroComensal() {
  //asigno en datos el objeto que me devuelve useLoaderData()
  const datos = useLoaderData();

  //asigno en infoComidas el objeto comidas contenido en el objeto datos
  const infoComidas = datos.comidas;
  //asigno en infoComensal el objeto comensal contenido en el objeto datos
  const infoComensal = datos.comensal;
  console.log(infoComensal)


  return (
    <>
      <nav>
        <BarraDeNavComensal
          nombre_comensal={infoComensal.nombre_comensal}
          apellido_comensal={infoComensal.apellido_comensal}
        />
      </nav>
      <br></br>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 600: 1, 1220: 2, 1840: 3 }}>
        <Masonry>
        {infoComidas.map
              (unaComida =>
                <FoodCard
                  id={unaComida.id_comida}
                  id_restaurante={unaComida.id_restaurante}
                  nombre={unaComida.nombre_comida}
                  descripcion={unaComida.descripcion_comida}
                  restaurante={unaComida.nombre_resto}
                  precio={unaComida.precio_comida}
                  puntaje={unaComida.promedio_estrellas}
                  puedePuntuar={true}
                  puedeBorrarValoracion={false}
                  puedeEditar={false}
                />
              )
            }
        </Masonry>
      </ResponsiveMasonry>
    </>
  )
}

export default MuroComensal