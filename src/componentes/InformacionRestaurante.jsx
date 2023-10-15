import Card from 'react-bootstrap/Card';

function InformacionRestaurante(props) {
    return (
        <>
<Card border="success" style={{ width: '18rem' }}>
        <Card.Header>Información del lugar</Card.Header>
        <Card.Body>
          <Card.Title>{props.ubicacion}</Card.Title>
          <Card.Text>{props.horario}</Card.Text>
          <Card.Text>{props.contacto}</Card.Text>
          <Card.Text>{props.descripcion_restaurante}</Card.Text>
        </Card.Body>
      </Card>
      <br />
        </>
    )
}

export default InformacionRestaurante