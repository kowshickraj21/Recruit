import React from 'react'
import HomeNav from '@/app/(components)/HomeNav';
import fetchUser from '@/app/api/Users/setDetails';
import Link from 'next/link';
import Image from 'next/image';
import OrderForm from '@/app/(components)/orderForm';
import { FaStar } from "react-icons/fa6";
import ContactBtn from './ContactBtn';
import ChatBox from '@/app/(components)/ChatBox'
import { db } from '@/drizzle/index';
import { user,gigs } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';

const page = async (props) => {
    const auth = await fetchUser(); 
    const gig = await db.select().from(gigs).where(eq(gigs.gigId,props.params.gigId));
    const author = await db.select().from(user).where(eq(user.email,gig[0].email));

  return (
    <div>
      <HomeNav picture={auth?.picture}/>
      <div className='flex flex-row justify-evenly mt-10'>
        <div className='w-1/2'>
          <div className='border-b-2'>
          <h2 className='font-semibold text-3xl text-gigText mt-5 p-5 leading-relaxed'>{gig[0].title}</h2>
          <div className=' my-3 ml-5 w-52'>
            <Image src={author[0].picture} width={45} height={30} alt='profile' className='rounded-full m-1 h-auto w-auto float-left p-2' />
            <Link href={`/${author[0].userId}`} className='font-semibold text-gigText text-sm pt-4 cursor-pointer hover:underline'>{author[0].name}</Link>
            <p className='py-1 text-sm flex flex-row align-middle font-semibold text-gigText cursor-pointer hover:underline'><FaStar className='w-8 mt-0.5' /> 5.0</p>
          </div>
          <br className='bg-black'/>
          </div>
          <div className='border-b-2 pb-10 '>
          <h2 className='font-semibold text-xl text-gigText mt-5 p-5'>About This Gig:</h2>
          <p className='p-5 indent-5 whitespace-pre-wrap'>{gig[0].description}</p>
          </div>
            <OrderForm gigData={gig[0]} />
        </div>
        <div className='w-2/5 h-svh sticky top-10'>
        <div className='w-full h-96 overflow-hidden bg-gray-100 mr-5' >
        <img src={gig[0].image} className='object-fit m-auto h-96 w-full'/>
        </div>
        <div className=' w-full mt-5'>
          <div>
          <h2 className='font-semibold text-xl text-gigText mt-5 p-5 '>Contact Seller:</h2>
          <ContactBtn author={author[0]}/>
          </div>
        </div>
        </div>
      </div>
     <ChatBox picture={auth.picture} name={auth.name} email={auth.email}/>
    </div>
  )
}

export default page
