import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-[#060D1F] min-h-screen w-full flex flex-col md:flex-row text-white px-6 py-10 md:px-20">
      {/* Left Side */}
      <div className="md:w-1/2  flex flex-col justify-center mb-4 md:mb-0">
        <h1 className="text-4xl w-80 h-80 mt-4 md:text-5xl font-bold leading-tight">
          Your one stop solution {' '}
          <span className="text-blue-500"> to connect with alumni  </span>
        </h1>
       
        <div className="mt-3 w-32 h-1 bg-blue-500 rounded-full"></div>
        <Link to="/mentors" className=""><button className='w-40 mt-7 py-4  bg-yellow-800'> get started </button></Link>
        
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1 */}
        <Link to="/community" className="bg-[#E6FFF5] text-black rounded-xl p-6 shadow-lg flex flex-col justify-between hover:scale-105 transition-transform">
          <div>
            <h3 className="text-xl font-bold">Community</h3>
            <p className="text-sm mt-2">Connect with 1 Lakh+ peers</p>
          </div>
          <img src="/images/community.png" alt="Community" className="mt-4 w-24 self-end" />
        </Link>

        {/* Card 2 */}
        <Link to="/ask" className="bg-[#FFE6F4] text-black rounded-xl p-6 shadow-lg flex flex-col justify-between hover:scale-105 transition-transform">
          <div>
            <h3 className="text-xl font-bold">Ask Anything</h3>
            <p className="text-sm mt-2">& we find you a mentor!</p>
          </div>
          <img src="/images/ask-anything.png" alt="Ask Anything" className="mt-4 w-24 self-end" />
        </Link>

        {/* Card 3 */}
        <Link to="/mentors" className="bg-[#FFF2DC] text-black rounded-xl p-6 shadow-lg flex flex-col justify-between hover:scale-105 transition-transform">
          <div>
            <h3 className="text-xl font-bold">Mentors</h3>
            <p className="text-sm mt-2">300+ Mentors, 5000+ Queries Resolved</p>
          </div>
          <img src="/images/mentors.png" alt="Mentors" className="mt-4 w-24 self-end" />
        </Link>

        {/* Card 4 */}
        <Link to="/growth" className="bg-[#E5E9FF] text-black rounded-xl p-6 shadow-lg flex flex-col justify-between hover:scale-105 transition-transform">
          <div>
            <h3 className="text-xl font-bold">Growth</h3>
            <p className="text-sm mt-2">Track your learning and upskill journey</p>
          </div>
          <img src="/images/growth.png" alt="Growth" className="mt-4 w-24 self-end" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;