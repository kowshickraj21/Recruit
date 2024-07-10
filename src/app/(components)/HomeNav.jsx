"use client";
import React, { useState } from 'react'
import ProfileButton from './profileButton';
import Link from 'next/link';
import { IoCartOutline,IoSearch,IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import Notification from './notification'

const HomeNav = (props) => {
  const [open,setOpen] = useState(false);

  return (
      <nav className='py-5 flex flex-row items-center justify-between bg-white sticky top-0 z-10'>
        <Link href="/" className='ml-5 pr-5'>logo</Link>
      <form className=" w-3/5 lg:flex hidden flex-row border rounded-md">
        <input type="text" className=' p-3 w-11/12 placeholder: text-innerText pl-7' placeholder='Search for Freelancers'/>
        <button className='w-1/12 px-7 border-l-2 bg-secondry text-white'><FaSearch /></button>
      </form>
      <ul className="pl-10 list-none flex flex-row items-center ">
        <li className='lg:hidden p-2' onClick={() => setOpen(true)}><IoSearch className='w-7 h-7'/></li>
        <li className='p-2'><Notification /></li>
        <li className='lg:block hidden md:px-3 p-2'><IoCartOutline className='w-7 h-7'/></li>
        <li><ProfileButton picture={props?.picture} id={props?.id}/></li>
      </ul>
      {open?
      <modal className="absolute bg-black bg-opacity-80 w-full h-lvh top-0 px-10 py-7 z-20">
        <div className='text-white w-full flex justify-end mb-16'><IoClose className='w-8 h-8' onClick={() => setOpen(false)}/></div>
      <form className='w-full flex justify-center'>
          <input type="text" className='w-4/5 h-10 rounded-l-md'/>
          <button className='w-14 h-10 bg-secondry flex justify-center items-center rounded-r-md'><FaSearch className='text-white'/></button>
        </form>
      </modal>
      :null}
      
      </nav>
  )
}

export default HomeNav
