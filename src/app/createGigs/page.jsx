import React from 'react'
import Form from './form'
import HomeNav from '../(components)/HomeNav';
const Page = () => {

  return (
    <div className='bg-grey h-full w-full'>
      <HomeNav />
      <div className='w-full m-auto bg-gray-100'>
        <h1 className='text-2xl font-bold p-7 text-center'>Create your <span className='text-secondry'>Recrute</span> Gig</h1>
        <Form />
      </div>  
    </div>
  )
}

export default Page
