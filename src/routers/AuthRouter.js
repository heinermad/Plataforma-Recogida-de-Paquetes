import React from 'react'
import { Routes,Route } from 'react-router';
import AsignarRecogidas from "../pages/private/AsignarRecogidas";
import ConfirmarRecogida from "../pages/private/ConfirmarRecogida";
import ProgRecogida from "../pages/private/ProgRecogida";
import ListarEnvios from "../pages/private/ListarEnvios";
import SeguirEnvio from "../pages/private/SeguirEnvio";
import GestionUsuarios from "../pages/private/GestionUsuarios";
import CrearUsuario from "../pages/private/CrearUsuario";



import {Dashboard} from "../pages/private/Dashboard";
import EditarUsuario from '../pages/private/EditarUsuario';
import EliminarUsuario from '../pages/private/EliminarUsuario';
import NotFound from '../pages/public/NotFound';

export const AuthRouter = () => {
  return (
    
    
        <Routes>
            <Route path="/" exact element={<Dashboard />}>
                <Route index exact element={<ProgRecogida />}/>
                <Route path="asigRecogida" exact element={<AsignarRecogidas/>} />
                <Route path="progRecogida" exact element={<ProgRecogida/>} />
                <Route path="confRecogida" exact element={<ConfirmarRecogida/>} />
                <Route path="listarEnvios" exact element={<ListarEnvios/>} />
                <Route path="seguirEnvio" exact element={<SeguirEnvio/>} />
                <Route path="usuario" exact element={<GestionUsuarios/>} />
                <Route path="usuario/editar/:id" exact element={<EditarUsuario/>} />
                <Route path="usuario/eliminar/:id" exact element={<EliminarUsuario/>} />
                
                <Route path="crear" exact element={<CrearUsuario/>} />
                <Route path="*" element={<NotFound/>}/>
             </Route>
         </Routes>
           
         
    
    
  )
}

/* function Inicio()  {
  return (
    <div id="wrapper">
      <Aside />
      <div id="content-wrapper" className="d-flex flex-column">
      <Nav />
        <div className="container-fluid">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
} 
  */