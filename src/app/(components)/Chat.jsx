'use client'
import React,{useState,useEffect} from 'react'
import { io } from "socket.io-client";
const socket = io('http://localhost:5000');
import Image from 'next/image';
import { IoMdSend } from "react-icons/io";
import { storeMessage,getMessages } from '@/app/api/chatDB/message'
import { UseChatMember } from '../api/ChatProvider';


const Chat = (props) => {
  const chat = UseChatMember();
  const { name,picture,email } = props.you
  const [messages,setMessage] = useState([])
  const [pastMessages,setPastMessage] = useState([])
  const [input,setInput] = useState("")

  useEffect(()=>{
    const getChat = async() => {
    const pastMessage = await getMessages({sender:email,reciever:chat.email})
    setPastMessage(pastMessage)
  }
  getChat();
  },[])


  socket.on('chat-message',data =>{
    setMessage([...messages,{'sender':data.sender,'message':data.message}])
  })

  const send = async() => {
    socket.emit('client-message',name,input);
    setMessage([...messages,{'sender':name,'message':input}])
    const sent = await storeMessage({message:input,reciever:chat.email,sender:email,messageSender:name});
    setInput('')
  }
  
  return (
    <div className='h-96 overflow-y-auto'>
      <div className='pb-10 '>
      {pastMessages.map((message,index) =>{
        return(
        <div key={index} className='py-2 hover:bg-slate-50 px-2'>
          <div className='flex space-x-2'>
          {message.sender == name ?
          <Image src={picture} width={30} height={20} className='rounded-full' alt='profile'/>
          :<Image src={chat.picture} width={30} height={20} className='rounded-full' alt='profile'/>}
          <h2 className='font-semibold'>{message.sender}</h2>
          </div>
          <p className='px-10 py-2 '>{message.message}</p>
        </div>
        )
      })}
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
      <div className='w-full absolute bottom-0 h-10 flex'>
      <input type="text" className='border w-4/5 h-full' value={input} onChange={(e) => {setInput(e.target.value)}}/>
      <button className='w-1/5 h-full bg-black text-white' onClick={() => send()}><IoMdSend className='m-auto text-xl'/></button>
      </div>
    </div>
  )
}

export default Chat
