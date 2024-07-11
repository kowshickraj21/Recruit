"use client"
import React,{useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import TitleModal from './titleModal'

const ProfileCard = ({profile,isAuth}) => {
  
    const [editTitle,setEditTitle] = useState(false);
  return (
    <div>
    {
      editTitle ? <TitleModal close={() => setEditTitle()} profile={profile}/> : null
    }
    {profile?
    <div className='lg:float-left h-full lg:w-1/5 w-full bg-white relative bottom-36 lg:ml-16 rounded-xl lg:shadow-2xl -mb-32 py-5 lg:py-0'>
      <div className='relative w-32 h-32 m-auto rounded-full mt-8'>
      <Image src={profile?.picture} fill alt="Profile Picture" className='rounded-full'/>
      </div>
      <h2 className='text-center pt-7 text-2xl font-bold'>{profile?.name}</h2>
      <p className='text-center pt-2 text-innerText '>@{profile?.userId}</p>

      {profile?.title?<p className='text-center mt-8 text-lg font-medium'>{profile?.title}</p>: null}
      {(profile?.title && isAuth)?<p className='text-center opacity-50 flex justify-center items-center hover:underline cursor-pointer' onClick={() => setEditTitle(true)}>Edit Title <GoPencil /></p>:null}
      {(!profile?.title && isAuth)?<p className='text-center mt-8 text-lg font-medium cursor-pointer hover:underline' onClick={() => setEditTitle(true)}>Add a Job Title</p>:null}
      <div className='flex flex-col justify-center items-center lg:items-start m-10 gap-4 opacity-75'>
      <p className='flex text-center'><IoLocationOutline className='text-2xl'/>{profile?.state}, {profile?.country}</p>
      <Link href={profile?.linkedIn} target='_blank' className=' flex hover:text-secondry hover:underline hover:opacity-100'><FaLinkedin className='text-2xl mr-1'/>LinkedIn</Link>
      <Link href={profile?.gitHub} target='_blank' className='flex hover:text-secondry hover:underline hover:opacity-100'><FaGithub className='text-2xl mr-1'/>GitHub</Link>
      </div>
      </div>
      :null}
      </div>
  )
}

export default ProfileCard
