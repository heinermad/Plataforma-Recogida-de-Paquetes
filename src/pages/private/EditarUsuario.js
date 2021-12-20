import { React, useState, useEffect  } from "react";
import axios from "axios";
import MyToast from "./MyToast";

import { render } from "@testing-library/react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router';
export function EditarUsuario() {
  const generoArray=[{
    id:1,
    genero:"Masculino"},
    {
      id:2,
      genero:"Femenino"}
  ]
  const rol=[{
    id:1,
    perfil:"Administador"},
  {
    id:2,
    perfil:"Mensajero"},
    
  ]

  const navigate = useNavigate();
  const { id } = useParams();
  
  const array=id.split(',');
  
  const dir=array[2].replace(')','#');
  const onCancelar = async (e) => {
    navigate('/usuario');
  }
  
  /* const resFecha = array[3].split("-");
  const reversedFecha = resFecha.reverse(); 
  const FechaOb=reversedFecha.join('-'); */
  

  const initialState = {
    numDoc: array[4],
    nombre: array[0],
    apellidos: array[1],
    direccion: dir,
    fecha_nac: array[3] ,
    email: array[5],
    usuario: array[6],
    clave:  array[7],
    genero: array[8],
    rol:  array[9],
  };  
  
  const [data, setData] = useState(initialState);


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
      .put("http://localhost:4000/users/"+ data.numDoc , newUser)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data === "Usuario actualizado") {
          setData(initialState);
          render(<MyToast exito="actualizar" />);
          
          navigate('/usuario');
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
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Editar usuario</h1>
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
                      onChange={(e) => handle(e)}
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
                      onChange={(e) => handle(e)}
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
                      onChange={(e) => handle(e)}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="fecha_nac">Fecha Nac.</label>
                    <input
                      type="Date"
                      name="fecha_nac"
                      id="fecha_nac"
                      className="form-control"
                      value={ data.fecha_nac}
                      onChange={(e) => handle(e)}
                     
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
                      onChange={(e) => handle(e)}
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
                      onChange={(e) => handle(e)}
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
                      onChange={(e) => handle(e)}
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
                      onChange={(e) => handle(e)}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-1">
                    <div className="form-group">
                          <label htmlFor="genero">Género</label>
                        
                           <select   name="genero" id="genero" onChange={(e) => handle(e)} className="form-control input-lg">
                              <option value={ data.genero } >{ data.genero }</option>
                               {
                                generoArray.filter(item => item.genero !== data.genero)
                                .map(item=>(
                                 <option  key={item.id} value={item.genero} >{item.genero}</option>))
                               }
                            </select>
                         
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6 col-xs-1">
                    <div className="form-group">
                          <label htmlFor="Rol">Rol</label>
                        
                           <select id='rol' onChange={(e) =>  handle(e)} className="form-control input-lg">
                              <option >{data.rol}</option>
                               {
                                rol.filter(item=>item.perfil!==data.rol)
                                .map((item)=>(
                              <option  key={item.id} value={item.perfil} >{item.perfil}</option>
                              ))
                               }
                            </select>    
                    </div>
                  </div>
              </div>
            </fieldset>
            <div className="d-flex align-content-between flex-wrap p-2">
              <button type="submit" className="btn btn-success mr-2 ">
                Editar
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

export default EditarUsuario;
