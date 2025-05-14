import React, { useContext, useEffect } from 'react'
import { Admincont } from '../context/AContext'
import { useNavigate } from 'react-router-dom';
import { datacont } from '../context/Context';
function Protectmentor({children}) {
    const {isadlogin,setadlogin} = useContext(Admincont);
    const {isloggedin} = useContext(datacont);
    const nevigate = useNavigate();
    useEffect(()=>{
        console.log(isadlogin);
        
   if(!isadlogin && !isloggedin){
    nevigate("/alogin");
   }
    },[isadlogin,isloggedin])
    
     if(isadlogin || isloggedin){
       return <> {children} </>
     }
  return (
    <div>
       <p>you are not logged in</p>
    </div>
  )
}

export default Protectmentor