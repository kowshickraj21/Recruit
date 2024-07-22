import React from 'react';
import Link from 'next/link';
import {db} from '@/drizzle/index';
import {user} from '@/drizzle/schema';
import { eq } from "drizzle-orm";
import fetchUser from '@/app/api/Users/setDetails';
import HomeNav from '@/app/(components)/HomeNav';
import Nav from '../(components)/Nav';
import ProfileCard from './ProfileCard';
import AboutPage from './AboutPage';
import GigPage from './GigPage';

const page = async (props) => {
  const {params,searchParams} = props
  const User = await fetchUser();
  const profile = await db.select().from(user).where(eq(params.profileId,user.userId));
  const pages = ["About","Gigs"]
  const active = searchParams.active || "About";
  const isAuth = profile[0]?.email == User?.email;
  
  return (
    <div className='bg-gray-50 min-h-svh'>
      {User?<HomeNav picture={User?.picture} id={User?.userId} />:
      <Nav />}
      <div>
      <div className='bg-gray-200 h-72 w-full m-auto' />

      <ProfileCard profile={profile[0]} isAuth={isAuth}/>

      <div className='bg-gray-100 w-full h-16 block'>
      <div className='flex space-x-5'>
      {pages.map((page,index)=> {
          return <Link href={`?active=${page}`} key={index} className={`relative left-10 p-4 text-xl font-semibold hover:border-b-2 hover:border-secondry hover:text-secondry cursor-pointer ${
            active === page ? "border-b-2 border-secondry text-secondry" : null}`}>{page}</Link>
      })}
      </div>
      </div>
      {(active === "About")?<AboutPage isAuth={isAuth} profile={profile[0]}/>:(active === "Gigs")?<GigPage  isAuth={isAuth} profile={profile[0]}/>:null}
      </div>
    </div>
  )
}

export default page
