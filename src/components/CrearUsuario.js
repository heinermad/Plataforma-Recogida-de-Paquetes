import React from "react";

export function CrearUsuario() {
  return (
    <div>
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
                      className="form-control"
                      placeholder=""
                      id="fecha_nac"
                      required
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
                    />
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
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="genero">Género</label>
                    <select name="genero" className="form-control" id="genero">
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
        </div>
      </div>
    </div>
  );
}

export default CrearUsuario;
