import React from 'react';
import Link from 'next/link';
import { connectMongoDB } from '@/models/mongodb';
import User from '@/models/user';
import Gigs from '@/models/gigs';
import fetchUser from '@/app/api/Users/setDetails';
import HomeNav from '@/app/(components)/HomeNav';
import ProfileCard from './ProfileCard';

const page = async (props) => {
  const user = await fetchUser();
  await connectMongoDB();
  const profile = await User.findOne({userId:props.params.profileId})
  const gigs = await Gigs.find({email:profile.email})
  return (
    <div className='bg-gray-50 h-svh'>
      <HomeNav picture={user?.picture} id={user?.userId} />
      <div>
      <div className='bg-gray-200 h-72 w-full m-auto'>
      </div>
      <ProfileCard profileId={props.params.profileId}/>
      <div className='bg-gray-100 w-full h-16'></div>
      </div>
    </div>
  )
}

export default page
