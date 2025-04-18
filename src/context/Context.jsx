import {createContext, useEffect, useState} from 'react';
import axios from '../utils/Axios'
export const datacont = createContext();
function Context(props){
   
  const [user, setuser] = useState("");
  const [utoken, setutoken] = useState("");
  const [isloggedin, setlogin] = useState(false);
 
  const [mentor ,setmentor] = useState([]);
    function afterlogrun() {
      console.log("succesfully");
      // setuser("hi");
      // axios
      //   .get("/user/getquiz", {
      //     headers: {
      //       token: `Bearer ${utoken}`, // Send token in headers
      //     },
          
      //   })
      //   .then((res) => {
      //     setuser(res.data.message);
      //     console.log(res.data.message);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
    useEffect(()=>{
      const afterrefresh = sessionStorage.getItem("usertoken");
      if (afterrefresh) {
        setlogin(true);
        setutoken(afterrefresh);  
      }
    },[])
    useEffect(() => {
      if(isloggedin){
      afterlogrun();
      }
    }, [ isloggedin]);
return(
  <>
  <datacont.Provider value={{user, setuser, isloggedin, setlogin, utoken, setutoken ,mentor ,setmentor}}>
    {props.children}
  </datacont.Provider>
  </>
)
}
export default  Context ;