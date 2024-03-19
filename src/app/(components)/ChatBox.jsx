"use client"
import React from 'react'
import Chat from './Chat'
import { io } from "socket.io-client";
import { UseChat} from '../api/ChatProvider';
import ChatHead from './chatHead'
import ChatList from './ChatList'
const socket = io('http://localhost:5000');
import { UseChatMember,UseSetChatMember } from '../api/ChatProvider';


const ChatBox = (props) => {
  const open = UseChat();
  const chat = UseChatMember();

  if(open){
    socket.connect()
  }else{
    socket.disconnect();
  }
  return (
    <div className='fixed bottom-0 right-5 bg-white rounded-t-lg w-1/4 z-10 shadow-lg shadow-innerText'>
    <ChatHead chat='chat' picture={props.picture}/>
    {(open && chat.name)?<Chat you={props} />:open?<ChatList />:null}
    </div>
  ) 
}

export default ChatBox
