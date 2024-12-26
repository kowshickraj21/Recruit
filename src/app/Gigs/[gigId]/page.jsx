import React from 'react'
import HomeNav from '@/app/(components)/HomeNav';
import fetchUser from '@/app/api/Users/setDetails';
import Link from 'next/link';
import Image from 'next/image';
import OrderForm from './orderForm';
import { FaStar } from "react-icons/fa6";
import ContactBtn from './ContactBtn';
import ChatBox from '@/app/(components)/ChatBox'
import { db } from '@/drizzle/index';
import { user,gigs } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';
import Nav from '@/app/(components)/Nav';

const page = async (props) => {
    const auth = await fetchUser(); 
    const gig = await db.select().from(gigs).where(eq(gigs.gigId,props.params.gigId));
    const author = await db.select().from(user).where(eq(user.email,gig[0].email));

  return (
    <div className=''>

      {auth?<HomeNav picture={auth?.picture} id={auth?.userId}/>:
      <Nav />}
      <div className='flex lg:flex-row-reverse flex-col justify-evenly mt-10'>
      <div className='lg:w-2/5 w-full lg:h-svh lg:sticky lg:top-20'>
        <div className='w-full lg:h-96 h-72 md:h-80 relative overflow-hidden bg-gray-100 mr-5' >
        <Image src={gig[0].image} fill className='object-fit m-auto h-96 w-full' alt='gig Image'/>
        </div>
        <div className='w-full mt-5 lg:block hidden'>
          <h2 className='font-semibold text-xl text-gigText mt-5 p-5'>Contact Seller:</h2>
          <ContactBtn author={author[0]}/>
        </div>
        </div>
        
        <div className='lg:w-1/2 w-full'>
          <div className='border-b-2'>
          <h2 className='font-semibold text-3xl text-gigText mt-5 p-5 leading-relaxed'>{gig[0].title}</h2>

          <div className='lg:block flex justify-between items-center my-3 ml-5 lg:w-52 w-full'>
            <div>
            <Image src={author[0].picture} width={45} height={30} alt='profile' className='rounded-full mx-1 h-auto w-auto float-left p-2' />
            <Link href={`/${author[0].userId}`} className='font-semibold text-gigText text-sm pt-4 cursor-pointer hover:underline'>{author[0].name}</Link>
            <p className='py-1 text-sm flex flex-row align-middle font-semibold text-gigText cursor-pointer hover:underline'><FaStar className='w-8 mt-0.5' /> 5.0</p>
            </div>
            <div className="lg:hidden w-1/2">
            <ContactBtn author={author[0]}/>
            </div>
          </div>

          <br className='bg-black'/>

          </div>
          <div className='border-b-2 pb-10 '>
          <h2 className='font-semibold text-xl text-gigText mt-5 p-5'>About This Gig:</h2>
          <p className='p-5 indent-5 whitespace-pre-wrap'>{gig[0].description}</p>
          </div>

            <OrderForm gigData={gig[0]} />
        </div>

      </div>
     {auth?<ChatBox picture={auth.picture} name={auth.name} email={auth.email}/>:null}
    </div>
  )
}

export default page
