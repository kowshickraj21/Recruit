"use client"
import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { UseChat,UseToggleChat } from '../api/ChatProvider';
import { UseChatMember,UseSetChatMember } from '../api/ChatProvider';

const ChatButton = () => {
  const open = UseChat();
  const setOpen = UseToggleChat();
  const chat = UseChatMember();
  const setChat = UseSetChatMember();

  return (
      <div className={`${open?'hidden':''} md:hidden absolute bottom-8 right-5 bg-secondry rounded-full h-14 w-14 flex justify-center items-center`} >
      <MdOutlineMessage className='h-10 w-10 text-white mx-3 mt-1'/>
      </div>
  )
}

export default ChatButton
