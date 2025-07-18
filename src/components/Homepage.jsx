import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-[#060D1F]  w-full flex justify-between flex-col sm:flex-row h-fit pt-30  text-white px-6 py-20 md:px-20 ">
      {/* Left Side */}
      <div className=" min-h-fit  md:w-1/2  flex flex-col justify-center md:mb-1 ">
        <h1 className="text-4xl w-80  mt-1 md:text-5xl font-bold leading-tight mb-6">
          Your one stop solution <br></br>
          <span className="text-blue-500 "> to connect with alumni  </span>
        </h1>
       
        {/* <div className=" w-32 h-1 bg-blue-500 rounded-full"></div> */}
        <Link to="/mentors" className="mt-7 mb-7"><button className='w-40 mt-2 py-4 rounded bg-amber-500 text-black font-bold'> get started </button></Link>
        
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 min-h-fit grid grid-cols-2  gap-6 ">

      <Link to="/mentors" className="bg-[#FFF2DC] text-black rounded-xl p-6 shadow-lg  flex flex-col justify-between hover:scale-105 transition-transform max-h-15% sm:max-h-30%">
          <div>
            <h3 className="text-xl font-bold">Mentors</h3>
            <p className="text-sm mt-2">300+ Mentors, 5000+ Queries Resolved</p>
          </div>
          <p>Learn here ,lead anywhere</p>
        </Link>
        {/* Card 1 */}
        <Link to="/community" className="bg-[#E6FFF5] text-black rounded-xl p-6 shadow-lg flex flex-col justify-between hover:scale-105 transition-transform">
          <div>
            <h3 className="text-xl font-bold">Community</h3>
            <p className="text-sm mt-2">Connect with 1 Lakh+ peers</p>
          </div>
         <p>Community helps building Network</p>
        </Link>

        {/* Card 2 */}
        <Link to="/community" className="bg-[#FFE6F4] text-black rounded-xl p-6 shadow-lg flex flex-col justify-between hover:scale-105 transition-transform">
          <div>
            <h3 className="text-xl font-bold">Ask Anything</h3>
            <p className="text-sm mt-2">& we find you a mentor!</p>
          </div>
         <p>Mentor that helps you in upskilling</p>
        </Link>

        

        {/* Card 4 */}
        <Link to="/student" className="bg-[#E5E9FF] text-black rounded-xl p-6 shadow-lg flex flex-col justify-between hover:scale-105 transition-transform">
          <div>
            <h3 className="text-xl font-bold">Student</h3>
            <p className="text-sm mt-2">connect with Talented Students</p>
          </div>
         <p>Upskill your self </p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;