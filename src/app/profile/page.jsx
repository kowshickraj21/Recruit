import React from 'react';
import Image from 'next/image';
import fetchUser from '../api/Users/setDetails';
import Link from 'next/link';
import { FaArrowLeftLong } from "react-icons/fa6";

const page = async () => {
  const user = await fetchUser()
  const Id = user.userId
  return (
    <div className='h-full'>
      <div className='bg-grey p-8'>
      <Link href='/' className='text-lg font-medium flex mb-10'><FaArrowLeftLong className='m-1'/> Back to Home</Link>
        <div className='flex flex-column align-middle justify-center'>
          <div className=' p-10 m-10 w-1/4'>
            <Image src={user.picture} width={200} height={200} alt="Profile" className='rounded-full m-auto' />
          </div>
          <div className=' p-10 m-10 ml-20 w-1/2 text-center'>
            <h2 className='text-2xl p-3'>{user.name}</h2>
            <p className='p-2'>{user.email}</p>
          </div>
          </div>
        </div>
        {Id? 
        <div className='flex flex-column align-middle justify-center'>
        <div className=' p-10 border m-10 w-1/4'>
          
        </div>
        <div className=' p-10 border m-10 ml-20 w-1/2 text-center'>
          <h2 className='text-2xl p-3'>Gigs</h2>
        </div>
      </div>: null}
        
    </div>
  )
}

export default page
