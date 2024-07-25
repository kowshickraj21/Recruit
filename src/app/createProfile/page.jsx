import React from 'react';
import HomeNav from '../(components)/HomeNav';
import Form from './form'
import fetchUser from '../api/Users/setDetails';


const Page = async() => {
  const User = await fetchUser();

  return (
    <div className='w-full h-full bg-gray-100'>
      <HomeNav picture={User.picture} id={User.userId}/>
      <div className='relative m-auto p-10 pb-32'>
        <h1 className='text-center font-semibold md:text-4xl text-2xl'>Create Your <span className='text-secondry'>Recrute</span> Profile</h1>
        <Form />
    </div>
    </div>
  )
}

export default Page
