import {useContext ,useEffect, useState } from 'react';
import {Link , useNavigate} from 'react-router-dom'
import HomePage from './Homepage';
import Loader from './Loader';
import { datacont } from '../context/Context';
function Home(){
  const navigate = useNavigate();
  
   const[loading,setloading] = useState(false);
      const { isloggedin, utoken, setutoken, setlogin } = useContext(datacont);
  useEffect(()=>{
    
    if(isloggedin){
      navigate("/");
    }
    
   },[isloggedin])
    return(
        <>
        <div className="">
          {/* home */}
          <HomePage></HomePage>
       {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pt-11">
      {/* Section 1: Job Referrals */}
      <div className="bg-gray-100 rounded-lg shadow-md p-6 ">
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-800 mr-2">Job Referrals</h3>
          <span role="img" aria-label="globe">🌐</span>
        </div>
        <p className="text-gray-600 text-sm">Long Term Mentorship also offers exclusive job referrals. Elevate your journey with personalized mentorship and direct access to exciting career opportunities. <span role="img" aria-label="sparkles">✨</span></p>
      </div>

      {/* Section 2: Personalized Goal Setting */}
      <div className="bg-gray-100 rounded-lg shadow-md p-6">
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-800 mr-2">Personalized Goal Setting</h3>
          <span role="img" aria-label="rocket">🚀</span>
        </div>
        <p className="text-gray-600 text-sm">Collaborate with your ProPeer to define and act on personalized career goals. Receive guidance on creating a roadmap for professional growth, skill acquisition, and achieving milestones. <span role="img" aria-label="target">🎯</span></p>
      </div>

      {/* Section 3: Audio/Video Session with ProPeer */}
      <div className="bg-gray-100 rounded-lg shadow-md p-6">
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-800 mr-2">Audio Session with ProPeer</h3>
        </div>
        <p className="text-gray-600 text-sm">Elevate your mentorship experience with personalized audio or video sessions, fostering in-depth discussions on career strategies, skill development, and goal achievement. <span role="img" aria-label="microphone">🎤</span> <span role="img" aria-label="video camera">📹</span></p>
      </div>

      {/* Section 4: Unofficial Talk Sessions */}
      <div className="bg-gray-100 rounded-lg shadow-md p-6">
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-800 mr-2">Unofficial Talk Sessions</h3>
          <span role="img" aria-label="speech bubble">💬</span>
        </div>
        <p className="text-gray-600 text-sm">Enjoy informal discussions with your mentor, gaining insights into their experiences, industry knowledge, and valuable tips and fostering a more holistic learning experience. <span role="img" aria-label="light bulb">💡</span></p>
      </div>

      {/* Section 5: Resume Reviews */}
      <div className="bg-gray-100 rounded-lg shadow-md p-6">
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-800 mr-2">Resume Reviews</h3>
          <span role="img" aria-label="page with curl">📄</span> <span role="img" aria-label="check mark">✅</span>
        </div>
        <p className="text-gray-600 text-sm">Receive comprehensive feedback on your resume from your ProPeer mentor, ensuring that your professional document effectively showcases your skills and experiences, helping you stand out in the job market. <span role="img" aria-label="star">⭐</span></p>
      </div>

      {/* Section 6: Mock Interviews */}
      <div className="bg-gray-100 rounded-lg shadow-md p-6">
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-800 mr-2">Mock Interviews</h3>
          <span role="img" aria-label="person in suit levitating">🕴️</span> <span role="img" aria-label="handshake">🤝</span>
        </div>
        <p className="text-gray-600 text-sm">Boost Your Interview Confidence: Experience real-world scenarios with Mock Interviews, led by mentors, to enhance your skills for long-term growth.</p>
      </div>
    </div>
    
    {/* testin */}
    
    


        </div>

 <div className="bg-[#060D1F]">
     

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
        {/* Section 1: */}
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

        {/* Section 2: */}
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
          
          </div>
          <Link to="/mentors" className="text-indigo-600 hover:underline mt-2 block text-sm">Meet More Alumni</Link>
        </div>

     
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

        {/* Section 4:*/}
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

        {/* Section 5: */}
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

        {/* Section 6:*/}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Support Our poor students</h2>
          <p className="text-gray-700 mb-3">Give back to the institution that shaped your future. Your contributions help us support current students and enhance the university.</p>
          <p className="text-gray-700">Learn about ways to contribute through donations, volunteering, and mentorship programs.</p>
          <Link to="/support" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4 inline-block text-sm">Give Back</Link>
        </div>
      </main>
    </div>

 

    <footer className="bg-gray-900 text-white py-8 pt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
 
        <div>
          <h1 className="text-2xl font-bold text-blue-400">M-connect</h1>
          <p className="mt-2 text-sm text-gray-400">
            Your one-stop solution to connect with alumni & mentors.
          </p>
        </div>

  
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/mentors" className="hover:text-white">Mentor</a></li>
            <li><a href="/student" className="hover:text-white">Student</a></li>
            <li><a href="/community" className="hover:text-white">Community</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Email: support@mconnect.com</li>
            <li>Phone: +91 98765 43210</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex flex-col space-y-3">
            <a href="https://www.linkedin.com/in/saroj-pradhan-a10490240/" className="hover:text-blue-400">LinkedIn</a>
            <a href="https://x.com/_saroj_pradhan" className="hover:text-blue-400">Twitter</a>
            <a href="https://discord.com/channels/@me" className="hover:text-blue-400">Discord</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} M-connect. All rights reserved.
      </div>
    </footer>




        </>
    )
}
export default Home;