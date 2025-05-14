import { useRef ,useContext, useState, useEffect} from 'react'
import axios from './Axios';
import { Admincont } from '../context/AContext';
import { datacont } from '../context/Context';
import { ToastContainer , toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Communitypost() {
  const navigate = useNavigate();
  const {user,student,isloggedin} = useContext(datacont);
  const {alumni,mentor,isadlogin} = useContext(Admincont);
   const [publisher, setpublisher] = useState({});
 
  useEffect(()=>{
    // if (!student || !mentor || (!user && !alumni)) return;
   
    
     if(isloggedin && user && student.length){
       console.log(user);
       console.log(student);
       
      const realuser = student.filter((event)=>{return event.id == user});
      console.log(realuser,"realuser");
      setpublisher(realuser[0]);
   
    }
     if(isadlogin){
      console.log(alumni,"alumni");
      
      const realuser = mentor.filter((event)=>{return event.id == alumni});
      console.log(realuser,"realuser");
      
      setpublisher(realuser[0]) ;
    }
      
  },[alumni,mentor,student,user])
   
 
  const title = useRef(null);
  const descrip = useRef(null);
  const tag = useRef(null);
  function postcommunitydata(e){
    e.preventDefault();
      console.log(publisher);
      console.log(publisher?.name);
      
      let actualtag = tag.current.value.split(",").map((t)=> t.trim()).filter((t)=>{return t!== ""});
      console.log(actualtag);
      
      axios.post('/community/postdata',{
        title :title.current.value,
        descrip :descrip.current.value,
        tags:actualtag,
        author:{
       name:publisher.name || "anonymous",
       role:(alumni)?("A mentor"):("A student"),
       profilePic:publisher.profilePic ,
        }
      }).then((res)=>{
       console.log(res);
    
         toast.success(res.data.msg);
       setTimeout(()=>{
         
        navigate(-1);
       },2*1000)
      }).catch((error)=>{
        console.log(error);
        toast.error(error?.response?.data.msg);
      })
      
     
      
  }
  return (
    <div className=" pt-27 sm:pl-25 sm:pr-25 p-4">
      <ToastContainer/>
      <p className='text-black text-3xl font-bold mb-3'>Community post</p>
      <div>
        <form action="" onSubmit={postcommunitydata}>
          <input required ref={title} className='w-full  border-gray-400 border-t shadow-2xl p-2.5 rounded mb-3 font-semibold ' type="text" placeholder='Enter title' />
          <textarea required ref={descrip} className='w-full sm:h-52 h-96  border-gray-400  p-2.5 rounded mb-2 shadow-xl' type="text" placeholder='Enter description /content ' />
          <input required ref={tag} className='w-full border-gray-400  shadow-2xl  p-2.5 rounded ' type="text" placeholder='Enter tags ' />
           <button className='bg-blue-600 text-white p-3 mt-2' type="submit">Publish Post</button>
        </form>
      </div>
      </div>
  )
}

export default Communitypost