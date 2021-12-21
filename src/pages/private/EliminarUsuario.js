import { React, useState, useEffect } from "react";
import axios from "axios";
import MyToast from "./MyToast";
import { render } from "@testing-library/react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

export function EliminarUsuario() {
  const navigate = useNavigate();
  const { id } = useParams();
  const array = id.split(",");
  const fecha = array[2].replace(")", "#");

  const initialState = {
    numDoc: array[4],
    nombre: array[0],
    apellidos: array[1],
    direccion: fecha,
    fecha_nac: array[3],
    email: array[5],
    usuario: array[6],
    clave: array[7],
    genero: array[8],
    rol: array[9],
  };

  const [data, setData] = useState(initialState);

  const onCancelar = async (e) => {
    navigate("/usuario");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      numDoc: data.numDoc,
      nombre: data.nombre,
      apellidos: data.apellidos,
      direccion: data.direccion,
      fecha_nac: data.fecha_nac,
      email: data.email,
      usuario: data.usuario,
      clave: data.clave,
      genero: data.genero,
      rol: data.rol,
    };
    axios
      .delete("http://localhost:4000/usuarios/" + data.numDoc)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data === "Usuario borrado") {
          setData([]);
          render(<MyToast exito="eliminar" />);

          navigate("/usuario");
        } else {
          render(<MyToast exito="no" mensajeError={res.data.message} />);
        }
      })
      .catch((err) => {
        // what now?
        /* render(<MyToast exito="no" mensajeError={res.data}/>) */
      });
  };

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Eliminar usuario</h1>
      </div>
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="col-lg-12 col-xl-12 col-md-12 mb-4">
          <form onSubmit={onSubmit}>
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
                      value={data.nombre}
                      className="form-control"
                      disabled
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
                      value={data.apellidos}
                      className="form-control"
                      disabled
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
                      className="form-control"
                      value={data.direccion}
                      disabled
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
                      className="form-control"
                      value={data.fecha_nac}
                      disabled
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
                      className="form-control"
                      value={data.numDoc}
                      disabled
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
                      className="form-control"
                      value={data.email}
                      disabled
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
                      className="form-control"
                      value={data.usuario}
                      disabled
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
                      className="form-control"
                      value={data.clave}
                      disabled
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
                      className="form-control"
                      value={data.genero}
                      disabled
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
                      className="form-control"
                      value={data.rol}
                      disabled
                    />
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="d-flex align-content-between flex-wrap p-2">
              <button type="submit" className="btn btn-danger mr-2 ">
                Eliminar
              </button>
              <button onClick={onCancelar} className="btn btn-warning ">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EliminarUsuario;
