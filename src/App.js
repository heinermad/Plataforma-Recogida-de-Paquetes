
import Aside from './components/Aside';
import SegundaColumna from './components/SegundaColumna';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ProgRecogida from './components/ProgRecogida';
import ConfirmarRecogida from './components/ConfirmarRecogida';
import AsignarRecogidas from './components/AsignarRecogidas';
import ListarEnvios from './components/ListarEnvios';
import SeguirEnvio from './components/SeguirEnvio';

function App() {
  return (


    <div id="wrapper">
     
      <Aside />
    
      <div id="content-wrapper" className="d-flex flex-column">
        <Nav />
        <div className="container-fluid">
          <Routes>
              <Route path="/" exact element= { < Dashboard /> } />
              <Route path="/progRecogida" exact element= { < ProgRecogida /> } />
              <Route path="/confRecogida" exact element= { < ConfirmarRecogida /> } />
              <Route path="/asigRecogida" exact element= { < AsignarRecogidas /> } />
              <Route path="/listarEnvios" exact element= { < ListarEnvios /> } />
              <Route path="/seguirEnvio" exact element= { < SeguirEnvio /> } />

           </Routes > 
        </div>
        
        <Footer />
      </div>
    
    </div>





  );
}

export default App;
