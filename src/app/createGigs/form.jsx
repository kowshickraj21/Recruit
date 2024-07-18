"use client"
import React, { useRef, useState } from 'react'
import FileUpload from './fileUpload';
import { handleSubmit } from "./uploadGigs";
import { useRouter } from 'next/navigation';

const Form = () => {
  const router = useRouter();
    const [link, setLink] = useState("");
    const form = useRef(null)
    const [warning, setWarning] = useState("")
    const [wait, setWait] = useState(false)
  
    const handleForm = async(e) => {
      e.preventDefault(); 
      const formData = new FormData(form.current);
  
      const res = await handleSubmit(formData,link);
      setWarning(res);
      if(res == "Gig created Successfully") router.push("/");
    }
  
    const handleUpload = (uploadLink) => {
      setLink(uploadLink);
      setWait(false);
    }
    const handleWait = () => {
      setWait(true);
      console.log(wait);
    }
  return (
    <form onSubmit={handleForm} className='flex flex-col w-2/3 m-auto' ref={form}>
          <label htmlFor="title" className='my-5'>Gig Title:</label>
          <input type="text" name="title" id="title" maxLength='100' className='border-b-2 bg-transparent h-10 pl-5 ' placeholder='Enter your Gig Title' required/>

          <label htmlFor="description" className='my-5'>Gig Description:</label>
          <textarea name="description" id="description" cols="50" rows="7" maxLength='1000' className='border-b-2 bg-transparent p-5' placeholder='Tell us about what are you going to do' required/>
          
          <div className='flex flex-row gap-16 mt-10'>
          <div>
          <label htmlFor="hourly" className='my-5'>Hourly Rate:</label>
          <p>$<input type="number" name="hourly" id="hourly" className='border-b-2 bg-transparent h-10 mx-5 w-44 p-2' placeholder='Hourly Rate' required/>/hr</p>
          </div>
          <div>
          <label htmlFor="projectly" className='my-5'>Price:</label>
          <p>$<input type="number" name="projectly" id="projectly" className='border-b-2 bg-transparent h-10 mx-5 w-44 p-2' placeholder='Price' required/>/Gig Order</p>
          </div>
          <div>
          <label htmlFor="fastDelivery" className='my-5'>Fast Delivery:</label>
          <p>$<input type="number" name="delivery" id="delivery" className='border-b-2 bg-transparent h-10 mx-5 w-44 p-2' placeholder='Fast Delivery' required/></p>
          </div>
          </div>

          <FileUpload func={(text) => handleUpload(text)} wait={() => handleWait()}/>
          
          <p className='text-red-500 font-semibold text-center mb-5'>{warning}</p>
          {wait?
          <button type="" className='border-2 border-secondry text-white bg-secondry opacity-50 font-medium h-10 w-1/2 m-auto shadow-xl active:shadow-none' disabled>Loading...</button>
          :
          <button type="submit" className='border-2 border-secondry text-white bg-secondry font-medium h-10 w-1/2 m-auto shadow-xl active:shadow-none'>Create Gig</button>
          }          
        </form>
  )
}

export default Form
