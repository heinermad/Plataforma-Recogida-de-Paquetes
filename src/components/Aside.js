import React from 'react'
import { Link } from 'react-router-dom';


export function Aside() {
   
    let valor='otro'; 
    const clickMe = (parameter) => (event) => {
        
        let contenidoPag=parameter
        alert('A name was submitted: ' + contenidoPag);
        event.preventDefault();
        console.log(contenidoPag);

       
          
        
        

    }

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="#">
                <div className="sidebar-brand-icon rotate-n-0">
                    <i className="fas fa-truck-moving"></i>
                </div>
                <div className="sidebar-brand-text mx-3">PBOX </div>
            </Link>

            
          {/*   <hr className="sidebar-divider my-0" />

                <li className="nav-item active">
                    <Link className="nav-link" to="/" onClick={(e) => this.actualizarContenido('Dashboard', e)} >
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li> */}

                
                <hr className="sidebar-divider"/>

                    <div className="sidebar-heading">
                        Interface
                    </div>

                   
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="none" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-people-carry"></i>
                            <span>Recolección</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Components:</h6>
                                <Link className="collapse-item" to="/asigRecogida">Asignar Recogida </Link>
                                <Link className="collapse-item" to="/progRecogida">Programar Recogida </Link>
                                <Link className="collapse-item" to="/confRecogida">Confirmar Recogida </Link>
                            </div>
                        </div>
                    </li>

                  
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="none" data-toggle="collapse" data-target="#collapseUtilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas fa-fw fa-mail-bulk"></i>
                            <span>Envíos</span>
                        </a>
                        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Utilities:</h6>
                                <Link className="collapse-item" to="/listarEnvios">Listar Envíos</Link>
                                <Link className="collapse-item" to="/seguirEnvio">Seguir envío</Link>
                              
                                
                            </div>
                        </div>
                    </li>

                   
                    <hr className="sidebar-divider" />

                        
                        <div className="sidebar-heading">
                            Addons
                        </div>

                        
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="none" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-user"></i>
                                <span>Usuarios</span>
                            </a>
                            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Login Screens:</h6>
                                    <Link className="collapse-item" to="usuario">Gestion de Usuarios</Link>
                                    <Link className="collapse-item" to="usuario/crear">Crear Usuario</Link>
                                   
                                   
                                </div>
                            </div>
                        </li>

                        
                        <li className="nav-item">
                            <a className="nav-link" href="charts.html">
                                <i className="fas fa-fw fa-file-download"></i>
                                <span>Reportes</span></a>
                        </li>

                        
                       {/*  <li className="nav-item">
                            <a className="nav-link" href="none"   >
                                <i className="fas fa-fw fa-table"></i>
                                <span onClick={clickMe(valor)} >Tables</span></a>
                        </li> */}

                        
                        <hr className="sidebar-divider d-none d-md-block" />

                            
                            <div className="text-center d-none d-md-inline">
                                <button className="rounded-circle border-0" id="sidebarToggle"></button>
                            </div>

                            
                            <div className="sidebar-card d-none d-lg-flex">
                                <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
                                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
                            </div>

        </ul>
        
        
                        );
}

export default Aside;