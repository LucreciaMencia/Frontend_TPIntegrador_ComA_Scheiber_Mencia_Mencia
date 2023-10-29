import { BarraDeNavComensal } from '../../../navBar/Index'
import { useLoaderData } from 'react-router-dom';
import { FoodCard } from '../../../componentes/Index';



function PerfilComensal() {
  //asigno en datos el objeto que me devuelve useLoaderData()
  const datos = useLoaderData();

  //asigno en infoComidas el objeto comidas contenido en el objeto datos
  const infoComidas = datos.comidas;
  //asigno en infoComensal el objeto comensal contenido en el objeto datos
  const infoComensal = datos.comensal;

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
        <div className='row'>
          {
            infoComidas.map(unaComida =>
              <FoodCard
                id={unaComida.id_comida}
                nombre={unaComida.nombre_comida}
                descripcion={unaComida.descripcion_comida}
                restaurante={unaComida.nombre_resto}
                precio={unaComida.precio_comida}
                puntaje={unaComida.promedio_estrellas}
                puedePuntuar={true}
              />)
          }
        </div>
      </div>
    </>
  )
}

export default PerfilComensal