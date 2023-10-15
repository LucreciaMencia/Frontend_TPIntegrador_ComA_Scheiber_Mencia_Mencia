import Carousel from 'react-bootstrap/Carousel';
import '../estilos/Estilos.css'

import asadito from '../imagenes/asadito.png'
import sandwich13 from '../imagenes/sandwich13.png'
import beer13 from '../imagenes/beer13.png'
import burger13 from '../imagenes/burger133.png'
import pizza from '../imagenes/pizza.png'
import food from '../imagenes/food-table.png'


function CarouselInicio() {
    return (

        <Carousel className="centered-carousel">

            <Carousel.Item interval={2000}>
                <img 
                    className='d-block w-100 centered-image'
                    src={asadito}
                    alt="Asado." />
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                    className='d-block w-100 centered-image'
                    src={beer13}
                    alt="Cerveza." />
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                    className='d-block w-100 centered-image'
                    src={pizza}
                    alt="Pizza." />
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                    className='d-block w-100 centered-image'
                    src={burger13}
                    alt="Hamburguesa." />
            </Carousel.Item>
            
            <Carousel.Item interval={2000}>
                <img
                    className='d-block w-100 centered-image'
                    src={sandwich13}
                    alt="Sandwich." />
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                    className='d-block w-100 centered-image'
                    src={food}
                    alt="Comiendo en la mesa." />
            </Carousel.Item>

        </Carousel>


    )
}

export default CarouselInicio