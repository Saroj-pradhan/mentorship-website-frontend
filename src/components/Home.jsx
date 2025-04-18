import {useContext ,useEffect } from 'react';
import {Link , useNavigate} from 'react-router-dom'
import HomePage from './Homepage';
// import Context from '../context'

import { datacont } from '../context/Context';
function Home(){
  const navigate = useNavigate();
  
   
      const { isloggedin, utoken, setutoken, setlogin } = useContext(datacont);
  useEffect(()=>{
    
    if(isloggedin){
      navigate("/Landingpage");
    }
    
   },[isloggedin])
    return(
        <>
        <div className="test bg-blue-900">
          {/* home */}
          <HomePage></HomePage>
       {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {/* Section 1: Job Referrals */}
      <div className="bg-gray-100 rounded-lg shadow-md p-6">
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
        </>
    )
}
export default Home;