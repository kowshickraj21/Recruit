"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { FaStar } from "react-icons/fa6";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const GigCards = (props) => {
  const [active, setActive] = useState(false)
  const router = useRouter()

  return (
      <button onClick={() => router.push(`/Gigs/${props.gigData._id}`)} className='m-8 w-1/5 border rounded-2xl shadow-md hover:shadow-2xl cursor-pointer' onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
          <Image src={props.image} width={300} height={100} alt="Gig Image" className='object-fit rounded-xl w-full h-36 '/>
      <div className='flex flex-row align-middle my-2 mx-2 p-2'>
      <Image src={props.author.picture} width={30} height={25} alt='profile' className='rounded-full m-1 h-auto w-auto' />
     <Link href={`/viewProfile/${props.author._id}`} className='text-sm pt-2 px-1 font-semibold hover:underline'>{props.author.name}</Link>
     </div>
     <p className='p-2 px-5 h-20 hover:underline'>{props.gigData.title}</p>
     <div className='flex flex-row justify-between'>
     <p className='py-2 text-base px-3 flex flex-row align-middle font-semibold'><FaStar className='w-8 mt-0.5' /> 5.0</p>
     <div className={active?"arrow h-5 w-5 mr-7 active":"arrow h-5 w-5 mr-7"}>
      </div>
    </div>
     </button>
  )
}

export default GigCards
