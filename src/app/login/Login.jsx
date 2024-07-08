"use client"
import React from 'react'
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AuthButton from './OAuth'


const Login = () => {
  const router = useRouter();

    const handleSubmit = async (formData) => {
        const email = formData.get("email")
        const password = formData.get("password")
        try {
          const auth = await signIn("credentials",{
            email,
            password,
            redirect: true,
            callbackUrl: "localhost:3000"
          })
          if(auth.error == null){
            router.refresh();
            router.push('/');
          }
        }catch(e){
          console.log(e)
        }
      }
      
  return (
    <div className='flex flex-col items-center'>
    <form action={handleSubmit} className='flex flex-col items-center' >
        <input type="email" name="email" id='email' required={true} placeholder='Email' className='border m-3 p-2 w-full'/>
        <input type="text" name="password" id='password' required={true} placeholder='Password' className='border m-3 p-2 w-full'/>
        <button type="submit" className='border mt-5 rounded-md bg-secondry h-10 text-white w-full'>Log In</button>
      </form>
      <p className='mt-5'>or</p>
      <AuthButton />
      <p className='my-5'>Don&#39;t have an account? <Link href='/signup' className='underline'>Sign Up</Link></p>
      </div>
  )
}

export default Login
