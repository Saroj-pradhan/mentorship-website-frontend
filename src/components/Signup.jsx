import React, { useRef, useState, useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';
import axios from '../utils/Axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader'; // Update path if needed

function Signup() {
  const navigate = useNavigate();


  const [loading, setLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const universityRef = useRef();
  const courseRef = useRef();
  const passwordRef = useRef();
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      name: nameRef.current.value,
      id: emailRef.current.value,
      university: universityRef.current.value,
      course: courseRef.current.value,
      password: passwordRef.current.value,
     
    };

    try {
      const response = await axios.post('/user/signup', userData); // adjust endpoint
      setLoading(false);
      toast.success(response.data.message || "Signup successful!");
     
      // setTimeout(() => {
      //   navigate('/login');
      // }, 2000);
         navigate('/login');  
    } catch (error) {
      setLoading(false);
      if (error.response) {
        toast.error(error.response.data.message || "Signup failed!");
      } else {
        toast.error("No response from server.");
      }
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
      <ToastContainer />
      <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-1">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              ref={nameRef}
              placeholder="John Doe"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

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
            <label className="block text-sm font-semibold text-gray-600 mb-1">University</label>
            <input
              type="text"
              ref={universityRef}
              placeholder="VSSUT Burla"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Course</label>
            <input
              type="text"
              ref={courseRef}
              placeholder="MCA, B.Tech, etc."
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
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account? <a href="/login" className="text-blue-700 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;


