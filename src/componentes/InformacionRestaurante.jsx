import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

function InformacionRestaurante(props) {

  const [activeTab, setActiveTab] = useState('#first');
  const handleTabClick = (eventKey) => {
    setActiveTab(eventKey);
  };

  return (
    <>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link eventKey="#first" onClick={() => handleTabClick('#first')}>Descripción del lugar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#link" onClick={() => handleTabClick('#link')}>Info de contcato</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>

          {activeTab === '#first' && (
            <>
              <Card.Title>{props.ubicacion}</Card.Title>
              <Card.Text>{props.horario}</Card.Text>
              <Card.Text>{props.descripcion_restaurante}</Card.Text>
            </>
          )}
          {activeTab === '#link' && (
            <>
              <Card.Title>{props.contacto}</Card.Title>
              <Card.Text></Card.Text>
            </>
          )}
        </Card.Body>
      </Card>
      <br />
    </>
  )
}

export default InformacionRestaurante

// <Card border="success" style={{ width: '18rem' }}>
//         <Card.Header>Información del lugar</Card.Header>
//         <Card.Body>
//           <Card.Title>{props.ubicacion}</Card.Title>
//           <Card.Text>{props.horario}</Card.Text>
//           <Card.Text>{props.contacto}</Card.Text>
//           <Card.Text>{props.descripcion_restaurante}</Card.Text>
//         </Card.Body>
//       </Card>
//       <br />