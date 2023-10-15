import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';
import '../estilos/Estilos.css'


function BarraDeNavRestaurantes(props) {
    return (
        <>
            <Navbar expand="lg" className="navBg2" variant='dark'>

                <Container>
                    
                    <Navbar.Brand as={Link} to="/perfilRestaurante">{props.nombre_restaurante}</Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        <Nav className="me-auto">
                            
                            <Nav.Link as={Link} to="/crearComida">Crear Comidas</Nav.Link>
                            <Nav.Link as={Link} to="/editarRestaurante">Editar Perfil</Nav.Link>
                            <Nav.Link as={Link} to="/">Cerrar Sesion</Nav.Link>
                       
                        </Nav>
                   
                    
                    </Navbar.Collapse>
                
                </Container>
           
            </Navbar>
           
            <section>

                <Outlet></Outlet>

            </section>
        </>
    )
}

export default BarraDeNavRestaurantes