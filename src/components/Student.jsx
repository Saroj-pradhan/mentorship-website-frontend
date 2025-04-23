import React, { useContext, useEffect } from 'react';
import { Admincont } from '../context/AContext';
import axios from '../utils/Axios';
import { useNavigate } from 'react-router-dom';

function Student() {
  const { student, setstudent } = useContext(Admincont);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/user/getstudents') // 👈 Adjust this endpoint as per your API
      .then((res) => {
        console.log('Student List:', res.data);
        setstudent(res.data);
      })
      .catch((err) => {
        console.error('Error fetching student list:', err);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Students You May Know</h2>
      {student && student.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {student.map((s) => (
            <div
              key={s._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition relative p-4 flex flex-col items-center text-center cursor-pointer"
              onClick={() => navigate(`/student/${s._id}`)}
            >
              <img
                src={s.profilePic || 'https://via.placeholder.com/80?text=Img'}
                alt={s.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-white shadow mb-3"
              />

              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {s.college ? `Student at ${s.college}` : 'Student'}
              </p>

              {/* <p className="text-xs text-gray-500 mt-2">
                You and 3 others follow {s.name.split(' ')[0]}
              </p> */}

              <button
                className="mt-4 px-4 py-2 text-sm border border-green-500 text-green-600 rounded-full font-medium hover:bg-green-50"
              >
                <span className="mr-1">📚+</span> Connect
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading students or no student data available...</p>
      )}
    </div>
  );
}

export default Student;
