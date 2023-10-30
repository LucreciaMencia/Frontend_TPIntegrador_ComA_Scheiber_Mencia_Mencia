import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';
import '../estilos/Estilos.css'
import { LuLogOut } from 'react-icons/lu'


function BarraDeNavRestaurantes(props) { //coloco props en los argumentos para recibir las props de perfilRestaurante

    const cerrarSesion = () => {
        sessionStorage.removeItem('token');

    };

    return (
        <>
            <Navbar expand="lg" className="navBg2" variant='dark'>

                <Container>

                    {/* en el Navbar.Brand coloco el nombre del restaurante que se mostrara en la pagina, 
                    con el dato del nombre que pase desde perfilRestaurante*/}
                    <Navbar.Brand as={Link} to="/perfilRestaurante">{props.nombre_restaurante}</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">

                            <Nav.Link as={Link} to="/crearComida">Crear Comidas</Nav.Link>

                            <Nav.Link as={Link} to="/editarRestaurante">Editar Perfil</Nav.Link>

                            <Nav.Link onClick={cerrarSesion} as={Link} to="/">Cerrar Sesión
                                <LuLogOut />

                            </Nav.Link>

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