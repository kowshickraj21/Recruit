"use client"
import React from 'react'
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const Login = () => {

    const handleSubmit = async (formData) => {
        const email = formData.get("email")
        const password = formData.get("password")
        try {
          await signIn("credentials",{
            email,
            password,
            redirect: true,
            callbackUrl:"http://localhost:3000"
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
    <form action={handleSubmit} className='flex flex-col items-center' >
        <input type="email" name="email" id='email' required={true} placeholder='Email' className='border m-3 p-2 pr-10'/>
        <input type="text" name="password" id='password' required={true} placeholder='Password' className='border m-3 p-2 pr-10'/>
        <button type="submit" className='border m-3 px-24 rounded-3xl py-3 bg-secondry text-white'>Log In</button>
        <p>Don&#39;t have an account?<Link href='/signup'>Sign Up</Link></p>
      </form>
  )
}

export default Login
