import { BarraDeNavInicio } from '../../navBar/Index'
import videoPizza from '../../imagenes/video-pizza.mp4'
import '../../estilos/Estilos.css'


function InfoDeLaPagina() {
    return (
        <>
            <nav>
                <BarraDeNavInicio />
            </nav>

            <div className="video-container">
                <video autoPlay loop muted>
                    <source src={videoPizza} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="content">
                    <h2>¿Qué comemos hoy?</h2>
                    <span className='sub-titulo'>
                        Mi menú es un sistema donde puedes ver el menú de los restaurantes registrados
                        sus precios y qué tan bien valuados están por la comunidad de comensales.


                    </span>
                </div>
            </div>
        </>
    )
}

export default InfoDeLaPagina