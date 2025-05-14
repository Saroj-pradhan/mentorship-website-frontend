import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
const Landingpage= () => {
  return (
    
    <div className="bg-[#060D1F]">
       <Home></Home>

      <header className="container mx-auto px-4 mb-8 text-center  h-60  flex flex-col justify-center items-center ml-1 mr-1">
        <h1 className="text-4xl font-bold text-indigo-700 mb-2">Connect with Your Fellow Alumni</h1>
        <p className="text-lg text-gray-600">Reignite connections, share experiences, and build your network.</p>
        <div className="mt-6 ">
          <Link to="/mentors" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full mr-4">
            Find Alumni
          </Link>
          <Link to="/community" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full">
            Join Our Community
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-1 mr-1">
        {/* Section 1: Latest News & Events */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Latest News & Events</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Upcoming Alumni Meet - 20/04/2025</li>
            <li>[MCA] Innovation Workshop</li>
            <li>Alumni Success Story: [Saroj pradhan]</li>
            {/* Add more news items */}
          </ul>
          <Link to="/news" className="text-indigo-600 hover:underline mt-2 block text-sm ">View All News</Link>
        </div>

        {/* Section 2: Featured Alumni Profiles */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Featured Alumni</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740" alt="Alumni Profile 1" className="w-12 h-12 rounded-full mr-3 object-cover" />
              <div>
                <h3 className="text-md font-semibold text-gray-900">shankar lakra</h3>
                <p className="text-sm text-gray-600">iot Engineer</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740" alt="Alumni Profile 2" className="w-12 h-12 rounded-full mr-3 object-cover" />
              <div>
                <h3 className="text-md font-semibold text-gray-900">sagar maharana</h3>
                <p className="text-sm text-gray-600">Java developer</p>
              </div>
            </div>
            {/* Add more featured alumni */}
          </div>
          <Link to="/mentors" className="text-indigo-600 hover:underline mt-2 block text-sm">Meet More Alumni</Link>
        </div>

        {/* Section 3: Connect & Network */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Connect & Network</h2>
          <p className="text-gray-700 mb-3">Join groups based on your interests, department, or location. Expand your professional and personal network.</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Find alumni in your industry</li>
            <li>Join alumni interest groups</li>
            <li>Participate in online forums</li>
          </ul>
          <Link to="/mentors" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 inline-block text-sm">Explore Connections</Link>
        </div>

        {/* Section 4: Share Your Experiences */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Share Your Experiences</h2>
          <p className="text-gray-700 mb-3">Contribute to our community by sharing your career journey, insights, and advice for current students and fellow alumni.</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Submit your success story</li>
            <li>Offer mentorship opportunities</li>
            <li>Participate in discussions</li>
          </ul>
          <Link to="/community" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full mt-4 inline-block text-sm">Share Your Story</Link>
        </div>

        {/* Section 5: Alumni Resources */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Alumni Resources</h2>
          <p className="text-gray-700 mb-3">Access valuable resources to support your career development and personal growth.</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Career counseling services</li>
            <li>Job board for alumni</li>
            <li> university libraries </li>
          </ul>
          <Link to="/resources" className="text-indigo-600 hover:underline mt-2 block text-sm">Discover Resources</Link>
        </div>

        {/* Section 6: Support Our Alma Mater */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Support Our poor students</h2>
          <p className="text-gray-700 mb-3">Give back to the institution that shaped your future. Your contributions help us support current students and enhance the university.</p>
          <p className="text-gray-700">Learn about ways to contribute through donations, volunteering, and mentorship programs.</p>
          <Link to="/support" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4 inline-block text-sm">Give Back</Link>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-500 mt-12 border-t border-gray-200">
        <p>&copy; {new Date().getFullYear()} VSSUT Alumni Association</p>
        {/* Add more footer links if needed */}
      </footer>
    </div>
  );
};

export default Landingpage;