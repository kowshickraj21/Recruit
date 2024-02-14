import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { connectMongoDB } from '@/models/mongodb';
import User from '@/models/user';
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const ProfileCard = async (props) => {
    await connectMongoDB();
    const profile = await User.findOne({userId: props.profileId})
  return (
    <div className='float-left h-full w-1/5 bg-white relative bottom-36 ml-16 rounded-xl shadow-2xl'>
      <Image src={profile.picture} width={250} height={200} alt="Profile Picture" className='rounded-full m-auto mt-8 w-auto' />
      <h2 className='text-center pt-7 text-2xl font-bold'>{profile.name}</h2>
      <p className='text-center pt-2 text-innerText '>@{profile.userId}</p>
      {profile.title?
      <p className='text-center mt-8 text-lg font-medium  '>{profile.title}</p>:
      <p className='text-center mt-8 text-lg font-medium'>Add a Job Title</p>}
      <p className='m-10 mb-5 opacity-75 flex'><IoLocationOutline className='text-2xl'/>{profile.state}, {profile.country}</p>
      <Link href={profile.linkedIn} target='_blank' className='m-10 my-5 opacity-75 flex hover:text-secondry hover:underline hover:opacity-100'><FaLinkedin className='text-2xl mr-1'/>LinkedIn</Link>
      <Link href={profile.gitHub} target='_blank' className='m-10 mt-5 opacity-75 flex hover:text-secondry hover:underline hover:opacity-100'><FaGithub className='text-2xl mr-1'/>GitHub</Link>
      </div>
  )
}

export default ProfileCard
