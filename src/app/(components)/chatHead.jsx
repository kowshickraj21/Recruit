"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import { UseChat,UseToggleChat } from '../api/ChatProvider';
import { UseChatMember,UseSetChatMember } from '../api/ChatProvider';
import { IoMdArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

const ChatHead = ({picture}) => {
    const open = UseChat();
  const setOpen = UseToggleChat();
  const chat = UseChatMember();
  const setChat = UseSetChatMember();



  if(chat.name == null){ return (
    <div className='h-12 cursor-pointer border-b' onClick={() => setOpen()}>
    <div className='flex pt-2 ml-3 justify-between'>
      <div className='flex'>
      <Image src={picture} width={30} height={20} className='rounded-full' alt='profile'/>
      <h2 className='mx-3 mt-1 font-semibold opacity-85'>Messages</h2>
      </div>
      {open?<IoIosArrowDown className='text-2xl mt-1 mr-5'/>:<IoIosArrowUp className='text-2xl mt-1 mr-5'/>}
    </div>
    </div>
  )}else{
    return (
        <div className='h-12 border-b'>
        <div className='flex h-full ml-3 justify-between items-center'>
          <div className='flex items-center'>
          <IoMdArrowBack className='mr-2 text-2xl cursor-pointer' onClick={() => setChat({})}/>
          <Image src={chat.picture} width={30} height={20} className='rounded-full' alt='profile'/>
          <Link href={`/${chat.userId}`}><h2 className='mx-2 font-semibold opacity-85 hover:underline cursor-pointer'>{chat.name}</h2></Link>
          </div>
          <BsThreeDotsVertical className='text-xl mr-5 cursor-pointer'/>
        </div>
        </div>
      )
  }
}

export default ChatHead
