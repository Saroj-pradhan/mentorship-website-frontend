
import React, { useContext, useEffect } from 'react';
import { datacont } from '../context/Context';
import { Admincont } from '../context/AContext'; // assuming your admin context is exported here
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isloggedin } = useContext(datacont);
  const { isadlogin } = useContext(Admincont);

  useEffect(() => {
  const checkstudentlogin = sessionStorage.getItem("userid");
   const checkmentorlogin = sessionStorage.getItem("alumniid");
   console.log(checkstudentlogin);
   console.log(checkmentorlogin);
   
   
   
     if (!checkstudentlogin && !checkmentorlogin) {
     
      navigate('/login');

    }
 
      
  }, [isloggedin, isadlogin]);

  // If either is true, allow access
  if (isloggedin || isadlogin) {
    return <>{children}</>;
  }

  return <p className="text-center text-red-600 mt-10">Access Denied - Protected Route</p>;
}

export default ProtectedRoute;
