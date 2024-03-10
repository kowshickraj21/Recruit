"use client"
import React from 'react'
import Image from 'next/image'
import Chat from './Chat'
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import { io } from "socket.io-client";
import { UseChat,UseToggleChat } from '../api/ChatProvider';
const socket = io('http://localhost:5000');

const ChatBox = (props) => {
  const open = UseChat();
  const setOpen = UseToggleChat();
  if(open){
    socket.connect()
  }else{
    socket.disconnect();
  }
  return (
    <div className='fixed bottom-0 right-5 bg-white rounded-t-lg w-1/4 z-10 shadow-lg shadow-innerText'>
    <div className='h-12 cursor-pointer border-b' onClick={() => setOpen()}>
    <div className='flex pt-2 ml-3 justify-between'>
      <div className='flex'>
      <Image src={props.picture} width={30} height={20} className='rounded-full' alt='profile'/>
      <h2 className='mx-2 mt-1 font-medium'>Messages</h2>
      </div>
      {open?<IoIosArrowDown className='text-2xl mt-1 mr-5'/>:<IoIosArrowUp className='text-2xl mt-1 mr-5'/>}
    </div>
    </div>
    {(open&& props.contact)?
    <Chat you={props} contact = {props.contact}/>
    :null}
    </div>
  ) 
}

export default ChatBox
