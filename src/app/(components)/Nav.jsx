import React from 'react'
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='py-4 flex flex-row items-center justify-between h-20 bg-opacity-100 sticky top-0 bg-white z-10 my-3'>
        <div>Logo</div>
      <ul className="pl-10 list-none flex flex-row justify-evenly">
        <li className='px-10'>About</li>
        <li className='px-10'><Link href='/login'>Find Jobs</Link></li>
        <li className='px-10'>Blog</li>
        <li className='px-10'>Contact</li>
      </ul>
      <Link href='/login'><button className='border mr-4 w-28 h-10 rounded-lg bg-secondry text-white'>Log In</button></Link>
      </nav>
  )
}

export default Nav
