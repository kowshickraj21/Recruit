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
      <div className='md:hidden w-auto flex justify-center items-center' >
      <MdOutlineMessage className='h-10 w-10 text-white mx-3 mt-2 pt-2'/>
      </div>
  )
}

export default ChatButton
