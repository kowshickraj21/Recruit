import React from 'react'
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='py-4 px-2 flex flex-row items-center justify-between h-20 bg-opacity-100 sticky top-0 bg-white z-10 my-3'>
        <Link href={"/"}>Logo</Link>
      <ul className="hidden pl-20 list-none md:flex flex-row justify-evenly">
        <li className='px-10'>About</li>
        <li className='px-10'><Link href='/login'>Find Jobs</Link></li>
        <li className='px-10'><Link href='/login'>Hire</Link></li>
      </ul>
      <div className='flex'>
      <Link href='/signup'><button className='hidden md:block border mr-4 w-24 h-10 rounded-lg bg-white border-secondry text-secondry'>Sign Up</button></Link>
      <Link href='/login'><button className='border mr-2 w-24 h-10 rounded-lg bg-secondry text-white'>Log In</button></Link>
      </div>
      </nav>

  )
}

export default Nav
