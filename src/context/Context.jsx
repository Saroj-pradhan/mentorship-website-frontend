import {createContext, useEffect, useState} from 'react';
import axios from '../utils/Axios'
export const datacont = createContext();
function Context(props){
   
  const [user, setuser] = useState("");
  const [utoken, setutoken] = useState("");
  const [isloggedin, setlogin] = useState(false);
 
  const [mentor ,setmentor] = useState([]);
   
    useEffect(()=>{
      const afterrefresh = sessionStorage.getItem("usertoken");
      const userid = sessionStorage.getItem("userid") ;
      if(userid){
        setuser(userid)
      }
      if (afterrefresh) {
        setlogin(true);
        setutoken(afterrefresh);  
      }
    },[])
return(
  <>
  <datacont.Provider value={{user, setuser, isloggedin, setlogin, utoken, setutoken ,mentor ,setmentor}}>
    {props.children}
  </datacont.Provider>
  </>
)
}
export default  Context ;