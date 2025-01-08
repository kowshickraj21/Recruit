"use client";
import React, { useState } from 'react'
import ProfileButton from './profileButton';
import Link from 'next/link';
import { IoSearch,IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import Notification from './notification';
import logo from '@/assets/Logo.png'
import Image from 'next/image';

const HomeNav = (props) => {
  const [open,setOpen] = useState(false);
  const [searchTitle,setSearch] = useState("");

  return (
      <nav className='py-5 flex flex-row items-center justify-between bg-white sticky top-0 z-10'>
        <Link href="/" className='ml-5 pr-5 w-22 object-contain overflow-hidden relative'><Image src={logo} alt="logo" width={100} height={50}/></Link>
      <div className=" w-3/5 lg:flex hidden flex-row border rounded-md">
        <input type="text" className=' p-3 w-11/12 placeholder: text-innerText pl-7' placeholder='Search for Freelancers' value={searchTitle} onChange={(e) => setSearch(e.target.value)}/>
        <Link href={`/?s=${searchTitle}`} className='w-1/12 flex justify-center items-center border-l-2 bg-secondry text-white'><FaSearch /></Link>
      </div>
      <ul className="pl-10 list-none flex flex-row items-center ">
        <li className='lg:hidden p-2' onClick={() => setOpen(true)}><IoSearch className='w-7 h-7'/></li>
        <li className='p-2'><Notification /></li>
        {/* <li className='lg:block hidden md:px-3 p-2'><IoCartOutline className='w-7 h-7'/></li> */}
        <li><ProfileButton picture={props?.picture} id={props?.id}/></li>
      </ul>
      {open?
      <div className="absolute bg-black bg-opacity-80 w-full h-lvh top-0 px-10 py-7 z-20">
        <div className='text-white w-full flex justify-end mb-16'><IoClose className='w-8 h-8' onClick={() => setOpen(false)}/></div>
      <div className='w-full flex justify-center'>
          <input type="text" className='w-4/5 h-10 rounded-l-md' placeholder='Search for Freelancers' value={searchTitle} onChange={(e) => setSearch(e.target.value)}/>
          <button className='w-14 h-10 bg-secondry flex justify-center items-center rounded-r-md'><FaSearch className='text-white'/></button>
        </div>
      </div>
      :null}
      
      </nav>
  )
}

export default HomeNav
