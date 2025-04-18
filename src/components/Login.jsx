import React, {useState, useRef, useContext } from 'react';
import { datacont } from '../context/Context';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/Axios';
import { toast, ToastContainer } from 'react-toastify';
import Loader from './Loader';

function Login() {
  const navigate = useNavigate();
  const { isloggedin, utoken, setutoken, setlogin } = useContext(datacont);
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  
  function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/user/login", {
        id: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        setLoading(false);
        toast.success(res.data.message);
        const token = res.data.token;
        setutoken(token);
        
        console.log(res.headers);
        setlogin(true);
        sessionStorage.setItem("usertoken", token);
        navigate("/Landingpage");
        console.log("Stored Token:", sessionStorage.getItem("usertoken"));
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
    
        console.log(error.response.data);
           toast.error(error.response.data);
      });
    
  }

  return (
    <div className="min-h-screen bg-gradient-to-br bg-[#060D1F] flex items-center justify-center">
      <ToastContainer />
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Student Login</h2>
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

export default Login;
