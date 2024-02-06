"use client"
import React,{ useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

const ProfileButton = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='mr-10 px-5 p-1'>
      <div onClick={() => setOpen(!open)} className='w-10 h-10 rounded-full bg-black'>
        <Image src={props.picture} width={500} height={500} alt="Profile" className='rounded-full' />
      </div>
      {(open)?<ul className='absolute w-32 p-2 top-20 right-10 bg-white border shadow-md'>
      <li className='p-1'><Link href='/profile'>View Profile</Link></li>
      <li className='p-1'><Link href='/createGigs'>Add Gigs</Link></li>
      <li className='p-1'><Link href='/viewGigs'>View Gigs</Link></li>
      <li className=' p-1 pt-5'><Link href='/api/auth/signout?callbackUrl=/'>log Out</Link></li>
      </ul>: null}
    </div>
  )
}

export default ProfileButton
