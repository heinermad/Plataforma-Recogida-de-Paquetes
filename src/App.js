import Aside from "./components/Aside";
import SegundaColumna from "./components/SegundaColumna";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProgRecogida from "./components/ProgRecogida";
import ConfirmarRecogida from "./components/ConfirmarRecogida";
import CrearUsuario from "./components/CrearUsuario";
import EditarUsuario from "./components/EditarUsuario";
import AsignarRecogidas from "./components/AsignarRecogidas";
import ListarEnvios from "./components/ListarEnvios";
import SeguirEnvio from "./components/SeguirEnvio";
import GestionUsuarios from "./components/GestionUsuarios";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Inicio/>}>
          <Route index path="seguirEnvio" element={<SeguirEnvio />} />
          <Route path="usuario" element={<GestionUsuarios />}>
            <Route path="editar" element={<EditarUsuario />} />
          </Route>
          <Route path="crear" element={<CrearUsuario />} />
          <Route path="recogida">
            <Route path="progRecogida" element={<ProgRecogida />} />
            <Route path="confRecogida" element={<ConfirmarRecogida />} />
            <Route path="asigRecogida" element={<AsignarRecogidas />} />
          </Route>
          <Route path="envio">
            <Route path="seguirEnvio" element={<SeguirEnvio />} />
            <Route path="listarEnvios" element={<ListarEnvios />} />
          </Route>
        </Route>
        <Route path="/*" exact element={<NotFound />} />
      </Routes>
    </Router>
    </div>
  );
}

function Inicio() {
  return (
    <div id="wrapper">
      <Aside />
      <div id="content-wrapper" className="d-flex flex-column">
      <Nav />
        <div className="container-fluid">
          <Outlet/>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
