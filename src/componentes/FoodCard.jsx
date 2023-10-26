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
                <Card.Body>
                    <Card.Title>{props.nombre}</Card.Title>
                    <Card.Text>
                        {props.descripcion}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>PRECIO ${props.precio}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link as={Link} to="/perfilRestaurante">{props.restaurante}</Card.Link>
                </Card.Body>
                <StarRating
                valorInicial={props.puntaje}
                puedePuntuar={props.puedePuntuar} />
            </Card>
           
        </div>
    )
}

export default FoodCard