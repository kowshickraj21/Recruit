"use client"
import React,{ useState,useRef } from 'react';
import { checkAvailable } from '../api/Users/profile';
import { categories } from '@/assets/categories';
import Location from './location';
import createProfile from '../api/Users/createProfile';
import { FaRegTrashAlt } from "react-icons/fa";
import { useRouter } from 'next/navigation'

const Form = () => {
    const router = useRouter();
    const form = useRef(null)
  const [count, setCount] = useState(0)
  const [input, setInput] = useState("")
  const [tags, setTags] = useState([])
  const [available , setAvailable] = useState(false)
  const [loading , setLoading] = useState(false)

  const HandleEnter = (key) => {
    if(key === "Enter" && count < 10){
      if(input !== ""){
      setTags([input,...tags]);
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

   const handleSubmit = (formData) => {
    formData.preventDefault();
    setLoading(true);
    const id = formData.target[0].value.toLowerCase();
    createProfile({
      userId:id,
      DOB:formData.target[1].value,
      linkedIn:formData.target[2].value,
      gitHub:formData.target[3].value,
      category:formData.target[4].value,
      country:formData.target[5].value,
      state:formData.target[6].value,
      tags:tags
    })
    router.push('/');
   }
  return (
    <div>
       <form className='p-10' onSubmit={handleSubmit} ref={form}>
        <div className='flex flex-col w-1/2 m-auto'>
        <label htmlFor="Id">UserId:</label>
        <input type="text" name='Id' id='Id' onChange={(e) => handleId(e.target.value)} className='bg-transparent border-b-2 h-8 m-5' placeholder='Your User ID'/>
        {(available)?<p className='text-red-500 text-sm -mt-2 ml-5'>*User Id Already Exists*</p>:null}
        </div>
        <div className='my-5 flex flex-col w-1/2 m-auto'>
        <label htmlFor="dob">Date-Of-Birth:</label>
        <input type="date" name='dob' id='dob' className='m-5 bg-transparent border-b-2 h-8'/>
        </div>
        <div className='my-5 flex flex-col w-1/2 m-auto'>
        <label htmlFor="linkedin">LinkedIn:</label>
        <input type="text" name='linkedin' id='linkedin' className='m-5 bg-transparent border-b-2 h-8' placeholder='Your LinkedIn profile'/>
        </div>
        <div className='my-5 flex flex-col w-1/2 m-auto'>
        <label htmlFor="github">GitHub:</label>
        <input type="text" name='github' id='github' className='m-5 bg-transparent border-b-2 h-8' placeholder='Your GitHub profile'/>
        </div>
        <div className='my-5 flex flex-col w-1/2 m-auto'>
        <label htmlFor="categories">Category:</label>
        <select name="categories" id="categories" className='m-5 bg-transparent border-b-2 h-8'>
        <option value="">--Please choose an option--</option>
        {categories.map((category,index) => {
        return(
          <option key={index} value={category} >{category}</option>
        )})}
        </select>
        </div>
      <div className='my-5 w-1/2 m-auto'>
    <Location />
    </div>
    {available?
      <button type='' className='absolute bottom-10 cursor-not-allowed bg-secondry left-1/2 -translate-x-1/2 text-white px-10 py-3' disabled>Create Profile</button>:loading?
      <button type='' className='absolute bottom-10 cursor-not-allowed bg-secondry left-1/2 -translate-x-1/2 text-white px-10 py-3' disabled>Loading...</button>:
      <button type='submit' className='absolute bottom-10 bg-secondry left-1/2 -translate-x-1/2 text-white px-10 py-3' >Create Profile</button>}
      </form>
      <div className='w-1/2 m-auto'>
          <p>Tags:</p>
        <div className='border-2 w-full min-h-20 flex flex-row flex-wrap flex-initial bg-white'>
          <ul className='flex flex-row flex-wrap bg-white'>
          {tags.map((tag, index) => (
              <li key={index} className='p-1 m-1 h-9 bg-gray-100 border border-gray-200 rounded-md'>{tag}<button name={index} className='border bg-gray-200 m-1 text-sm rounded-full w-5 h-5' onClick={(e) => handleClose(e.target.name)}>X</button></li>
            ))} 
          </ul>
        <input type="text" name='tags' className='flex-1 h-10 focus:outline-none' value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => HandleEnter(e.code)}/>
        </div>
        <div className='flex justify-between'>
        <p className='p-2'>{count}/10 Tags</p>
        <button onClick={removeAll} className='p-2 rounded-md px-3 mt-1 bg-red-500 text-white'><FaRegTrashAlt /></button>
        </div>
        </div>
    </div>
  )
}

export default Form
