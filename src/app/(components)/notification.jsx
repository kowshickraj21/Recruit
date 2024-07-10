import React,{useState} from 'react';
import { FaRegBell } from "react-icons/fa";

const Notification = () => {

  const [open,setOpen] = useState(false);

  return (
    <div className='relative'>
      <FaRegBell className='w-6 h-6' onClick={() => setOpen(!open)}/>

      {open ? 
      <div className='absolute h-96 w-80 z-10 bg-white top-12 right-0 flex justify-center items-center rounded-md shadow-md'>
        <p>No Notifications</p>
      </div>
      :null}
    </div>
  )
}

export default Notification
