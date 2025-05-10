import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
export const  Admincont = createContext();
import axios from '../utils/Axios'
const AContext =({children})=>{
    
  const [mentor ,setmentor] = useState([]);
    const [alumni,setalumni] = useState("");
    // const [isadlogin,setadlogin] = useState(false);
    const [isadlogin, setadlogin] = useState(() => {
        const admintoken = sessionStorage.getItem("admintoken");
        return admintoken ? true : false;
      });
    const [atoken, setatoken] = useState("");

    useEffect(()=>{
        axios.get('/admin/getadmins')
              .then((res) => {
                console.log('Admin List:', res.data);
                setmentor(res.data);
                console.log(alumni);
              })
              .catch((err) => {
                console.error('Error fetching admin list:', err);
              });
        const alumniid = sessionStorage.getItem("alumniid");
        alumniid?setalumni(alumniid):"";
//            const admintoken =   sessionStorage.getItem("admintoken");
//    admintoken?setadlogin(true):setadlogin(false);
    },[])
return(
    <div>
        <Admincont.Provider value={{isadlogin,setadlogin ,atoken, setatoken,alumni,setalumni,mentor ,setmentor}}>

            {children}
        </Admincont.Provider>
    </div>
)
}
export default AContext;