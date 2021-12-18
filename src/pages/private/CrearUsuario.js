import { React, useState, useEffect } from "react";
import axios from "axios";
import MyToast from "./MyToast";
import { render } from "@testing-library/react";

function CrearUsuario() {
  const initialState = {
    numDoc: "",
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
  const [data, setData] = useState(initialState);

  const onCancelar = async (e) => {
    setData(initialState);
  }

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
      .post("http://localhost:4000/users", newUser)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data === "Usuario creado") {
          setData(initialState);
          render(<MyToast exito="crear" />);
        } else {
          render(<MyToast exito="no" mensajeError={res.data.message} />);
        }
      })
      .catch((err) => {
        // what now?
        /* render(<MyToast exito="no" mensajeError={res.data}/>) */
      });
  };

  function handle(e) {
    e.preventDefault();
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData)
  }

  return (
    <div>
      <div> </div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Crear usuario</h1>
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
                      onChange={(e) => handle(e)}
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
                      value={data.apellidos}
                      onChange={(e) => handle(e)}
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
                      value={data.direccion}
                      onChange={(e) => handle(e)}
                      className="form-control"
                    />
                  </div>
                </div>
                {/* Note Date */}
                {/* <div className="form-group">
                            <DatePicker className="form-control" selected={data.date} onChange={onChangeDate} />
                        </div> */}
                {/* <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="fecha_nac">Fecha Nac.</label>
                      <input
                        type="date"
                        name="fecha_nac"
                        className="form-control"
                        placeholder=""
                        id="fecha_nac"
                        required
                      />
                    </div>
                  </div> */}
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="fecha_nac">Fecha Nac.</label>
                    <input
                      type="text"
                      name="fecha_nac"
                      id="fecha_nac"
                      value={data.fecha_nac}
                      onChange={(e) => handle(e)}
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
                      value={data.numDoc}
                      onChange={(e) => handle(e)}
                      className="form-control"
                    />
                    <div class="invalid-feedback">Error</div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="email">Correo</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={data.email}
                      onChange={(e) => handle(e)}
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
                      value={data.usuario}
                      onChange={(e) => handle(e)}
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
                      value={data.clave}
                      onChange={(e) => handle(e)}
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
                      value={data.genero}
                      onChange={(e) => handle(e)}
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
                      value={data.rol}
                      onChange={(e) => handle(e)}
                      className="form-control"
                    />
                  </div>
                </div>
                {/* <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="genero">Género</label>
                      <select
                        name="genero"
                        className="form-control"
                        id="genero"
                      >
                        <option id="porDefecto">Seleccione</option>
                        <option>Masculino</option>
                        <option>Femenino</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="rol">Rol</label>
                      <select name="rol" className="form-control" id="rol">
                        <option id="porDefecto">Seleccione</option>
                        <option>Administrador</option>
                        <option>Mensajero</option>
                      </select>
                    </div>
                  </div> */}
              </div>
            </fieldset>
            <div className="d-flex align-content-between flex-wrap p-2">
              <button type="submit" className="btn btn-success mr-2 ">
                Crear
              </button>
              
              <button onClick={onCancelar} type="submit" className="btn btn-danger ">
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

export default CrearUsuario;