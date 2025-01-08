import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full justify-between m-auto md:h-96 bg-black bg-opacity-90 text-white text-center md:flex md:p-20 p-5'>
      <div className=''>
        <h2 className='md:text-3xl text-2xl font-bold'>Recruit</h2>
      </div>
      <div className='md:flex md:gap-16 mr-5'>
        <div className='mt-7 md:mt-0'>
        <h2 className='md:text-2xl text-xl md:pb-5 pb-2 font-medium'>Categories</h2>
        <div className='md:text-left'>
        <p className='p-1'>Art</p>
        <p className='p-1'>Accounting</p>
        <p className='p-1'>Crypto</p>
        <p className='p-1'>Design</p>
        <p className='p-1'>Editing</p>
        <p className='p-1'>Support</p>
        </div>
        </div>
        <div className='mt-7 md:mt-0'>
        <h2 className='md:text-2xl text-xl font-medium md:pb-5 pb-2 md:text-left'>Services</h2>
        <div className=' md:text-left flex flex-col'>
        <Link href={"/login"} className='p-1'>Freelance</Link>
        <Link href={"/signup"} className='p-1'>Hire a professional</Link>
        </div>
        </div>
        <div className='mt-7 md:mt-0'>
          <h2 className='md:text-2xl text-xl font-medium md:pb-5 pb-2'>Contact</h2>
          <p>email:recruit@gmail.com</p>
          <p>phone:+987654321</p>
        </div>
      </div>
      </div>
  )
}

export default Footer
