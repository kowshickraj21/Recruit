import React from 'react'
import Form from './form'
import fetchUser from '../api/Users/setDetails';
import HomeNav from '../(components)/HomeNav';

const Page = async() => {
  const user = await fetchUser();
  return (
    <div className='bg-grey h-full w-full'>
      <HomeNav picture={user.picture} id={user.userId}/>
      <div className='w-full m-auto bg-gray-100'>
        <h1 className='text-2xl font-bold p-7 text-center'>Create your <span className='text-secondry'>Recrute</span> Gig</h1>
        <Form />
      </div>  
    </div>
  )
}

export default Page
