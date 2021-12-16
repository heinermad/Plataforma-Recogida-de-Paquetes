import React from "react";
import {useState, useContext} from 'react';
import axios from 'axios';

export function Login() {

  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [loginError,setLoginError] = useState(false);


  function loginUser(e) {
    e.preventDefault();

    axios.get('http://localhost:4000/logins/' + usuario  + '/' +  password)
    .then(response => {
      setLoginError(response.data);
      

    })
    
    console.log('LOs datos on loginError dentro de login User: ',loginError);
    
        
    
      
  }
  console.log('LOs datos con loginError más afuera: ',loginError);
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
                    <form className="user" action="" onSubmit={e => loginUser(e)}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="usuario"
                          aria-describedby="usuario"
                          placeholder="Nombre de usuario aquí..."
                          value={usuario} 
                          onChange={e => setUsuario(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="clave"
                          placeholder="Ahora la contraseña"
                          value={password} 
                          onChange={e => setPassword(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
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