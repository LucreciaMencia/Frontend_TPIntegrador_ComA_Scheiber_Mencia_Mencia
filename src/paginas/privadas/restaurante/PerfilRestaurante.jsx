import { useEffect, useState } from 'react'
import { InformacionRestaurante, FoodCard } from '../../../componentes/Index';
import { BarraDeNavRestaurante } from '../../../navBar/Index';
import { ObtenerRestaurante } from '../../../api/restaurante';
import { ObtenerComidas } from '../../../api/comida';




function PerfilRestaurante() {

  const token = sessionStorage.getItem('token')

  const [comidas, setComidas] = useState([])
  const [infoRestaurante, setInfo] = useState('')

  const id_usuario = 4; //llamar id_usuario y guardar el valor del id del usuario extraido del token

  useEffect(() => {
    // Ni bien se renderiza este componente, se hace el siguiente request
    ObtenerComidas(id_usuario)
      .then((res) => res.json())
      .then(setComidas);

    ObtenerRestaurante(id_usuario, token)
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

//Voy a tener un array de comidas, y por cada comida que haya en el array se bede crear una FoodCard

/*
Pedirle a jp:
pedirle en cada endpoint que me devuelva cada dato.


*/