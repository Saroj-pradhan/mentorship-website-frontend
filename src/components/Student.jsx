import React, { useContext, useEffect, useState } from 'react';

import { datacont } from '../context/Context';
import axios from '../utils/Axios';
import { useNavigate } from 'react-router-dom';

function Student() {
  const { student, setstudent,user  } = useContext(datacont);
 const [filterstudent , setfilterstudent] = useState("");
 const [query,setquery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
   
    console.log(query);
    if(query.trim() === ""){
      setfilterstudent(student);
    }else{
      const fltrstd = student.filter((s)=> s.name.toLowerCase().includes(query.toLowerCase()));
      setfilterstudent(fltrstd);
    }
    
  }, [query,student]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Students You May Know</h2>
      <div className="mb-6 w-full relative">
        <div className=''>
          <input type="text" name="" id="" className='w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg'
        placeholder='find Student you may know '
        onChange={(e)=>setquery(e.target.value)}
        value={query}
        />
        </div>
        <div className='absolute left-4 top-3.5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

        </div>
      </div>
      {student && filterstudent.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterstudent.map((s) => (
          (user!== s.id)?( <div
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
          </div>):("")
       ))}
     </div>
      ) : (
        <p>Loading students or no student data available...</p>
      )}
    </div>
  );
}

export default Student;
