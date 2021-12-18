import { useContext, useState } from 'react';
import { AuthRouter } from './routers/AuthRouter';
import { UnauthRouter } from './routers/UnauthRouter';
import AuthContext from './context/AuthContext';

function App() {
  const {auth} = useContext(AuthContext);
  return (
    <div >   
      {auth? <AuthRouter/>: <UnauthRouter/>}
  </div>
  );
}

export default App;
