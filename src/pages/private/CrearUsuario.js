import { React, useState } from "react";
import axios from "axios";
import MyToast from "./MyToast";
import { render } from "@testing-library/react";

function CrearUsuario() {
  
  const rol = [
    {
      id: 1,
      perfil: "Administador",
    },
    {
      id: 2,
      perfil: "Mensajero",
    },
  ];

  const genero = [
    {
      id: 1,
      genero: "Masculino",
    },
    {
      id: 2,
      genero: "Femenino",
    },
  ];

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
      .post("https://plataforma-recogida-de-paquete.herokuapp.com/usuarios", newUser)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data === "Usuario creado") {
          setData(initialState);
          render(<MyToast exito="crearUsuario" />);
        } else {
          render(<MyToast exito="no" mensajeError={res.data.errors.usuario.value + '. ' + res.data.message} />);
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
    console.log(newData);
  }

  return (
    <div>

      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Crear usuario</h1>
      </div>

      <div className="card border-left-primary shadow h-100 py-2">
        <div className="col-lg-12 col-xl-12 col-md-12 mb-4">
          
          <form onSubmit={onSubmit}>
            
            <fieldset className="border p-2 rounded">
              <legend className="w-auto">
                <small>Informaci??n Usuario</small>
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
                    <label htmlFor="direccion">Direcci??n</label>
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

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="fecha_nac">Fecha Nac.</label>
                    <input
                      type="date"
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
                    <label htmlFor="clave">Contrase??a</label>
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

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-1">
                  <div className="form-group">
                    <label htmlFor="genero">G??nero</label>
                    <select
                      id="genero"
                      value={data.genero}
                      onChange={(e) => handle(e)}
                      className="form-control input-lg"
                    >
                    <option>Seleccione una opci??n:</option>
                      {genero.map((item, i) => (
                        <option key={item.id} value={item.genero}>
                          {item.genero}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-1">
                  <div className="form-group">
                    <label htmlFor="rol">Rol</label>
                    <select
                      id="rol"
                      value={data.rol}
                      onChange={(e) => handle(e)}
                      className="form-control input-lg"
                    >
                      <option>Seleccione una opci??n:</option>
                      {rol.map((item, i) => (
                        <option key={item.id} value={item.perfil}>
                          {item.perfil}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
              </div>
            </fieldset>
            
            <div className="d-flex align-content-between flex-wrap p-2">
              <button type="submit" className="btn btn-success mr-2 ">
                Crear
              </button>
              <button
                onClick={onCancelar}
                type="submit"
                className="btn btn-danger "
              >
                Cancelar
              </button>
            </div>
          
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default CrearUsuario;
