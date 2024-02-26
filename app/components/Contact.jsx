'use client'
import React, { useState } from 'react';



const Contact = () => {
  const [name,setName]=useState("");
  const [name1,setName1]=useState("");
  const namechange =(event)=>{
    return(
    setName(event.target.value)
    )
  }
  const [message,setMessage]=useState("");
  const [message1,setMessage1]=useState("");
  const messagechange =(event)=>{
    return(
    setMessage(event.target.value)
    )
  }
  const saveValues =()=>{
    return(
    setName1(name),
     setMessage1(message)
    )
  }
  return (
 
    <div >
        <div className="flex justify-end font-serif text-red-100">
            <div>
   <div className="px-2">Email: hannanasif9966@gmail.com</div>
   <div className="px-2"> whatsapp: +923094450867</div>
   </div>
    </div>
    <div className="flex justify-center pt-20 h-screen  ">
      <div> 
       <div > <input  type="text" onChange={namechange} value={name} placeholder="Enter your name" className=" name w-48 mt-2 h-8 border border-red-300 rounded-md py-2 px-2" /></div>
       <div><input type="text" onChange={messagechange} value={message} placeholder="Type a message here" className="message mt-2 w-48 h-40 border-red-300 rounded-lg px-2" /></div>
       <div className="flex font-serif justify-center items-center"> <button onClick={saveValues} className="btn w-24 hover:bg-red-400   mt-2 h-7 font-bold border-2 justify-center items-center border-red-900 rounded-full bg-slate-300">SUBMIT</button></div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
