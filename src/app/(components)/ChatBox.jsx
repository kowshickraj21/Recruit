"use client"
import React from 'react'
import Chat from './Chat'
// import { io } from "socket.io-client";
import { UseChat,UseToggleChat } from '../api/ChatProvider';
import ChatHead from './chatHead'
import ChatList from './ChatList'
// const socket = io('http://localhost:3000/api/chat');
import { UseChatMember } from '../api/ChatProvider';


const ChatBox = (props) => {
  const open = UseChat();
  const setOpen = UseToggleChat();
  const chat = UseChatMember();

  // if(open){
  //   socket.connect()
  // }else{
  //   socket.disconnect();
  // }
  
  return (
    <div className={`fixed bottom-0 ${open?'h-svh':''} lg:h-auto right-0 w-full lg:w-1/4 flex md-block justify-end z-20`}>
    <div className='bg-white rounded-t-lg shadow-lg shadow-innerText w-full'>
    <ChatHead picture={props.picture}/>
    {(open && chat.name)?<Chat you={props} />:open?<ChatList you={props}/>:null}
    </div>
    </div>
  ) 
}

export default ChatBox
