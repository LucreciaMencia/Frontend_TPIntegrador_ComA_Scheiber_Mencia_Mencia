import { useEffect, useState } from 'react'
import { InformacionRestaurante, FoodCard } from '../../../componentes/Index';
import { BarraDeNavRestaurante } from '../../../navBar/Index';

//importo funciones
import { obtenerRestaurante } from '../../../api/restaurante';
import { obtenerComidas } from '../../../api/comida';




function PerfilRestaurante() {

  const token = sessionStorage.getItem('token')

  const [comidas, setComidas] = useState([])
  const [infoRestaurante, setInfo] = useState('')

  const id_usuario = 4; //guardar el valor del id del usuario extraido del token

  useEffect(() => {
    // Ni bien se renderiza este componente, se hace el siguiente request
    obtenerComidas(id_usuario)
      .then((res) => res.json())
      .then(setComidas);

    obtenerRestaurante(id_usuario, token)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data)
      });
  }, [token])

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
