import React from 'react'
import { Routes,Route,Navigate } from 'react-router';
import AsignarRecogidas from "../pages/private/AsignarRecogidas";
import ConfirmarRecogida from "../pages/private/ConfirmarRecogida";
import ProgRecogida from "../pages/private/ProgRecogida";
import ListarEnvios from "../pages/private/ListarEnvios";
import SeguirEnvio from "../pages/private/SeguirEnvio";
import GestionUsuarios from "../pages/private/GestionUsuarios";
import CrearUsuario from "../pages/private/CrearUsuario";

import NotFound from "../pages/public/NotFound";

import { useNavigate } from 'react-router';

import Nav from "../components/Nav";
import {Dashboard} from "../pages/private/Dashboard";
import Footer from "../components/Footer";
import EditarUsuario from '../pages/private/EditarUsuario';
import EliminarUsuario from '../pages/private/EliminarUsuario';

export const AuthRouter = () => {
  const alm= JSON.parse(localStorage.getItem("tasks"));
  const navigate = useNavigate();
  return (
    
     
        <Routes>
            <Route path="/" element={<Dashboard />}>
                <Route index element={<Footer />}/>
                <Route path="asigRecogida" element={<AsignarRecogidas/>} />
                <Route path="progRecogida" element={<ProgRecogida/>} />
                <Route path="confRecogida" element={<ConfirmarRecogida/>} />
                <Route path="listarEnvios" element={<ListarEnvios/>} />
                <Route path="seguirEnvio" element={<SeguirEnvio/>} />
               
                {alm.name==='Wilmer'?<Route path="usuario" element={<GestionUsuarios/>} />:<Route path="*"  element={<Navigate to="/" />} />} 
                <Route path="usuario/editar/:id" element={<EditarUsuario/>} />
                <Route path="usuario/eliminar/:id" element={<EliminarUsuario/>} />
                
                <Route path="crear" element={<CrearUsuario/>} />
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