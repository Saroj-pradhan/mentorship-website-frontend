import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
export const  Admincont = createContext();
const AContext =({children})=>{
    const [isadlogin,setadlogin] = useState(false);
    const [atoken, setatoken] = useState("");
    useEffect(()=>{
           const admintoken =   sessionStorage.getItem("admintoken");
   admintoken?setadlogin(true):setadlogin(false);
    },[])
return(
    <div>
        <Admincont.Provider value={{isadlogin,setadlogin ,atoken, setatoken}}>

            {children}
        </Admincont.Provider>
    </div>
)
}
export default AContext;