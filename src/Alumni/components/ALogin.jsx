import React, { useRef, useState, useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from '../../utils/Axios';
import { toast, ToastContainer } from 'react-toastify';

import Loader from '../../components/Loader';
import { Admincont } from '../../context/AContext';


function ALogin() {
  const navigate = useNavigate();
  const {isadlogin,setadlogin ,atoken, setatoken} = useContext(Admincont);
  
  const emailRef = useRef();
  const passwordRef = useRef();
  
  function handleLogin(e) {
    e.preventDefault();
    
    axios
      .post("/admin/login", {
        id: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        toast.success(res.data.message);
        const token = res.data.token;
        setatoken(token);
        
        console.log(res.headers);
         setadlogin(true);
        sessionStorage.setItem("admintoken", token);
        navigate("/alumni");
        console.log("Stored Token:", sessionStorage.getItem("usertoken"));
      })
      .catch((error) => {
        console.log(error);
        
        console.log(error.response.data);
           toast.error(error.response.data);
      });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br bg-[#060D1F] flex items-center justify-center">
      <ToastContainer />
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Alumni Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
            <input
              type="email"
              ref={emailRef}
              placeholder="john@example.com"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Password</label>
            <input
              type="password"
              ref={passwordRef}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          Don't have an account? <a href="/signup" className="text-blue-700 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default ALogin;