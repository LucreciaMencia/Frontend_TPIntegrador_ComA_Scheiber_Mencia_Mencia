import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { IniciarSesion, Inicio, InfoDeLaPagina, RecuperarPassword, Registro  } from './paginas/publicas/Index'
import { MuroComensal, PerfilComensal, EditarComensal } from './paginas/privadas/comensal/Index'
import { CrearComida, PerfilRestaurante, EditarRestaurante, EditarComida } from './paginas/privadas/restaurante/Index'

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          
          <Route path='/iniciarSesion' element={<IniciarSesion />}></Route>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/infoDeLaPagina' element={<InfoDeLaPagina />}></Route>
          <Route path='/recuperarPassword' element={<RecuperarPassword />}></Route>
          <Route path='/registro' element={<Registro />}></Route>

          <Route path='/muroComensal' element={<MuroComensal />}></Route>
          <Route path='/perfilComensal' element={<PerfilComensal />}></Route>
          <Route path='/editarComensal' element={<EditarComensal />}></Route>

          <Route path='/crearComida' element={<CrearComida />}></Route>
          <Route path='/perfilRestaurante' element={<PerfilRestaurante />}></Route>
          <Route path='/editarRestaurante' element={<EditarRestaurante />}></Route>
          <Route path='/editarComida' element={<EditarComida />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
