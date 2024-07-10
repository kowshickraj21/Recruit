import React from 'react'
import Image from 'next/image'
import { IoLocationSharp } from "react-icons/io5";
import { FaStar } from 'react-icons/fa6';

const Reviews = ({author}) => {

  return (
    <div className='m-5'>
      <h2 className='font-semibold text-gigText text-xl mb-10'>Reviews:</h2>
      <div>
        <hr />
        <div className='mt-5 mb-2'>
          <Image src={author.picture} width={35} height={35} alt='profile' className='rounded-full mx-1 h-auto w-auto float-left p-2' />
          <p className='font-semibold text-base pt-2'>{author.name}</p>
          <p className='text-gigText flex items-center'><IoLocationSharp /> {author.country}</p> 
        </div>
        <div className='ml-16'>
        <p className='flex'><FaStar /><FaStar /><FaStar /></p>
        <p className='mt-5 mb-10'>Great Work and On time delivery</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Reviews
