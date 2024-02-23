import React from 'react';
import Link from 'next/link';
import { connectMongoDB } from '@/models/mongodb';
import User from '@/models/user';
import fetchUser from '@/app/api/Users/setDetails';
import HomeNav from '@/app/(components)/HomeNav';
import ProfileCard from './ProfileCard';
import PostPage from './PostPage';
import GigPage from './GigPage';
import OrderPage from './OrderPage';

const page = async (props) => {
  const {params,searchParams} = props
  const user = await fetchUser();
  const pages = ["Posts","Gigs","Orders"]
  await connectMongoDB();
  const profile = await User.findOne({userId:params.profileId})
  const active = searchParams.active || "Posts";

  return (
    <div className='bg-gray-50 h-full'>
      <HomeNav picture={user?.picture} id={user?.userId} />
      <div>
      <div className='bg-gray-200 h-72 w-full m-auto'>
      </div>
      <ProfileCard profileId={props.params.profileId}/>
      <div className='bg-gray-100 w-full h-16 block'>
      <div className='flex space-x-5'>
      {pages.map((page,index)=> {
     return <Link href={`?active=${page}`} key={index} className={`relative left-10 p-4 text-xl font-semibold hover:border-b-2 hover:border-secondry hover:text-secondry cursor-pointer ${
      active === page ? "border-b-2 border-secondry text-secondry" : null}`}>{page}</Link>
      })}
      </div>
      </div>
      {(active === "Posts")?<PostPage />:(active === "Gigs")?<GigPage />:(active === "Orders")?<OrderPage />:null}
      </div>
    </div>
  )
}

export default page
