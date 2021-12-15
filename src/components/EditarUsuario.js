import { React, useState, useEffect } from "react";
import axios from "axios";
import MyToast from "./MyToast";
import { render } from "@testing-library/react";
import { useParams } from "react-router-dom";

export function EditarUsuario() {
  const initialState = {
    numDoc:"",
    nombre: "",
    apellidos: "",
    direccion: "",
    fecha_nac: "",
    email: "",
    usuario: "",
    clave: "",
    genero: "",
    rol: "",
  };
  const { id } = useParams(initialState);
  const [datos, setDatos] = useState(initialState);

  useEffect(() => {
      
   

    editar();
  }, [id]);

  async function editar() {
    const res = await fetch("http://localhost:4000/users/"+id);
    const data = res.json();
    console.log("Adentro ", id);
    console.log("Adentro ", data);
    setDatos(data);
    console.log("Datos del state ", datos);
    }

  return (
    <div>

      <div> Hola {id}</div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Crear usuario</h1>
      </div>

      <div className="card border-left-primary shadow h-100 py-2">
        <div className="col-lg-12 col-xl-12 col-md-12 mb-4">
          <form>
            <fieldset className="border p-2 rounded">
              <legend className="w-auto">
                <small>Información Usuario</small>
              </legend>
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre(s)</label>
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      value={datos.nombre}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="apellidos">Apellidos</label>
                    <input
                      type="text"
                      name="apellidos"
                      id="apellidos"
                      value={datos.apellidos}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="direccion">Dirección</label>
                    <input
                      type="text"
                      name="direccion"
                      id="direccion"
                      value={datos.direccion}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="fecha_nac">Fecha Nac.</label>
                    <input
                      type="text"
                      name="fecha_nac"
                      id="fecha_nac"
                      value={datos.fecha_nac}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="numDoc">Doc No.</label>
                    <input
                      type="number"
                      name="numDoc"
                      id="numDoc"
                      value={datos.numDoc}
                      className="form-control"
                    />
                    <div className="invalid-feedback">Error</div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="email">Correo</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={datos.email}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="usuario">Usuario</label>
                    <input
                      type="text"
                      name="usuario"
                      id="usuario"
                      value={datos.usuario}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="clave">Contraseña</label>
                    <input
                      type="password"
                      name="clave"
                      id="clave"
                      value={datos.clave}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="genero">Género</label>
                    <input
                      type="text"
                      name="genero"
                      id="genero"
                      value={datos.genero}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="rol">Rol</label>
                    <input
                      type="text"
                      name="rol"
                      id="rol"
                      value={datos.rol}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="d-flex align-content-between flex-wrap p-2">
              <button type="submit" className="btn btn-success mr-2 ">
                Crear
              </button>
              <button type="submit" className="btn btn-warning mr-2">
                Limpiar
              </button>
              <button type="submit" className="btn btn-danger ">
                Cancelar
              </button>
            </div>
          </form>
          {/* <MyToast exito="si"/> */}
          {/* <MyToast exito="no"/> */}
        </div>
      </div>
    </div>
  );
}

export default EditarUsuario;
