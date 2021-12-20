import { createContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const AuthProvider = ({children})=>{
    
    const [auth, setAuth] = useState({bandera:false,name:''});
    const navigate = useNavigate();

   

    const handleAuth = (band)=>{
        navigate('/');
        setAuth(band);
       
    }
    
    const data = {auth, handleAuth};

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export {AuthProvider};
export default AuthContext;