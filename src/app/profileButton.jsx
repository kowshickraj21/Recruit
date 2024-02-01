"use client"
import React,{ useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const ProfileButton = () => {
  const picture = useSelector((state) => state.user.picture)
  const [open, setOpen] = useState(false);
  return (
    <div className='mr-8'>
      <div onClick={() => setOpen(!open)} className='w-10 h-10 rounded-full bg-black'>
        <Image src={picture} width={500} height={500} alt="Profile" className='rounded-full' />
      </div>
      {(open)?<ul className='absolute w-28 right-3 bg-white'>
      <li><Link href='/profile'>View Profile</Link></li>
      <li><Link href='/createGigs'>Add Gigs</Link></li>
      <li className='pt-5'><Link href='/api/auth/signout?callbackUrl=/'>log Out</Link></li>
      </ul>: null}
    </div>
  )
}

export default ProfileButton
