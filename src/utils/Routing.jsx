import {Routes,Route } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
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

function Routing(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Landingpage/>}/>
            <Route path="/signup" element={<Signup/>} />
             <Route path="/login" element={<Login/>}/>
           <Route path="/Landingpage" element={<ProtectedRoute><Landingpage/></ProtectedRoute>}></Route>
           {/* alumine */}
           <Route path="/alumni" element={<AHomepage/>}/>
            <Route path="/asignup" element={<ASignup/>} />
             <Route path="/alogin" element={<ALogin/>}/>
             <Route path="/mentors" element={<ProtectedRoute><Mentor/></ProtectedRoute>}/>
             <Route path="/community" element={<ProtectedRoute><Community/></ProtectedRoute>}/>
             <Route path="/mentor/:id" element={<Profile />} />
       </Routes>
        </>
    )
}
export default Routing ;