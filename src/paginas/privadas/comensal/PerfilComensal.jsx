import { BarraDeNavComensal } from '../../../navBar/Index'
import { useLoaderData } from 'react-router-dom';
import { FoodCard } from '../../../componentes/Index';
import BorrarComensal from '../../../componentes/BorrarComensal';
import { obtenerId } from '../../../utilerias';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

function PerfilComensal() {
  //asigno en datos el objeto que me devuelve useLoaderData()
  const datos = useLoaderData();

  //asigno en infoComidas el objeto comidas contenido en el objeto datos
  const infoComidas = datos.comidas;
  //asigno en infoComensal el objeto comensal contenido en el objeto datos
  const infoComensal = datos.comensal;

  const token = sessionStorage.getItem('token')
  const datosToken = obtenerId(token);
  const id_usuario = datosToken.id_usuario;


  return (
    <>
      <nav>
        <BarraDeNavComensal //le paso al NavBar el dato nombre contenido en el objeto infoComensal
          nombre_comensal={infoComensal.nombre_comensal}
          apellido_comensal={infoComensal.apellido_comensal}
        />
      </nav>
      <br></br>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 600: 1, 1220: 2, 1840: 3 }}>
        <Masonry>
        {
            infoComidas.map(unaComida =>
              <FoodCard
                id={unaComida.id_comida}
                id_restaurante={unaComida.id_restaurante}
                nombre={unaComida.nombre_comida}
                descripcion={unaComida.descripcion_comida}
                restaurante={unaComida.nombre_resto}
                precio={unaComida.precio_comida}
                puntaje={unaComida.puntaje}
                valoracion={unaComida.id_valoracion}
                puedePuntuar={true}
                puedeBorrarValoracion={true}
                puedeEditar={false}
              />)
          }
        </Masonry>
      </ResponsiveMasonry>

      <BorrarComensal id_usuario={id_usuario}/>
    </>
  )
}

export default PerfilComensal