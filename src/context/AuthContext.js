import { createContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const AuthProvider = ({children})=>{
    
    const [auth, setAuth] = useState({bandera:false,usuario: null});
    const navigate = useNavigate();

   

    const handleAuth = (band)=>{
        navigate('/');
        //setAuth(band);
        localStorage.setItem("tasks", JSON.stringify(band));
        setAuth(JSON.parse(localStorage.getItem("tasks")))
    }
    
    const data = {auth, handleAuth};

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export {AuthProvider};
export default AuthContext;