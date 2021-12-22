import React from "react";
import { Link } from "react-router-dom";

export function Aside() {
  

  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="#"
      >
        <div className="sidebar-brand-icon rotate-n-0">
          <i className="fas fa-truck-moving"></i>
        </div>
        <div className="sidebar-brand-text mx-3">PBOX PGP</div>
      </Link>

      <hr className="sidebar-divider" />


      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="none"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-people-carry"></i>
          <span>Recolección</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to="/asigRecogida">
              Asignar Recogida{" "}
            </Link>
            <Link className="collapse-item" to="/progRecogida">
              Programar Recogida{" "}
            </Link>
            <Link className="collapse-item" to="/confRecogida">
              Confirmar Recogida{" "}
            </Link>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="none"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i className="fas fa-fw fa-mail-bulk"></i>
          <span>Envíos</span>
        </a>
        <div
          id="collapseUtilities"
          className="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to="/listarEnvios">
              Listar Envíos
            </Link>
            <Link className="collapse-item" to="/seguirEnvio">
              Seguir envío
            </Link>
          </div>
        </div>
      </li>



      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="none"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i className="fas fa-fw fa-user"></i>
          <span>Usuarios</span>
        </a>
        <div
          id="collapsePages"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to="usuario">
              Gestion de Usuarios
            </Link>
            <Link className="collapse-item" to="crear">
              Crear Usuario
            </Link>
          </div>
        </div>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      
    </ul>
  );
}

export default Aside;
