import React from 'react'
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='py-8 px-2 flex flex-row items-center justify-between h-20 bg-opacity-100 sticky top-0 bg-white z-0 mb-3'>
        <Link href={"/"}>Logo</Link>
      <ul className="hidden pl-20 list-none md:flex flex-row justify-evenly">
        <li className='px-10'>About</li>
        <li className='px-10'><Link href='/login'>Find Jobs</Link></li>
        <li className='px-10'><Link href='/login'>Hire</Link></li>
      </ul>
      <div className='flex'>
      <Link href='/signup'><button className='hidden md:block border-2 mr-4 w-28 h-10 rounded-3xl border-secondry text-secondry'>Sign Up</button></Link>
      <Link href='/login'><button className='border-2 border-secondry mr-2 md:w-24 md:h-10 h-9 w-28 text-sm md:text-base rounded-3xl bg-secondry text-white'>Log In</button></Link>
      </div>
      </nav>

  )
}

export default Nav
