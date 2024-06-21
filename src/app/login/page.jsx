import React from 'react';
import { redirect } from 'next/navigation';
import { authorize } from '../api/Users/auth';
import Login from './Login'

const Page = async ({searchParams}) => {
  const authorized = await authorize();
  if(authorized){
    redirect('/');
  }

  return (
    <div className='w-full h-svh bg-gray-100 flex items-center font-sans'>
    <div className='m-auto flex flex-col items-center bg-white lg:w-1/4 w-3/4 pt-10 pb-5 rounded-md'>
      <h2 className='font-semibold text-2xl mb-8'>Log In</h2>
      <Login />
      {searchParams.error?<p className='mt-5 font-medium'>*Invalid Credentials*</p>:null}
    </div>
    </div>
  )
}

export default Page
