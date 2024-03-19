import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";

const ChatList = () => {
  return (
    <div className='h-96 overflow-y-auto'>
      <div className='m-auto text-center mt-40 text-xl'>
      <FaCirclePlus className='m-auto text-2xl my-2'/>
      <p>No Conversations yet</p>
      </div>
    </div>
  )
}

export default ChatList
