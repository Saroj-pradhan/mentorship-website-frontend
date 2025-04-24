import React, { useContext, useEffect } from 'react';
import { datacont } from '../context/Context';
import {Admincont} from '../context/AContext' 
import axios from '../utils/Axios';
import { useNavigate } from 'react-router-dom';


function Mentor() {
  const { mentor, setmentor } = useContext(datacont);
  const {alumni} = useContext(Admincont);
  const navigate = useNavigate();
  

  useEffect(() => {
    axios.get('/admin/getadmins')
      .then((res) => {
        console.log('Admin List:', res.data);
        setmentor(res.data);
        console.log(alumni);
      })
      .catch((err) => {
        console.error('Error fetching admin list:', err);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Mentors You May Know</h2>
      {mentor && mentor.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mentor.map((m) => (
           (m.id !== alumni)?( <div
            key={m._id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition relative p-4 flex flex-col items-center text-center cursor-pointer"
            onClick={() => navigate(`/mentor/${m._id}`)}
          >
            

            {/* Profile Picture */}
            <img
              src={m.profilePic || 'https://via.placeholder.com/80?text=Img'}
              alt={m.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-white shadow mb-3"
            />

            {/* Name and Role */}
            <h3 className="text-lg font-semibold">{m.name}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {m.company ? `${m.role || 'Software Engineer'} at ${m.company}` : 'Mentor'}
            </p>

            {/* Mutual Connections (Placeholder) */}
            <p className="text-xs text-gray-500 mt-2">
              You and 4 others follow {m.name.split(' ')[0]}
            </p>

            {/* Connect button */}
            <button
              className="mt-4 px-4 py-2 text-sm border border-blue-500 text-blue-600 rounded-full font-medium hover:bg-blue-50"
            >
              <span className="mr-1">👤+</span> Connect
            </button>
          </div>):("")
          ))}
        </div>
      ) : (
        <p>Loading mentors or no mentor data available...</p>
      )}
    </div>
  );
}

export default Mentor;


