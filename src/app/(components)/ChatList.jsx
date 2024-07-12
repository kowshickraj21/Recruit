"use client"
import Image from 'next/image';
import React,{useState,useEffect} from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import {getChatList} from '@/app/api/chatDB/chatList'
import { UseSetChatMember } from '../api/ChatProvider';

const ChatList = ({you}) => {
  const [members,setMembers] = useState([])
  const setChat = UseSetChatMember();

  // useEffect(() => {
  //   const getList = async() => {
  //     const data = await getChatList(you.email)
  //     setMembers(data)
  //   }
  //   getList()
  // },[])
  return (
    <div className='h-96 overflow-y-auto'>
      {members?
      <div className='w-full h-full'>
      {members.map((member,index) => {
        return(
          <button className='flex items-center cursor-pointer hover:bg-slate-100 w-full h-16'key={index} onClick={() => setChat(member)}>
          <Image src={member.picture} width={30} height={20} className='rounded-full' alt='profile'/>
          <h2 className='mx-2 font-semibold opacity-85'>{member.name}</h2>
          </button>
        )
      })}
      </div>
      :<div className='m-auto text-center mt-40 text-xl'>
      <FaCirclePlus className='m-auto text-2xl my-2'/>
      <p>No Conversations yet</p>
      </div>}
    </div>
  )
}

export default ChatList
