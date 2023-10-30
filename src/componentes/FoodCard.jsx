import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { BorrarComida, EditarUnaComida, StarRating } from './Index';
import crearValoracion from '../api/valoraciones/crearValoracion';
import { BorrarValoracion } from './Index';
import { useNavigate } from 'react-router'



function FoodCard(props) {
    const navigate = useNavigate()

    function onRatingChange(puntaje) {
        const datosValoracion = {
            "idComida": props.id,
            "puntaje": puntaje
        }
        crearValoracion(datosValoracion)
    }

    function onClick() {
        navigate('/')
    }

    return (
        <div className='col-md-4 foodGridItem' style={{ display: 'flex', flexFlow: 'column' }}>
            <Card style={{ width: '600px' }}>
                {/* en src deberia ir una url donde pedir las imagenes*/}
                <Card.Img variant="top" src={`http://localhost:8080/comida/${props.id}/imagen`} style={{ objectFit: 'cover' }} />
                <span>
                    <Card.Title
                        style={{
                            backgroundColor: "#ca2326",
                            color: "white",
                            padding: "3px 9px",
                            fontSize: "12pt"
                        }}>
                        {props.nombre} ${props.precio}</Card.Title>
                </span>
                <Card.Body style={{ padding: "8px" }}>
                    <Card.Text style={{ margin: "0px", marginTop: "5px" }}>{props.descripcion}</Card.Text>
                    <Card.Link
                        as={Link}
                        to={`/perfilRestauranteVistaComensal/${props.id_restaurante}`}
                        onClick={onClick}
                    > {props.restaurante}</Card.Link>
                </Card.Body>
                <div style={{ display: 'flex', justifyContent: 'end', margin: '0px 15px 15px 0'}}>
                    {
                        props.puedeBorrarValoracion &&
                        <BorrarValoracion
                            id_valoracion={props.valoracion}
                        />
                    }
                    {
                        props.puedeEditar &&
                        <EditarUnaComida
                            id_comida={props.id}
                        />
                    }
                    {
                        props.borrarComida &&
                        <BorrarComida
                            id_comida={props.id}
                        />
                    }
                </div>
            </Card>
            <StarRating
                valorInicial={props.puntaje}
                puedePuntuar={props.puedePuntuar}
                onRatingChange={onRatingChange}
            />
        </div>
    )
}

export default FoodCard