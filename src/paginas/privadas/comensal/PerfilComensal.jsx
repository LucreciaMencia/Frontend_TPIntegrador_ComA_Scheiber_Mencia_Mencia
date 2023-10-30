import { BarraDeNavComensal } from '../../../navBar/Index'
import { useLoaderData } from 'react-router-dom';
import { FoodCard } from '../../../componentes/Index';
import BorrarComensal from '../../../componentes/BorrarComensal';
import { obtenerId } from '../../../utilerias';

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
                puntaje={unaComida.puntaje}
                valoracion={unaComida.id_valoracion}
                puedePuntuar={true}
                puedeBorrarValoracion={true}
                puedeEditar={false}
              />)
          }
        </div>
        <div>
          <BorrarComensal
            id_usuario={id_usuario}
          />
        </div>
      </div>
    </>
  )
}

export default PerfilComensal