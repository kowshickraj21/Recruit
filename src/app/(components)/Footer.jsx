import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full justify-between m-auto h-96 bg-black bg-opacity-90 text-white text-center flex p-20'>
      <div className=''>
        <h2 className='text-3xl font-bold'>Recrute.in</h2>
      </div>
      <div className='flex gap-16 mr-5'>
        <div>
        <h2 className='text-2xl pb-5 font-medium'>Categories</h2>
        <div className='text-left'>
        <p className='p-1'>Art</p>
        <p className='p-1'>Accounting</p>
        <p className='p-1'>Crypto</p>
        <p className='p-1'>Design</p>
        <p className='p-1'>Editing</p>
        <p className='p-1'>Support</p>
        </div>
        </div>
        <div>
        <h2 className='text-2xl font-medium pb-5 text-left'>Services</h2>
        <div className='text-left flex flex-col'>
        <Link href={"/login"} className='p-1'>Freelance</Link>
        <Link href={"/signup"} className='p-1'>Hire a Proffesional</Link>
        </div>
        </div>
        <div>
          {/* <h2>Contact</h2> */}
        </div>
      </div>
      </div>
  )
}

export default Footer
