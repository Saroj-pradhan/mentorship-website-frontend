import { useContext, useRef } from 'react'
import axios from '../../utils/Axios';
import {Admincont} from '../../context/AContext'
function ACommunitypost() {
  const {alumni , mentor} = useContext(Admincont);
 
  
  
  const title = useRef(null);
  const descrip = useRef(null);
  const tag = useRef(null);
  function postcommunitydata(e){
    e.preventDefault();
    console.log("data");
    
    console.log(e);
    
    console.log(title.current.value);
      console.log(descrip.current.value);
      console.log(tag.current.value);
      // axios.post('/community/getpost',{
    
      //   title :title.current.value,
      //   descrip :descrip.current.value,
      //   tag:tag.current.value

      // })
 console.log(alumni);
  console.log(mentor);
      
  }
  return (
    <div className=" pt-27 sm:pl-25 sm:pr-25 p-4">
      <p className='text-black text-3xl font-bold mb-3'>Community post</p>
      <div>
        <form action="" onSubmit={postcommunitydata}>
          <input required ref={title} className='w-full  border-gray-400 border-t shadow-2xl p-2.5 rounded mb-3 font-semibold ' type="text" placeholder='Enter title' />
          <textarea required ref={descrip} className='w-full  border-gray-400  p-2.5 rounded mb-2 align-top shadow-xl ' type="text" placeholder='Enter description  ' />
          <input required ref={tag} className='w-full border-gray-400  shadow-2xl  p-2.5 rounded ' type="text" placeholder='Enter tags ' />
           <button className='bg-blue-600 text-white p-3 mt-2' type="submit">Publish Post</button>
        </form>
      </div>
      </div>
  )
}

export default ACommunitypost