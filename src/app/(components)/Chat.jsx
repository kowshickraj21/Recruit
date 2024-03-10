'use client'
import React,{useState} from 'react'
import { io } from "socket.io-client";
const socket = io('http://localhost:5000');
import Image from 'next/image';

const Chat = (props) => {
  const { name,picture } = props.you
  const [messages,setMessage] = useState([])
  const [input,setInput] = useState("")
  socket.on('chat-message',data =>{
    setMessage([...messages,{'sender':data.sender,'message':data.message}])
  })
  const send = () => {
    socket.emit('client-message',name,input);
    setMessage([...messages,{'sender':name,'message':input}])
    console.log(messages)
    setInput('');
  }
  return (
    <div className='h-96 overflow-y-auto'>
      <div className='pb-10'>
      {messages.map((message,index) =>{
        return(
        <div key={index} className='py-2 hover:bg-slate-50 px-2'>
          <div className='flex space-x-2'>
          <Image src={picture} width={30} height={20} className='rounded-full' alt='profile'/>
          <h2 className='font-semibold'>{message.sender}</h2>
          </div>
          <p className='px-10 py-2 '>{message.message}</p>
        </div>
        )
      })}
      </div>
      <div className='w-full absolute bottom-0 h-10'>
      <input type="text" className='border w-3/4 h-10' value={input} onChange={(e) => {setInput(e.target.value)}}/>
      <button className='border w-1/4 h-10' onClick={() => send()}>Send</button>
      </div>
    </div>
  )
}

export default Chat
