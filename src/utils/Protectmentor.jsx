import React, { useContext, useEffect } from 'react'
import { Admincont } from '../context/AContext'
import { useNavigate } from 'react-router-dom';
function Protectmentor({children}) {
    const {isadlogin,setadlogin} = useContext(Admincont);
    const nevigate = useNavigate();
    useEffect(()=>{
        console.log(isadlogin);
        
   if(!isadlogin){
    nevigate("/alogin");
   }
    },[isadlogin])
    
     if(isadlogin){
       return <> {children} </>
     }
  return (
    <div>
       <p>you are not logged in</p>
    </div>
  )
}

export default Protectmentor