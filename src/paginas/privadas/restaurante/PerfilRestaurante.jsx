import { InformacionRestaurante, FoodCard } from '../../../componentes/Index';
import { BarraDeNavRestaurante } from '../../../navBar/Index';
import { useLoaderData } from 'react-router-dom';




function PerfilRestaurante() {

  const datos = useLoaderData();

  const comidas = datos.comidas;
  const infoRestaurante = datos.restaurante;

  return (
    <>
      <nav>
        <BarraDeNavRestaurante
          nombre_restaurante={infoRestaurante.nombre}
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
        <div className='row'>
          {
            comidas.map(unaComida =>
              <FoodCard
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
