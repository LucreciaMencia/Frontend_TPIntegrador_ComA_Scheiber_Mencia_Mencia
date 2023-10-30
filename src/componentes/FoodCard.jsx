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

    function onClick(){
        navigate('/')
    }

    return (
        <div className='col-md-4 foodGridItem' style={{ display: 'flex', flexFlow: 'column' }}>
            <Card style={{ width: '25rem' }}>
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

            </Card>
            <div>
                {
                    props.puedeBorrarValoracion ?
                        <BorrarValoracion
                            id_valoracion={props.valoracion}
                        /> : null
                }
                {
                    props.puedeEditar ?
                        <EditarUnaComida
                            id_comida={props.id}
                        />
                        : null
                }
                {
                    props.borrarComida ?
                        <BorrarComida
                            id_comida={props.id}
                        />
                        : null
                }
                <StarRating
                    valorInicial={props.puntaje}
                    puedePuntuar={props.puedePuntuar}
                    onRatingChange={onRatingChange}
                />
            </div>
        </div>
    )
}

export default FoodCard