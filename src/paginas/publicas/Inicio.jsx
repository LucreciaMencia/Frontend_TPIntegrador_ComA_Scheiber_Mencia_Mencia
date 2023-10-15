import Container from 'react-bootstrap/Container';
import {CarouselInicio} from '../../componentes/Index';
import {BarraDeNavInicio} from '../../navBar/Index';
import '../../estilos/Estilos.css'




function Inicio() {
  return (
    <>
      <nav>
        <BarraDeNavInicio />
      </nav>
      <Container fluid className='justify-content-md-center p-4'>
          <div >
          <CarouselInicio />
          </div>
      </Container>
    </>

  )
}

export default Inicio


// <div className="col-4 custom-bg-color ">


// <div>
//   <Link to="/iniciar-sesion" className='ms-2'>Iniciar Sesión</Link>
//   <Link to="/muroComensal" className='ms-2'>Muro Comensal</Link>
//   <Link to="/perfilRestaurante" className='ms-2'>Perfil Restaurante</Link>
//   <div className='"grid gap-x-3 gap-y-2 sm:grid-cols-2 sm:gap-y-0"'>
//     <Button variant="outline-light" size="lg">
//       <div className='relative -top-[1px]'>Iniciar Sesion</div>
//     </Button>
//     <Button variant="outline-light" size="lg">
//       <div className='relative -top-[1px]'>Registrarme</div>
//     </Button>
//   </div>
// </div>

// <div>
//   <Link to="/queComemosHoy" className='ms-2'>¿Qué comemos hoy?</Link>
// </div>
// </div>