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
    <div className='w-full h-svh bg-gray-200 flex items-center font-sans'>
    <div className='m-auto flex flex-col items-center px-5 lg:px-0 shadow-xl bg-white lg:w-1/4 w-5/6 lg:pt-10 pt-7 pb-5 rounded-md'>
      <h2 className='font-bold text-2xl mb-8 text-center'>Log In</h2>
      <Login />
      {searchParams.error?<p className='mt-5 font-medium'>*Invalid Credentials*</p>:null}
    </div>
    </div>
  )
}

export default Page
