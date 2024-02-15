import React from 'react'
import Image from 'next/image';
import { FaStar } from "react-icons/fa6";
import Link from 'next/link';
import { connectMongoDB } from '@/models/mongodb';
import Gigs from '@/models/gigs';
import User from '@/models/user';

const GigCards = async () => {
  await connectMongoDB();
  const gigs = await Gigs.find();
  return (
    <div className='m-8 w-1/5 border rounded-2xl shadow-md hover:shadow-2xl cursor-pointer'>
    {gigs.map(async (gig) => {
      const base64Image = Buffer.from(gig.image).toString('base64');
      const image = (`data:image/png;base64,${base64Image}`);
      const author = await User.findOne({email: gig.email});
      const authorData = JSON.parse(JSON.stringify(author));
      const gigData = JSON.parse(JSON.stringify(gig))
      return (
      <Link href={`/Gigs/${gigData._id}`} >
          <Image src={image} width={300} height={100} alt="Gig Image" className='object-fit rounded-xl w-full h-36 '/>
      <div className='flex flex-row align-middle my-2 mx-2 p-2'>
      <Image src={author.picture} width={30} height={25} alt='profile' className='rounded-full m-1 h-auto w-auto' />
     <button className='text-sm pt-2 px-1 font-semibold hover:underline'>{author.name}</button>
     </div>
     <p className='p-2 px-5 h-20 hover:underline'>{gigData.title}</p>
     <div className='flex flex-row justify-between'>
     <p className='py-2 text-base px-3 flex flex-row align-middle font-semibold'><FaStar className='w-8 mt-0.5' /> 5.0</p>
     <div className="arrow h-5 w-5 mr-7">
      </div>
    </div>
     </Link>
     )})}
     <p></p>
     </div>
  )
}

export default GigCards