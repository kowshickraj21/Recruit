import React from 'react'
import Image from 'next/image';
import { FaStar } from "react-icons/fa6";
import fetchUser from '../api/Users/setDetails';
import Link from 'next/link';
import { db } from '@/drizzle/index';
import { user,gigs } from '@/drizzle/schema';
import { eq,not, like } from 'drizzle-orm';


const GigCards = async ({ profile,search }) => {
  const auth = await fetchUser();
  const gigList = (profile)?await db.select().from(gigs).where(eq(gigs.email,profile.email)):
  (search)?await await db.select().from(gigs).where(like(gigs.title, `%${search}%`)):await db.select().from(gigs).where(not(eq(gigs.email,auth.email)));

  return (
    <div className='flex w-full sm:flex-row flex-col items-center'>

    {gigList.map(async (gig,index) => {
      const author = await db.select().from(user).where(eq(user.email,gig.email));

      return (
      <Link href={`/Gigs/${gig.gigId}`} key={index} className={`m-8 min-w-20 border rounded-2xl shadow-md hover:shadow-2xl cursor-pointer h-80 bg-white ${profile?'lg:w-1/4 w-4/5':'lg:w-1/5 w-3/5'}`}>
          
          <Image src={gig.image} width={300} height={100} alt="Gig Image" className='object-fit rounded-xl w-full h-36 '/>
          
          <div className='flex justify-between flex-col h-1/2'>
            <div className='flex align-middle mt-2 mx-2 p-2'>
            <Image src={author[0]?.picture} width={30} height={25} alt='profile' className='rounded-full m-1 h-auto w-auto' />
            <p className='text-sm pt-2 px-1 font-semibold hover:underline'>{author[0]?.name}</p>
            </div>

            <p className=' px-5 hover:underline'>{gig.title}</p>
            
            <div className='flex flex-row justify-between'>
              <p className='py-2 text-base px-3 flex flex-row align-middle font-semibold'><FaStar className='w-8 mt-0.5' /> 5.0</p>
              <div className="arrow h-5 w-5 mr-7" />
            </div>
            </div>

      </Link>
     )})}
     
     <p></p> {/* hydration failed */}
    </div>
  )
}

export default GigCards