"use client";
import React from 'react'
import ProfileButton from '../profileButton';
import Link from 'next/link';
import { setUser } from '@/lib/features/userSlice';
import { useDispatch } from 'react-redux';


const HomeNav = (props) => {
  const dispatch = useDispatch();
  dispatch(setUser({
    name:props.name,
    email:props.email,
    picture:props.picture
  }));
  return (
      <nav className='py-4 flex flex-row items-center justify-between bg-transparent sticky top-0'>
        <div>Logo</div>
      <ul className="pl-10 list-none flex flex-row justify-evenly">
        <li className='px-10'><Link href='/login'>Find Jobs</Link></li>
        <li className='px-10'>Blog</li>
        <li className='px-10'>Contact</li>
      </ul>
      <ProfileButton />
    </nav>
  )
}

export default HomeNav
