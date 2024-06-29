"use client"
import React,{ useState,useRef } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link';
import { checkAvailable } from '../api/Users/checkId';
import { categories } from '@/assets/categories';
import Location from './location';
import createProfile from '../api/Users/createProfile';
import HomeNav from '../(components)/HomeNav';


const Page = () => {
  const form = useRef(null)
  const [count, setCount] = useState(0)
  const [input, setInput] = useState("")
  const [tags, setTags] = useState([])
  const [available , setAvailable] = useState(false)

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
    form.current?.reset();
    setTags([]);
    setCount(0);
    setInput("");
   }
  return (
    <div className='w-full h-full'>
      {/* <Link href='/' className='text-lg font-medium flex mb-10'><FaArrowLeftLong className='m-1'/> Back to Home</Link> */}
      <HomeNav />
      <div className='relative bg-white m-auto p-10 mb-10 pb-32'>
      <form className='p-10  flex flex-wrap' onSubmit={handleSubmit} ref={form}>
        <div>
        <label htmlFor="Id">UserId</label>
        <input type="text" name='Id' id='Id' onChange={(e) => handleId(e.target.value)} className='border-2 m-5'/>
        {(available)?<p>User Id Already Exists</p>:null}
        </div>
        <div className='m-5'>
        <label htmlFor="dob">Date-Of-Birth:</label>
        <input type="date" name='dob' id='dob' className='m-5'/>
        </div>
        <div className='m-5'>
        <label htmlFor="linkedin">LinkedIn Link:</label>
        <input type="text" name='linkedin' id='linkedin' className='border-2 m-5'/>
        </div>
        <div className='m-5'>
        <label htmlFor="github">GitHub Link:</label>
        <input type="text" name='github' id='github' className='border-2 m-5' />
        </div>
        <select name="categories" id="categories" className='m-10'>
        <option value="">--Please choose an option--</option>
        {categories.map((category,index) => {
        return(
          <option key={index} value={category}>{category}</option>
        )})}
        </select>
    <Location />
    {available?
      <button type='' className='absolute bottom-10 cursor-not-allowed' disabled>Submit</button>:
      <button type='submit' className='absolute bottom-10' >Submit</button>}
      </form>

      <div className='w-1/2'>
          <p>Tags:</p>
        <div className='border-2 w-full min-h-20 flex flex-row flex-wrap flex-initial'>
          <ul className='flex flex-row flex-wrap bg-white'>
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

export default Page
