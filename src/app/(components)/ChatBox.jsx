"use client"
import React,{ useState } from 'react'
import Image from 'next/image'
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";

const ChatBox = (props) => {
  const [open,setOpen] = useState(false);
  return (
    <div className='fixed bottom-0 right-5 bg-white rounded-t-lg w-1/5 z-10 shadow-lg shadow-innerText'>
    <div className='h-12 cursor-pointer border-b' onClick={() => setOpen(!open)}>
    <div className='flex pt-2 ml-3 justify-between'>
      <div className='flex'>
      <Image src={props.picture} width={30} height={20} className='rounded-full' alt='profile'/>
      <h2 className='mx-2 mt-1 font-medium'>Messages</h2>
      </div>
      {open?<IoIosArrowDown className='text-2xl mt-1 mr-2'/>:<IoIosArrowUp className='text-2xl mt-1 mr-2'/>}
    </div>
    </div>
    {open?
    <div>
      
    </div>
    :null}
    </div>
  ) 
}

export default ChatBox
