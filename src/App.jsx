import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { IniciarSesion, Inicio, InfoDeLaPagina, RecuperarPassword, RegistroComensal, RegistroRestaurante } from './paginas/publicas/Index'
import { MuroComensal, PerfilComensal, EditarComensal } from './paginas/privadas/comensal/Index'
import { CrearComida, PerfilRestaurante, EditarRestaurante, EditarComida } from './paginas/privadas/restaurante/Index'

//Se agrega loader={} a los componentes que precisan mostrar datos de la BD.
//se precargan en el loader y luego se pasa a las respectivas rutas
import { perfilRestauranteLoader, editarRestauranteLoader, editarComidaLoader, crearComidaLoader } from "./paginas/privadas/restaurante/loaders/index";
import { perfilComensalLoader, muroComensalLoader, editarComensalLoader } from "./paginas/privadas/comensal/loaders/index";


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

        <Route loader={muroComensalLoader} path='/muroComensal' element={<MuroComensal />}></Route>
        <Route loader={perfilComensalLoader} path='/perfilComensal' element={<PerfilComensal />}></Route>
        <Route loader={editarComensalLoader} path='/editarComensal' element={<EditarComensal />}></Route>

        <Route loader={crearComidaLoader} path='/crearComida' element={<CrearComida />}></Route>
        <Route loader={perfilRestauranteLoader} path='/perfilRestaurante' element={<PerfilRestaurante />}></Route>
        <Route loader={editarRestauranteLoader} path='/editarRestaurante' element={<EditarRestaurante />}></Route>
        <Route loader={editarComidaLoader} path='/editarComida/:id_comida' element={<EditarComida />}></Route>
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