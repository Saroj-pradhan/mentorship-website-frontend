import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { datacont } from '../context/Context';
import { Admincont } from '../context/AContext';

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();

  const [showSignupOptions, setShowSignupOptions] = useState(false);
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const { isloggedin, setlogin, setutoken } = useContext(datacont);
  const { isadlogin, setadlogin } = useContext(Admincont);

  useEffect(() => {
    setShowSignupOptions(false);
    setShowLoginOptions(false);
  }, [location]);

  const handleLogout = () => {
    setlogin(false);
    setadlogin(false);
    sessionStorage.removeItem("admintoken");
    sessionStorage.removeItem("alumniid");
    sessionStorage.removeItem("usertoken");
    sessionStorage.removeItem("userid");
    navigate('/'); // Redirect to home or login
  };

  return (
    <nav className="bg-white shadow w-full fixed z-50  ">
      <div className="px-4 ">
        <div className="flex justify-between items-center py-4">
          {/* Left Section: M-connect */}
          <div className="text-xl font-bold text-indigo-600">M-connect</div>

          {/* Middle Section */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-indigo-600          font-bold ">Home</Link>
            <Link to="/mentors" className="text-gray-700 hover:text-indigo-600   font-bold ">Mentor</Link>
            <Link to="/student" className="text-gray-700 hover:text-indigo-600   font-bold ">Student</Link>
            <Link to="/community" className="text-gray-700 hover:text-indigo-600 font-bold ">Community</Link>
          </div>

          {/* Right Section */}
          <div className="flex m-1 gap-4 items-center">
            {isloggedin || isadlogin ? (
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Logout
              </button>
            ) : (
              <>
                <div className="relative">
                  <button
                    className="text-gray-700 hover:text-green-600 font-semibold focus:outline-none"
                    onClick={() => setShowSignupOptions(!showSignupOptions)}
                  >
                    Sign Up
                  </button>
                  {showSignupOptions && (
                    <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
                      <Link to="/signup" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Student</Link>
                      <Link to="/asignup" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Alumni</Link>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button
                    className="text-gray-700 hover:text-blue-600 font-semibold focus:outline-none"
                    onClick={() => setShowLoginOptions(!showLoginOptions)}
                  >
                    Login
                  </button>
                  {showLoginOptions && (
                    <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
                      <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Student</Link>
                      <Link to="/alogin" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Alumni</Link>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
