"use client"
import React,{ useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

const ProfileButton = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='md:mr-10 md:px-5 px-3 p-1 cursor-pointer'>
      <div onClick={() => setOpen(!open)} className=' relative w-10 h-10 rounded-full bg-black'>
        <Image src={props.picture} fill alt="Profile" className='rounded-full' />
      </div>
      {(open)?<ul className='absolute w-36 p-2 top-20 md:right-14 right-5 bg-white border shadow-md'>
      {(props.id)?
      <li className='p-1'><Link href={`/${props.id}`}>View Profile</Link></li>:
      <li className='p-1'><Link href='/createProfile'>Create Profile</Link></li>
      }
      {(props.id)?<li className='p-1'><Link href='/createGigs'>Add Gigs</Link></li>:null}
      <li className=' p-1 pt-5'><Link href='/api/auth/signout?callbackUrl=/'>log Out</Link></li>
      </ul>: null}
    </div>
  )
}

export default ProfileButton
