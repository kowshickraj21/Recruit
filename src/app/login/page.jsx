import React from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { authorize } from '../api/Users/auth';
import AuthButton from './OAuth'
import { signIn } from 'next-auth/react';

const Page = async () => {
  const authorized = await authorize();
  if(authorized){
    redirect(history.back());
  }

  const handleSubmit = async (formData) => {
    "use server"
    const email = formData.get("email")
    const password = formData.get("password")
    try {
      await signIn("credentials",{
        email,
        password,
        redirect: false,
      })
      if(res.error){
       console.log(e)
      }
      console.log(e)
    }catch(e){
      console.log(e)
    }
  }

  return (
    <div className='m-auto flex flex-col items-center mt-40'>
      <h2>Log In</h2>
      <form action={handleSubmit} method="post" className='flex flex-col items-center' >
        <input type="email" name="email" id='email' required={true} placeholder='Email' className='border m-3 p-2 pr-10'/>
        <input type="text" name="password" id='password' required={true} placeholder='Password' className='border m-3 p-2 pr-10'/>
        <button type="submit" className='border m-3 px-24 rounded-3xl py-3 bg-secondry text-white'>Log In</button>
        <p>Don&#39;t have an account?<Link href='/signup'>Sign Up</Link></p>
      </form>
      <AuthButton />
    </div>
  )
}

export default Page
