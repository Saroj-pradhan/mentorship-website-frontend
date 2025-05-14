import {Routes,Route } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import Protectmentor from './Protectmentor';
import Landingpage from '../components/Landingpage';
import Home from '../components/Home';
import Signup from '../components/Signup'
import Login from '../components/Login'
import AHomepage from '../Alumni/components/AHomepage';
import ASignup from '../Alumni/components/ASignup';
import ALogin from '../Alumni/components/ALogin';
import Mentor from '../Alumni/Mentor';
import Community from './Community';
import Profile from '../Alumni/components/Profile';
import Student from '../components/Student';
import Mprofile from '../components/Mprofile';
import Smessage from '../components/Smessage';
import Rmessage from '../Alumni/components/Rmessage';
import Communitypost from './Communitypost';

function Routing(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>} />
             <Route path="/login" element={<Login/>}/>
           <Route path="/Landingpage" element={<ProtectedRoute><Landingpage/></ProtectedRoute>}></Route>
           {/* alumine */}
           <Route path="/alumni" element={<AHomepage/>}/>
            <Route path="/asignup" element={<ASignup/>} />
             <Route path="/alogin" element={<ALogin/>}/>
             <Route path="/mentors" element={<Mentor/>}/>
             <Route path="/student" element={<Student/>}/>
             <Route path="/student/:id" element={<ProtectedRoute><Mprofile/></ProtectedRoute>}/>
             <Route path="/community" element={<Community/>}/>
             <Route path="/communitypost" element={<ProtectedRoute><Communitypost/></ProtectedRoute>}/>
             <Route path="/mentor/:id" element={<Protectmentor><Profile /></Protectmentor>} />
             <Route path="/smessage/:id" element={<Smessage/>} />
             <Route path="/rmessage/:id" element={<Rmessage/>} />

       </Routes>
        </>
    )
}
export default Routing ;