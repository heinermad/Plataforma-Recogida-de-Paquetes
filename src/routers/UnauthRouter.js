import { Route, Routes } from 'react-router';
import { Login } from '../pages/public/Login';
import { Home } from '../pages/public/Home';


export const UnauthRouter = () => {
  return (
    <Routes>
           
           <Route path="" element={<Home />}>
              <Route index path="login" element={<Login/>}/>
              

            </Route>
          <Route  path="*" element={<Login/>}/>
                
    </Routes>
  )
}


