import React from 'react';
import { connectMongoDB } from '@/models/mongodb';
import User from '@/models/user';
import Gigs from '@/models/gigs';
import fetchUser from '@/app/api/Users/setDetails';
import HomeNav from '@/app/(components)/HomeNav';
import ProfileCard from './ProfileCard';
import ProfileNav from './ProfileNav';

const page = async (props) => {
  const user = await fetchUser();
  await connectMongoDB();
  const profile = await User.findOne({userId:props.params.profileId})
  const gigs = await Gigs.find({email:profile.email})

  const getActive = async (active) => {
    "use server"
    return active;
  }
  const ShowActive = () => {
    {getActive()?console.log("ok"):console.log("nope")}
  }

  return (
    <div className='bg-gray-50 h-full'>
      <HomeNav picture={user?.picture} id={user?.userId} />
      <div>
      <div className='bg-gray-200 h-72 w-full m-auto'>
      </div>
      <ProfileCard profileId={props.params.profileId}/>
      <div className='bg-gray-100 w-full h-16 block'>
      <ProfileNav fetchActive={getActive}/>
      </div>
      </div>
      <ShowActive />
    </div>
  )
}

export default page
