"use client"
import React,{ useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link';
import { checkAvailable } from '../api/Users/checkId';
import { categories } from '@/assets/categories';


const page = () => {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState("")
  const [tags, setTags] = useState([])
  const [available , setAvailable] = useState(false)

  const HandleEnter = (key) => {
    if(key === "Enter" && count < 10){
      if(input != ""){
      setTags([...tags,input ]);
      setInput("");
      setCount(count+1);
      }
    }
  }
  const handleClose = (key) => {
    setTags(tags.filter((tag, i) => i != key));
    setCount(count-1);
  }
  const removeAll = () => {
    setInput("");
    setTags([]);
    setCount(0);
  }
   const handleId = async (Id) => {
    const exists = await checkAvailable(Id.toLowerCase())
    setAvailable(exists)
   }
  return (
    <div className='bg-grey w-full h-svh p-10'>
      <Link href='/' className='text-lg font-medium flex mb-10'><FaArrowLeftLong className='m-1'/> Back to Home</Link>
      <div className='w-2/3 bg-white h-72 m-auto p-10'>
        <div>
        <label htmlFor="Id">UserId</label>
        <input type="text" name='Id' id='Id' onChange={(e) => handleId(e.target.value)}/>
        {(available)?<p>User Id Already Exists</p>:null}
        </div>
        <label htmlFor="dob">Date-Of-Birth:</label>
        <input type="date" name='dob' id='dob' />
        <label htmlFor="linkedin">LinkedIn Id:</label>
        <input type="text" name='linkedin' id='linkedin' className='border-2'/>
        <label htmlFor="github">GitHub Id:</label>
        <input type="text" name='github' id='github' />
        <select name="categories" id="categories">
        <option value="">--Please choose an option--</option>
        {categories.map((category,index) => {
        return(
          <option key={index} value={category}>{category}</option>
        )})}
        </select>
        <div className='w-1/2'>
          <p>Tags:</p>
        <div className='border-2 w-full min-h-20 flex flex-row flex-wrap flex-initial'>
          <ul className='flex flex-row flex-wrap'>
          {tags.map((tag, index) => (
              <li key={index} className='p-1 m-1 h-9 bg-gray-100 border border-gray-200 rounded-md'>{tag}<button name={index} className='border bg-gray-200 m-1 text-sm rounded-full w-5 h-5' onClick={(e) => handleClose(e.target.name)}>X</button></li>
            ))} 
          </ul>
        <input type="text" name='tags' className='flex-1 h-10 focus:outline-none' value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => HandleEnter(e.code)}/>
        </div>
        <div className='flex justify-between'>
        <p className='p-2'>{count}/10 Tags</p>
        <button onClick={removeAll} className='p-2 border'>Remove All</button>
        </div>
    </div>
      </div>
    </div>
  )
}

export default page
