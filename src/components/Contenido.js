import React from 'react'
import ProgRecogida from './ProgRecogida';
import  ConfirmarRecogida from './ConfirmarRecogida';

export function Contenido(props) {
 
  let  d=props.contenidoPag;
  console.log(d);
  let componente=null;
  if(d==='otro'){
    componente=<ConfirmarRecogida />;
  }else{
   
    
    componente=<ProgRecogida />;
  }
  
  
  return (
      
      <div className="container-fluid">
        { componente }
      </div>
  );
}


export default Contenido;