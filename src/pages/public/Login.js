import AuthContext from "../../context/AuthContext";
import React, { useContext, useState } from "react";
import axios from "axios";

export function Login() {
  const { handleAuth } = useContext(AuthContext);
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");


  /* const handleNoticias = ()=>{
      navigate('/');
  } */

  function loginUser(e) {
    e.preventDefault();

    axios
      .get("https://plataforma-recogida-de-paquete.herokuapp.com/usuarios/logueo/" + usuario + "/" + password)
      .then((response) => {
        handleAuth({
          bandera: response.data.bandera,
          name: response.data.usuario.usuario,
          numDocRemit: response.data.usuario.numDoc,
          nombreRemit: response.data.usuario.nombre,
          apellidosRemit: response.data.usuario.apellidos,
          direccionRemit: response.data.usuario.direccion
        });
      });
  }
  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-10 col-md-6">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-3 d-none d-lg-block"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Iniciar sesión</h1>
                    </div>
                    <form className="user" onSubmit={(e) => loginUser(e)}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="usuario"
                          aria-describedby="usuario"
                          placeholder="Nombre de usuario aquí..."
                          onChange={(e) => setUsuario(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="clave"
                          placeholder="Ahora la contraseña"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <button className="btn btn-primary btn-user btn-block">
                        Ingresar
                      </button>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="forgot-password.html">
                        ¿Olvidó su contraseña?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="register.html">
                        Registrarse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
