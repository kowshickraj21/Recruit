"use client"
import React from 'react'
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { UseToggleChat } from '@/app/api/ChatProvider';
import { UseSetChatMember } from '@/app/api/ChatProvider';

const ContactBtn = ({author}) => {
  const setOpen = UseToggleChat();
  const setChat = UseSetChatMember();
  const handleClick = () => {
    setOpen(true);
    const authorData = JSON.parse(JSON.stringify(author))
    setChat(authorData)
  }
  return (
    <button className='h-12 w-1/2 m-auto mt-5 bg-black text-white border-black border font-semibold flex flex-row justify-center align-middle p-3 shadow-2xl active:text-black active:bg-white' onClick={() => handleClick()}>Contact Me<IoChatboxEllipsesSharp className='m-1' /></button>
  )
}

export default ContactBtn
