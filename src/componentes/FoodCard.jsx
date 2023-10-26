import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { StarRating } from './Index';
import ListGroup from 'react-bootstrap/ListGroup';




function FoodCard(props) {
    return (
        <div className='col-md-4'>
            <Card style={{ width: '25rem' }}>
                {/* en src deberia ir una url donde pedir las imagenes*/}
                <Card.Img variant="top" src={`http://localhost:8080/comida/${props.id}/imagen`} style={{ height: '300px', objectFit: 'cover' }} />
                <Card.ImgOverlay style={{
                    display: "flex",
                    flexFlow: "column",
                    alignItems: "start",
                    justifyContent: "end"
                }}>
                    <Card.Title
                        style={{
                            marginBottom: "112px",
                            marginLeft: "-5px",
                            backgroundColor: "#ca2326",
                            color: "white",
                            padding: "3px",
                            borderRadius: "5px"
                        }}>
                            {props.nombre} ${props.precio}</Card.Title>
                </Card.ImgOverlay>
                <Card.Body style={{
                    // backgroundColor: "#",
                    // opacity: 0.1
                }}>
                <Card.Link as={Link} to="/perfilRestaurante"> {props.restaurante}</Card.Link>
                    <Card.Text>{props.descripcion}</Card.Text>
                </Card.Body>
                <StarRating
                    valorInicial={props.puntaje}
                    puedePuntuar={props.puedePuntuar} />
            </Card>
           
        </div>
    )
}

export default FoodCard