"use client"
import React from 'react'
import Chat from './Chat'
import ChatButton from '@/app/(components)/chatButton'
// import { io } from "socket.io-client";
import { UseChat} from '../api/ChatProvider';
import ChatHead from './chatHead'
import ChatList from './ChatList'
// const socket = io('http://localhost:3000/api/chat');
import { UseChatMember } from '../api/ChatProvider';


const ChatBox = (props) => {
  const open = UseChat();
  const chat = UseChatMember();

  // if(open){
  //   socket.connect()
  // }else{
  //   socket.disconnect();
  // }
  return (
    <div className='fixed md:bottom-0 bottom-10 md:right-5 right-8 w-1/4 flex md-block justify-end'>
    <div className='md:hidden bg-secondry rounded-full h-14 w-14'>
      <ChatButton />
    </div>

    <div className='md:block hidden bg-white rounded-t-lg shadow-lg shadow-innerText w-full'>
    <ChatHead chat='chat' picture={props.picture}/>
    {(open && chat.name)?<Chat you={props} />:open?<ChatList you={props}/>:null}
    </div>
    </div>
  ) 
}

export default ChatBox
