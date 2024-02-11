"use client"
import React,{ useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link';


const page = () => {
  const [input, setInput] = useState("")
  const [tags, setTags] = useState([])
  const HandleEnter = (key) => {
    if(key === "Enter"){
      setTags([...tags,input ]);
      setInput("");
    }
  }
  const handleClose = (key) => {
    setTags(tags.filter((tag, i) => i != key));
  }
  return (
    <div className='bg-grey w-full h-svh p-10'>
      <Link href='/' className='text-lg font-medium flex mb-10'><FaArrowLeftLong className='m-1'/> Back to Home</Link>
      <div className='w-2/3 bg-white h-72 m-auto p-10'>
        <div className='h-32 border'></div>
        <div className='border-2 w-1/2 min-h-10 m-10 flex flex-row flex-wrap flex-initial'>
          <ul className='flex flex-row flex-wrap'>
          {tags.map((tag, index) => (
              <li key={index} className='p-1 m-1 h-9 bg-gray-100 border border-gray-200 rounded-md'>{tag}<button name={index} className='border bg-gray-200 m-1 text-sm rounded-full w-5 h-5' onClick={(e) => handleClose(e.target.name)}>X</button></li>
            ))} 
          </ul>
        <input type="text" name='tags' className='flex-1 h-10 focus:outline-none' value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => HandleEnter(e.code)}/>
        </div>
      </div>
    </div>
  )
}

export default page
