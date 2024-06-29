import React from 'react'
import { MdOutlineMessage } from "react-icons/md";

const ChatButton = () => {
  return (
    <div>
      <div className='md:hidden w-auto flex justify-center items-center'>
      <MdOutlineMessage className='h-10 w-10 text-white mx-3 mt-2 pt-2'/>
      </div>
    </div>
  )
}

export default ChatButton
