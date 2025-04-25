import React ,{useEffect, useState,useMemo,useContext} from 'react'
import { useParams } from 'react-router-dom';
import { Admincont } from '../../context/AContext'; 
import {io} from "socket.io-client"
function Rmessage() {
  const  {alumni,setalumni} = useContext(Admincont);
  console.log(alumni);
  
  const {id} = useParams();
  console.log(id);
  
    // const socket = io("http://localhost:5000");
    const [chat,setchat] =useState([]);
    const [message,setmessage] = useState("");
    const socket = useMemo(() => {
        // return io("http://localhost:5000"
           return io("https://mentorship-website-backend.onrender.com"
          , {
          withCredentials: true,
          transports: ['websocket', 'polling']
        });
      }, []); // ✅ Created once on initial render
      function handelSubmit(e){
  e.preventDefault();
  // socket.emit("register",alumni);
    socket.emit("message",{message , senderid:alumni,receiverid:id});
    setchat((prev)=>{return [...prev,message]})
//   socket.on("received message",(me)=>{
//     console.log(`i received back ${me}`);
    
//   })
//   setmessage(e.target.tf.value);
      }
     
    useEffect(() => {
        // Create socket connection
        socket.on("received message",(me)=>{
            console.log(`i received back ${me}`);
            setchat((prev)=>{return [...prev,me]})
          })
        // Event listeners
        socket.on("connect", () => {
          console.log("🟢 Connected to socket:", socket.id);
        });
        
        socket.on("connect_error", (error) => {
          console.log("❌ Connection error:", error.message);
        });
        
        socket.on("disconnect", (reason) => {
          console.log("🔴 Disconnected:", reason);
        });
        socket.emit("register",alumni);
        
        return () => {
          socket.disconnect();
        };
      }, []);
  return (
    <div className="flex flex-col  h-screen  items-center justify-end">
      <div className='w-[80%] h-screen '>
      {chat!=[]?(chat.map((ch)=><p className='bg-blue-400 m-1  w-fit p-1.5 text-white '>{ch}</p>)):""}
      </div>
        <div className='w-[80%]'> 
           <form onSubmit={handelSubmit} className='w-[100%]  mb-[10%]'>
          
           <textarea value={message} onChange={(e)=>{setmessage(e.target.value)}} id="tf" className='bg-blue-50 text-xl font-mono w-[100%] h-28' name="" ></textarea>
           <button  className='bg-blue-700 px-6 py-2 rounded text-white' type='submit'>Send</button>
           </form>
        </div>
    </div>
  )
}

export default Rmessage