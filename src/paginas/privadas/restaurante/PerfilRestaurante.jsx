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

      <div className='container justify-content-center align-items-center vh-100 bg-white'>
        
      <InformacionRestaurante
        ubicacion={infoRestaurante.ubicacion}
        horario={infoRestaurante.horario}
        contacto={infoRestaurante.contacto}
        descripcion_restaurante={infoRestaurante.descripcion}
      />
        <div className='rowComidas row'>
          {
            infoComidas.map(unaComida =>
              <FoodCard
                id={unaComida.id_comida}
                nombre={unaComida.nombre}
                descripcion={unaComida.descripcion}
                restaurante={unaComida.nombre_restaurante}
                precio={unaComida.precio}
                puntaje={unaComida.promedio_estrella}
                puedePuntuar={false}
              />)
          }
        </div>
      </div>

    </>
  )
}

export default PerfilRestaurante
