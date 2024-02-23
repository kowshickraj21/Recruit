"use client"
import React,{useRef,useState} from 'react'
import Link from 'next/link';
import { FaArrowLeftLong } from "react-icons/fa6";
import { uploadGigs } from '../api/gigs/uploadGigs';
import FileUpload from './fileUpload';

const Page = () => {
  const form = useRef(null)
  const [warning, setWarning] = useState("")
  const handleSubmit = (formData) => {
    uploadGigs(formData)
    form.current?.reset()
    setWarning("\"Gig created Succesfully\"")
  }
  return (
    <div className='bg-grey h-full w-full p-10'>
      <Link href='/' className='text-lg font-medium flex mb-10'><FaArrowLeftLong className='m-1'/> Back to Home</Link>
      <div className='w-2/3 m-auto bg-white'>
      <h1 className='text-2xl font-bold p-7'>About your Gig</h1>
      <form action={handleSubmit} className='flex flex-col p-10 pt-0' ref={form}>
        <label htmlFor="title" className='my-5'>Gig Title:</label>
        <input type="text" name="title" id="title" maxLength='100' className='border rounded-xl h-10 pl-5' placeholder='Enter your Gig Title' required/>
        <label htmlFor="description" className='my-5'>Gig Description:</label>
        <textarea name="description" id="description" cols="50" rows="7" maxLength='1000' className='border p-5 rounded-2xl' placeholder='Tell us about what are you going to do' required/>
        <label htmlFor="hourly" className='my-5'>Hourly Rate:</label>
        <p>$<input type="number" name="hourly" id="hourly" className='border rounded-xl h-10 mx-5 w-44 p-2' placeholder='Hourly Rate' required/>/hr</p>
        <label htmlFor="hourly" className='my-5'>Price:</label>
        <p>$<input type="number" name="projectly" id="projectly" className='border rounded-xl h-10 mx-5 w-44 p-2' placeholder='Price' required/>/Gig Order</p>
        <label htmlFor="hourly" className='my-5'>Fast Delivery:</label>
        <p>$<input type="number" name="fastDelivery" id="fastDelivery" className='border rounded-xl h-10 mx-5 w-44 p-2' placeholder='Fast Delivery' required/></p>
        {/* <label htmlFor="image" className='m-auto my-10 border h-40'>
          <p className='absolute -z-10'>custom upload</p>
        <input type="file" accept='image/*' name='image' className='p-16 opacity-100 cursor-pointer' required/>
        </label> */}
        <FileUpload />
        <p className='text-green-400 font-semibold text-center'>{warning}</p>
        <button type="submit" className='border-2 border-black font-semibold h-10 w-1/2 m-auto hover:bg-black hover:text-white active:bg-white active:text-black'>Create Gig</button>
      </form>
    </div>  
    </div>
  )
}

export default Page
