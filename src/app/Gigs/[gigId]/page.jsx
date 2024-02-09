import React from 'react'
import HomeNav from '@/app/(components)/HomeNav';
import fetchUser from '@/app/api/Users/setDetails';
import { connectMongoDB } from '@/models/mongodb';
import Gigs from '@/models/gigs';
import User from '@/models/user';
import Image from 'next/image';
import OrderForm from '@/app/(components)/orderForm';
import { FaStar } from "react-icons/fa6";
import { IoChatboxEllipsesSharp } from "react-icons/io5";

const page = async (props) => {
    const user = await fetchUser(); 
    await connectMongoDB();
    const gig = await Gigs.findOne({_id :props.params.gigId});
    const imageData = gig.image
      const base64Image = Buffer.from(imageData).toString('base64');
      const image = (`data:image/png;base64,${base64Image}`);
      const author = await User.findOne({email: gig.email});
      const stringData = JSON.stringify(gig);
      const gigData = JSON.parse(stringData) 
  return (
    <div>
      <HomeNav picture={user.picture}/>
      <div className='flex flex-row justify-evenly mt-10'>
        <div className='w-1/2'>
          <div className='border-b-2'>
          <h2 className='font-semibold text-3xl text-gigText mt-5 p-5 leading-relaxed'>{gig.title}</h2>
          <div className=' my-3 ml-5 w-52'>
            <Image src={author.picture} width={45} height={30} alt='profile' className='rounded-full m-1 h-auto w-auto float-left p-2' />
            <p className='font-semibold text-gigText text-sm pt-4 cursor-pointer hover:underline'>{author.name}</p>
            <p className='py-1 text-sm flex flex-row align-middle font-semibold text-gigText cursor-pointer hover:underline'><FaStar className='w-8 mt-0.5' /> 5.0</p>
          </div>
          <br className='bg-black'/>
          </div>
          <div className='border-b-2 pb-10 '>
          <h2 className='font-semibold text-xl text-gigText mt-5 p-5'>About This Gig:</h2>
          <p className='p-5 indent-5 whitespace-pre-wrap'>{gig.description}</p>
          </div>
            <OrderForm gigData={gigData} />
        </div>
        <div className='w-2/5 h-svh sticky top-10'>
        <div className='w-full h-96 overflow-hidden bg-gray-100 mr-5' >
        <img src={image} className='object-fit m-auto h-96 w-full'/>
        </div>
        <div className=' w-full mt-5'>
          <div>
          <h2 className='font-semibold text-xl text-gigText mt-5 p-5 '>Contact Seller:</h2>
          <button className='h-12 w-1/2 m-auto mt-5 bg-black text-white border-black border font-semibold flex flex-row justify-center align-middle p-3 shadow-2xl active:text-black active:bg-white'>Contact Me<IoChatboxEllipsesSharp className='m-1' /></button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default page
