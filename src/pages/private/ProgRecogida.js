import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import MyToast from "./MyToast";
import { render } from "@testing-library/react";
import AuthContext from "../../context/AuthContext";

export function ProgRecogida() {
  const { auth, handleAuth } = useContext(AuthContext);

  const recovery= JSON.parse(localStorage.getItem("tasks"));
  const delicado = [
    {
      id: 1,
      delicado: "Si",
    },
    {
      id: 2,
      delicado: "No",
    },
  ];

  const initialState1 = {
    estado: "",
    fechaSalida: "",
    fechaEntrega: "",
    numDocRemit: recovery.numDocRemit,
    nombreRemit:recovery.nombreRemit,
    apellidosRemit: recovery.apellidosRemit,
    fechaRecogida: "",
    direccionRemit: recovery.direccionRemit,
    barrioRemit: "",
    ciudadOrigen: "",
    departamentoRemit: "",
    hora: "",
    largo: "",
    ancho: "",
    alto: "",
    pesoAprox: "",
    delicado: "",
    numDocDest: "",
    nombreDest: "",
    apellidosDest: "",
    direccionDest: "",
    barrioDest: "",
    ciudadDest: "",
    departamentoDest: ""
  };

  const [initialState, setInitialState] = useState([]);
  const [data, setData] = useState(initialState1);
  const [authData, setAuthData] = useState([]);

  const onLimpiar = async (e) => {
    setData(initialState1);
  };

  useEffect(() => {
      
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const nuevaRecogida = {
      estado: "",
      fechaSalida: "",
      fechaEntrega: "",
      numDocRemit: data.numDocRemit,
      nombreRemit: data.nombreRemit,
      apellidosRemit: data.apellidosRemit,
      fechaRecogida: data.fechaRecogida,
      direccionRemit: recovery.direccionRemit,
      barrioRemit: data.barrioRemit,
      ciudadOrigen: data.ciudadOrigen,
      departamentoRemit: data.departamentoRemit,
      hora: data.hora,
      largo: data.largo,
      ancho: data.ancho,
      alto: data.alto,
      pesoAprox: data.pesoAprox,
      delicado: data.delicado,
      numDocDest: data.numDocDest,
      nombreDest: data.nombreDest,
      apellidosDest: data.apellidosDest,
      direccionDest: data.direccionDest,
      barrioDest: data.barrioDest,
      ciudadDest: data.ciudadDest,
      departamentoDest: data.departamentoDest,
    };
  console.log('en el submit ', data);

    axios
      .post("https://plataforma-recogida-de-paquete.herokuapp.com/envios" , nuevaRecogida)
      .then((res) => {
        console.log(res);
        console.log("La respuesta: " + res.data);
        if (res.data === "si") {
          setData(initialState1);
          render(<MyToast exito="si" />);
        } else {
          render(<MyToast exito="no" mensajeError="No se pudo programar la recogida" />);
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

 
  console.log('EL Initial ', data);

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Programar recogida</h1>
      </div>
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="col-lg-12 col-xl-12 col-md-12 mb-4">
          <form onSubmit={onSubmit}>
            <fieldset className="border p-2 rounded">
              <legend className="w-auto">
                <small>Información del Remitente</small>
              </legend>
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="numDocRemit">Doc No.</label>
                    <input
                      type="number"
                      name="numDocRemit"
                      id="numDocRemit"
                      value={recovery.numDocRemit}
                      className="form-control"
                      disabled
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="nombreRemit">Nombre(s)</label>
                    <input
                      type="text"
                      name="nombreRemit"
                      id=""
                      value={recovery.nombreRemit}
                      className="form-control"
                      disabled
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="apellidosRemit">Apellidos</label>
                    <input
                      type="text"
                      name="apellidosRemit"
                      id=""
                      value={recovery.apellidosRemit}
                      className="form-control"
                      disabled
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="direccionRemit">Dirección de recogida</label>
                    <input
                      type="text"
                      name="direccionRemit"
                      id="direccionRemit"
                      value={recovery.direccionRemit}
                      className="form-control"
                      disabled
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group" id="obj1">
                    <label htmlFor="barrioRemit">Barrio</label>
                    <input
                      required
                      type="text"
                      name="barrioRemit"
                      className="form-control"
                      id="barrioRemit"
                      value={data.barrioRemit}
                      placeholder="Ingrese el barrio....."
                      onChange={(e) => handle(e)}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="departamentoRemit">Departamento</label>
                    <input
                      type="text"
                      name="departamentoRemit"
                      id="departamentoRemit"
                      value={data.departamentoRemit}
                      className="form-control"
                      onChange={(e) => handle(e)}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="ciudadOrigen">Ciudad</label>
                    <input
                      type="text"
                      name="ciudadOrigen"
                      id="ciudadOrigen"
                      value={data.ciudadOrigen}
                      className="form-control"
                      onChange={(e) => handle(e)}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="fechaRecogida">Fecha Recogida</label>
                    <input
                      type="date"
                      name="fechaRecogida"
                      className="form-control"
                      placeholder="Stock..."
                      id="fechaRecogida"
                      value={data.fechaRecogida}
                      required
                      onChange={(e) => handle(e)}
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="hora">Hora</label>
                    <input
                      type="time"
                      name="hora"
                      id="hora"
                      value={data.hora}
                      className="form-control"
                      onChange={(e) => handle(e)}
                    />
                  </div>
                </div>

                <div className="col-xs-12 col-md-4 col-sm-6 ">
                  <div className="form-group">
                    <label htmlFor="">Dimensiones (cm)</label>
                    <div className="input-group">
                      <input
                        name="largo"
                        id="largo"
                      value={data.largo}
                      type="number"
                        required
                        className="form-control"
                        placeholder="Largo"
                        onChange={(e) => handle(e)}
                      />
                      <span className="input-group-addon"> X </span>
                      <input
                        name="ancho"
                        id="ancho"
                      value={data.ancho}
                      type="number"
                        required
                        className="form-control"
                        placeholder="Ancho"
                        onChange={(e) => handle(e)}
                      />
                      <span className="input-group-addon"> X </span>
                      <input
                        name="alto"
                        id="alto"
                      value={data.alto}
                      type="number"
                        required
                        className="form-control"
                        placeholder="Alto"
                        onChange={(e) => handle(e)}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="pesoAprox">Peso aprox.(kg)</label>
                    <input
                      type="number"
                      name="pesoAprox"
                      id="pesoAprox"
                      value={data.pesoAprox}
                      className="form-control"
                      onChange={(e) => handle(e)}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-1">
                  <div className="form-group">
                    <label htmlFor="delicado">Delicado</label>
                    <select
                      id="delicado"
                      value={data.delicado}
                      onChange={(e) => handle(e)}
                      className="form-control input-lg"
                    >
                      <option>Seleccione una opción:</option>
                      {delicado.map((item, i) => (
                        <option key={item.id} value={item.delicado}>
                          {item.delicado}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="border p-2 rounded">
              <legend className="w-auto">
                <small>Información del destinatario</small>
              </legend>
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="numDocDest">Doc No.</label>
                    <input
                      type="number"
                      name="numDocDest"
                      id="numDocDest"
                      value={data.numDocDest}
                      className="form-control"
                      onChange={(e) => handle(e)}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="nombreDest">Nombre(s)</label>
                    <input
                      type="text"
                      name="nombreDest"
                      id="nombreDest"
                      value={data.nombreDest}
                      className="form-control"
                      onChange={(e) => handle(e)}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="apellidosDest">Apellidos</label>
                    <input
                      type="text"
                      name="apellidosDest"
                      id="apellidosDest"
                      value={data.apellidosDest}
                      className="form-control"
                      onChange={(e) => handle(e)}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="direccionDest">Dirección env.</label>
                    <input
                      type="text"
                      name="direccionDest"
                      id="direccionDest"
                      value={data.direccionDest}
                      className="form-control"
                      onChange={(e) => handle(e)}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group" id="obj1">
                    <label htmlFor="barrioDest">Barrio</label>
                    <input
                      required
                      type="text"
                      name="barrioDest"
                      className="form-control"
                      id="barrioDest"
                      value={data.barrioDest}
                      placeholder="Ingrese el barrio....."
                      onChange={(e) => handle(e)}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="departamentoDest">Departamento</label>
                    <input
                      type="text"
                      name="departamentoDest"
                      id="departamentoDest"
                      value={data.departamentoDest}
                      className="form-control"
                      onChange={(e) => handle(e)}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="ciudadDest">Ciudad</label>
                    <input
                      type="text"
                      name="ciudadDest"
                      id="ciudadDest"
                      value={data.ciudadDest}
                      className="form-control"
                      onChange={(e) => handle(e)}
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            <div className="d-flex align-content-between flex-wrap p-2">
              <button type="submit" className="btn btn-success mr-2 ">
                Programar
              </button>
              <button
                type="submit"
                className="btn btn-danger "
                onClick={onLimpiar}
              >
                Limpiar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProgRecogida;
