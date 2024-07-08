"use client"
import React, { useRef, useState } from 'react'
import Link from 'next/link';
import { FaArrowLeftLong } from "react-icons/fa6";
import FileUpload from './fileUpload';
import { handleSubmit } from "./uploadGigs"

const Page = () => {
  const [link, setLink] = useState("");
  const form = useRef(null)
  const [warning, setWarning] = useState("")

  const handleForm = async(e) => {
    e.preventDefault(); 
    const formData = new FormData(form.current);

    const res = await handleSubmit(formData,link);
    setWarning(res);
  }

  const handleUpload = (uploadLink) => {
    setLink(uploadLink);
  }

  return (
    <div className='bg-grey h-full w-full p-10'>
      <Link href='/' className='text-lg font-medium flex mb-10'><FaArrowLeftLong className='m-1'/> Back to Home</Link>

      <div className='w-full m-auto bg-white'>
        <h1 className='text-2xl font-bold p-7'>About your Gig</h1>

        <form onSubmit={handleForm} className='flex flex-col p-10 pt-0' ref={form}>
          <label htmlFor="title" className='my-5'>Gig Title:</label>
          <input type="text" name="title" id="title" maxLength='100' className='border rounded-xl h-10 pl-5' placeholder='Enter your Gig Title' required/>

          <label htmlFor="description" className='my-5'>Gig Description:</label>
          <textarea name="description" id="description" cols="50" rows="7" maxLength='1000' className='border p-5 rounded-2xl' placeholder='Tell us about what are you going to do' required/>
          
          <div className='flex flex-row gap-16'>
          <div>
          <label htmlFor="hourly" className='my-5'>Hourly Rate:</label>
          <p>$<input type="number" name="hourly" id="hourly" className='border rounded-xl h-10 mx-5 w-44 p-2' placeholder='Hourly Rate' required/>/hr</p>
          </div>
          <div>
          <label htmlFor="projectly" className='my-5'>Price:</label>
          <p>$<input type="number" name="projectly" id="projectly" className='border rounded-xl h-10 mx-5 w-44 p-2' placeholder='Price' required/>/Gig Order</p>
          </div>
          <div>
          <label htmlFor="fastDelivery" className='my-5'>Fast Delivery:</label>
          <p>$<input type="number" name="delivery" id="delivery" className='border rounded-xl h-10 mx-5 w-44 p-2' placeholder='Fast Delivery' required/></p>
          </div>
          </div>

          <FileUpload func={(text) => handleUpload(text)}/>
          
          <p className='text-green-400 font-semibold text-center'>{warning}</p>
          
          <button type="submit" className='border-2 border-secondry text-white bg-secondry font-medium h-10 w-1/2 m-auto shadow-xl active:shadow-none'>Create Gig</button>
        </form>

      </div>  
    </div>
  )
}

export default Page
