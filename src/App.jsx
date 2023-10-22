import {
  createBrowserRouter,
  createRoutesFromElements,
  Route, Routes,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { IniciarSesion, Inicio, InfoDeLaPagina, RecuperarPassword, RegistroComensal, RegistroRestaurante } from './paginas/publicas/Index'
import { MuroComensal, PerfilComensal, EditarComensal } from './paginas/privadas/comensal/Index'
import { CrearComida, PerfilRestaurante, EditarRestaurante, EditarComida } from './paginas/privadas/restaurante/Index'
import perfilRestauranteLoader from "./paginas/privadas/restaurante/loaders/perfilRestauranteLoader";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Inicio />}></Route>

        <Route path='/iniciarSesion' element={<IniciarSesion />}></Route>
        <Route path='/infoDeLaPagina' element={<InfoDeLaPagina />}></Route>
        <Route path='/recuperarPassword' element={<RecuperarPassword />}></Route>
        <Route path='/registroComensal' element={<RegistroComensal />}></Route>
        <Route path='/registroRestaurante' element={<RegistroRestaurante />}></Route>

        <Route path='/muroComensal' element={<MuroComensal />}></Route>
        <Route path='/perfilComensal' element={<PerfilComensal />}></Route>
        <Route path='/editarComensal' element={<EditarComensal />}></Route>

        <Route path='/crearComida' element={<CrearComida />}></Route>
        <Route loader={perfilRestauranteLoader} path='/perfilRestaurante' element={<PerfilRestaurante />}></Route>
        <Route path='/editarRestaurante' element={<EditarRestaurante />}></Route>
        <Route path='/editarComida' element={<EditarComida />}></Route>
      </>
    )
  );

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
