import { createContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const AuthProvider = ({children})=>{
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        const val = (JSON.parse(localStorage.getItem('tasks')));

//La razon de este if es porque cuando obtenemos datos del LS, este viene desde un JSON lo cual se parsea como un String
//Pero para mi caso lo quiero como un boolean
        if (val ) return val;
        else return '';
    });
    const handleAuth = (band)=>{
        
        
        //setAuth(band)
        navigate('/')
        window.location.reload();
        localStorage.setItem("tasks", JSON.stringify(band));
        setAuth(JSON.parse(localStorage.getItem("tasks")))
        
    }
    
    const data = {auth, handleAuth};

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export {AuthProvider};
export default AuthContext;