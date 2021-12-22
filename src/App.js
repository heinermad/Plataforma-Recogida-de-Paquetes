import { AuthRouter } from './routers/AuthRouter';
import { UnauthRouter } from './routers/UnauthRouter';

function App() {

  const alm= JSON.parse(localStorage.getItem("tasks"));
  console.log('var storage', alm)
  return (
    <div >   
      { alm.bandera  ? <AuthRouter/>: <UnauthRouter/> }
  </div>

  );
}

export default App;
