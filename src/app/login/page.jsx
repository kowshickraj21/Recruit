import React from 'react';
import { redirect } from 'next/navigation';
import { authorize } from '../api/Users/auth';
import AuthButton from './OAuth'
import Login from './Login'

const Page = async ({searchParams}) => {
  const authorized = await authorize();
  if(authorized){
    redirect('/');
  }

  return (
    <div className='m-auto flex flex-col items-center mt-40'>
      <h2>Log In</h2>
      <Login />
      {searchParams.error?<p>Invalid Credentials</p>:null}
      <AuthButton />
    </div>
  )
}

export default Page
