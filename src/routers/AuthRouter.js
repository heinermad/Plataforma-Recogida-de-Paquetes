import React from 'react'
import { Routes,Route } from 'react-router';
import AsignarRecogidas from "../pages/private/AsignarRecogidas";
import ConfirmarRecogida from "../pages/private/ConfirmarRecogida";
import ProgRecogida from "../pages/private/ProgRecogida";
import ListarEnvios from "../pages/private/ListarEnvios";
import SeguirEnvio from "../pages/private/SeguirEnvio";
import GestionUsuarios from "../pages/private/GestionUsuarios";
import CrearUsuario from "../pages/private/CrearUsuario";



import Nav from "../components/Nav";
import {Dashboard} from "../pages/private/Dashboard";
import EditarUsuario from '../pages/private/EditarUsuario';
import EliminarUsuario from '../pages/private/EliminarUsuario';

export const AuthRouter = () => {
  return (
    
    
        <Routes>
            <Route path="/" element={<Dashboard />}>
                <Route index element={<ListarEnvios />}/>
                <Route path="asigRecogida" element={<AsignarRecogidas/>} />
                <Route path="progRecogida" element={<ProgRecogida/>} />
                <Route path="confRecogida" element={<ConfirmarRecogida/>} />
                <Route path="listarEnvios" element={<ListarEnvios/>} />
                <Route path="seguirEnvio" element={<SeguirEnvio/>} />
                <Route path="usuario" element={<GestionUsuarios/>} />
                <Route path="usuario/editar/:id" element={<EditarUsuario/>} />
                <Route path="usuario/eliminar/:id" element={<EliminarUsuario/>} />
                
                <Route path="crear" element={<CrearUsuario/>} />
                <Route path="*" element={<Nav/>}/>
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