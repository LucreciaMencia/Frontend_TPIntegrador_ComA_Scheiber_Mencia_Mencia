import '../estilos/Estilos.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from 'react-router-dom';


function BarraDeNavInicio() {
  return (
    <>
      <Navbar expand="lg" className="navBg" variant='dark'>
        <Container>


          <Navbar.Brand as={Link} to="/">Mi menú</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/infoDeLaPagina">¿Qué comemos hoy?</Nav.Link>
              <Nav.Link as={Link} to="/iniciarSesion">Iniciar Sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>


        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>)
}

export default BarraDeNavInicio