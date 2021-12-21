import React from 'react'
import Aside from  './Aside';
import Aside2 from  './Aside2';
export function Lateral() {
    const alm= JSON.parse(localStorage.getItem("tasks"));
  return (
    <div >   
      {alm.name==='Wilmer'  ? <Aside/>: <Aside2 />}
   </div>
      
    
  )
}

export default Lateral;