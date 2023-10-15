import {BarraDeNavComensal} from '../../../navBar/Index'
import { useEffect, useState } from 'react';
import { FoodCard } from '../../../componentes/Index';




function MuroComensal() {
  const [comidas, setComidas] = useState([])

  const id_restaurante = 1;

  useEffect(() => {
    // Ni bien se renderiza este componente, se hace el siguiente request
    ObtenerComidas(id_restaurante)
      .then((res) => res.json())
      .then(setComidas);
  }, [])

  return (
    <>
      <nav>
        <BarraDeNavComensal />
      </nav>
      <br></br>
      <div className='container justify-content-center align-items-center vh-100 bg-white'>
        <div className='row'>
          {comidas.map
            (unaComida =>
              <FoodCard
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

function ObtenerComidas(id_restaurante) {
  let parametros = {
    method: 'GET'
  }
  return fetch(`http://localhost:8080/comida?restaurante=${id_restaurante}`, parametros)
}

export default MuroComensal