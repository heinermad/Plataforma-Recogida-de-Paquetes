import { useContext } from 'react';
import { AuthRouter } from './routers/AuthRouter';
import { UnauthRouter } from './routers/UnauthRouter';
import AuthContext from './context/AuthContext';

function App() {
  let elemento=null;
  const { auth } = useContext(AuthContext);
   
  

  if (!auth ) 
   {
       elemento=<UnauthRouter/>;   
  
   }else {
    elemento=<AuthRouter/>; 
   }
      
   
  return (
    <div >   
      { elemento }
  </div>
  );
}

export default App;
