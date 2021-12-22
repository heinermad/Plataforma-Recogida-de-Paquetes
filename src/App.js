import { useContext, useState } from 'react';
import { AuthRouter } from './routers/AuthRouter';
import { UnauthRouter } from './routers/UnauthRouter';
import AuthContext from './context/AuthContext';

function App() {
  const {auth} = useContext(AuthContext);

  const alm= JSON.parse(localStorage.getItem("tasks"));
  /* console.log('var storage', alm) */
  return (
    <div >   
      { alm.bandera  ? <AuthRouter/>: <UnauthRouter/> }
  </div>
  );
}

export default App;
