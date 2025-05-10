import {createContext, useEffect, useState} from 'react';
import axios from '../utils/Axios'
export const datacont = createContext();
function Context(props){
       const [student,setstudent] = useState([]);
  const [user, setuser] = useState("");
  const [utoken, setutoken] = useState("");
  const [isloggedin, setlogin] = useState(false);
 
   
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
  <datacont.Provider value={{user, setuser, isloggedin, setlogin, utoken, setutoken,student,setstudent }}>
    {props.children}
  </datacont.Provider>
  </>
)
}
export default  Context ;