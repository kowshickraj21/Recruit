"use client";
import React from 'react'
import ProfileButton from './profileButton';
import Link from 'next/link';
import { IoSunny } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

const HomeNav = (props) => {
  return (
      <nav className='py-5 flex flex-row items-center justify-between bg-white sticky top-0 z-10'>
        <Link href="/" className='ml-5 pr-5'>logo</Link>
      <form className=" w-3/5 flex flex-row border rounded-md">
        <input type="text" className=' p-3 w-11/12 placeholder: text-innerText pl-7' placeholder='Search for Freelancers'/>
        <button className='w-1/12 px-7 border-l-2 bg-secondry text-white'><FaSearch /></button>
      </form>
      <ul className="pl-10 list-none flex flex-row">
      <li className='px-3 p-3'><IoSunny className='w-6 h-6'/></li>
        <li className='px-3 p-3'><FiMessageSquare className='w-6 h-6'/></li>
        <li className='px-3 p-2'><IoCartOutline className='w-7 h-7'/></li>
        <li><ProfileButton picture={props.picture} id={props.id}/></li>
      </ul>
      
    </nav>
  )
}

export default HomeNav
