"use client"
import React,{useState} from 'react'

const CreateId = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Create Id</button>
    {(isOpen)?
    <div className='absolute top-0 left-0 w-full h-screen bg-black bg-opacity-65'>
        <div className='absolute top-1/3 left-1/2  -translate-x-1/2 -translate-y-1/3 w-2/5 h-1/2 bg-white'>
        <button onClick={() => setIsOpen(false)} className=' w-8 absolute right-0 text-white bg-red-500'>X</button>
        {children}
        </div>
    </div>: null}
    </div>
  )
}

export default CreateId
