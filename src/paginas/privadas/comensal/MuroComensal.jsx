import { BarraDeNavComensal } from '../../../navBar/Index'
import { FoodCard } from '../../../componentes/Index';
import { useLoaderData } from 'react-router-dom';

function MuroComensal() {
  //asigno en datos el objeto que me devuelve useLoaderData()
  const datos = useLoaderData();

  //asigno en infoComidas el objeto comidas contenido en el objeto datos
  const infoComidas = datos.comidas;
  //asigno en infoComensal el objeto comensal contenido en el objeto datos
  const infoComensal = datos.comensal;

  return (
    <>
      <nav>
        <BarraDeNavComensal
          nombre_comensal={infoComensal.nombre}
          apellido_comensal={infoComensal.apellido}
        />
      </nav>
      <br></br>
      <div className='container justify-content-center align-items-center vh-100 bg-white'>
        <div className='row'>
          {infoComidas.map
            (unaComida =>
              <FoodCard
                id={unaComida.id_comida}
                nombre={unaComida.nombre}
                descripcion={unaComida.descripcion}
                restaurante={unaComida.nombre_restaurante}
                precio={unaComida.precio}
                puntaje={unaComida.promedio_estrella}
                puedePuntuar={true}
              />
            )
          }
        </div>
      </div>
    </>
  )
}

export default MuroComensal