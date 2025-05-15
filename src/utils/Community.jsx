import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/Axios';
const Community = () => {
  
  const [articles,setarticles] = useState([]);
  useEffect(()=>{
    console.log("mount");
  //   const res = fetch('http://localhost:5000/community/getpost')
  //   .then((res)=>res.json()
     
  //   ).then((data)=>{
  //  console.log(data);
  //  setarticles(data.data);
  //   }).catch((error)=>{
  //     console.log(error);
      
    // })
    axios.get('/community/getpost')
  .then((res) => {
    console.log(res.data);
    setarticles(res.data.data); // assuming `data.data` is correct structure
  })
  .catch((error) => {
    console.log('Error fetching posts:', error);
  });
  },[])
  const navigate = useNavigate();
 function postdata(){
console.log("gffggfffgfg");
navigate("/communitypost");
 }

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8 pt-28">
      <div className="max-w-5xl mx-auto ">
        <div className=" fixed top-0 left-32 right-32  flex justify-between items-center mb-8 bg-white z-40 pt-24 pb-3">
          <h1 className="text-3xl font-bold text-black ">Community Insights</h1>
          <button onClick={()=>postdata()} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg ">
            Share Your Story
          </button>
        </div>
     
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles, topics, or authors..."
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute left-4 top-3.5">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        

        
        <div className="space-y-6">
          {articles.map((article) => (
            <div key={article._id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={article.author?.profilePic} 
                    alt={article.author.name} 
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{article.author.name}</p>
                    <p className="text-xs text-gray-500">{article.author?.role}</p>
                  </div>
                  <span className="ml-auto text-xs text-gray-500">{article.date.split("T")[0]}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.descrip}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {article.likes}
                    </span>
                   
                  </div>
                  <span className="text-xs text-gray-500">{article.timeToRead}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;