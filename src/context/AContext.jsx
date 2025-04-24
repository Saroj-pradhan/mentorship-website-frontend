import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
export const  Admincont = createContext();
const AContext =({children})=>{
    const [alumni,setalumni] = useState("");
    const [isadlogin,setadlogin] = useState(false);
    const [atoken, setatoken] = useState("");
    const [student,setstudent] = useState([]);
    useEffect(()=>{
        const alumniid = sessionStorage.getItem("alumniid");
        alumniid?setalumni(alumniid):"";
           const admintoken =   sessionStorage.getItem("admintoken");
   admintoken?setadlogin(true):setadlogin(false);
    },[])
return(
    <div>
        <Admincont.Provider value={{isadlogin,setadlogin ,atoken, setatoken,student,setstudent,alumni,setalumni}}>

            {children}
        </Admincont.Provider>
    </div>
)
}
export default AContext;