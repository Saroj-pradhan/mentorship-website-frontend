// import React,{useContext, useEffect} from 'react'
// import {datacont} from '../context/Context'
// import {useNavigate} from 'react-router-dom';
// function ProtectedRoute({children}) {
//     const nevigate = useNavigate();
//   const {isloggedin,setlogin} = useContext(datacont);
//   console.log(isloggedin);
//   useEffect(()=>{
// console.log(isloggedin);
// if(!isloggedin){
//   nevigate("/");
// }
//   },[isloggedin])
//   return (
//     <>
//         {isloggedin?children:<p>not signed  - protected route</p>}
//     </>
//   )
// }

// export default ProtectedRoute

import React, { useContext, useEffect } from 'react';
import { datacont } from '../context/Context';
import { Admincont } from '../context/AContext'; // assuming your admin context is exported here
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isloggedin } = useContext(datacont);
  const { isadlogin } = useContext(Admincont);

  useEffect(() => {
    // If neither user nor admin is logged in, redirect to home
    if (!isloggedin && !isadlogin) {
     
      navigate('/login');
    }
  }, [isloggedin, isadlogin, navigate]);

  // If either is true, allow access
  if (isloggedin || isadlogin) {
    return <>{children}</>;
  }

  return <p className="text-center text-red-600 mt-10">Access Denied - Protected Route</p>;
}

export default ProtectedRoute;
