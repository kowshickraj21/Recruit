import React from 'react'
import Image from 'next/image';
import { FaStar } from "react-icons/fa6";
import fetchUser from '../api/Users/setDetails';
import Link from 'next/link';
import { db } from '@/drizzle/index';
import { user,gigs } from '@/drizzle/schema';
import { eq,not } from 'drizzle-orm';


const GigCards = async () => {
  const auth = await fetchUser();
  const gigList = await db.select().from(gigs).where(not(eq(gigs.email,auth.email)));

  return (
    <div className='flex w-full'>

    {gigList.map(async (gig,index) => {
      const author = await db.select().from(user).where(eq(user.email,gig.email));

      return (
      <Link href={`/Gigs/${gig.gigId}`} key={index} className='m-8 w-1/5 border rounded-2xl shadow-md hover:shadow-2xl cursor-pointer bg-white'>
          
          <Image src={gig.image} width={300} height={100} alt="Gig Image" className='object-fit rounded-xl w-full h-36 '/>
          
          <div className='flex flex-row align-middle my-2 mx-2 p-2'>
            <Image src={author[0]?.picture} width={30} height={25} alt='profile' className='rounded-full m-1 h-auto w-auto' />
            <p className='text-sm pt-2 px-1 font-semibold hover:underline'>{author[0]?.name}</p>
            </div>

            <p className='p-2 px-5 h-20 hover:underline'>{gig.title}</p>
            
            <div className='flex flex-row justify-between'>
              <p className='py-2 text-base px-3 flex flex-row align-middle font-semibold'><FaStar className='w-8 mt-0.5' /> 5.0</p>
              <div className="arrow h-5 w-5 mr-7" />
            </div>

      </Link>
     )})}
     
     <p></p> {/* hydration failed */}
    </div>
  )
}

export default GigCards