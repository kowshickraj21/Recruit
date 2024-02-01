"use client"
import React, {useState} from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn("credentials",{
        email,
        password,
        redirect: false,
      })
      if(res.error){
        setWarning("Invalid credentials");
      }
      setWarning("Well Done");
    }catch(e){
      setWarning("Something went wrong");
    }
  }

  return (
    <div className='m-auto flex flex-col items-center mt-40'>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit} method="post" className='flex flex-col items-center' >
        <input type="email" name="email" id='email' onChange={(e) => setEmail(e.target.value)} value={email} required={true} placeholder='Email' className='border m-3 p-2 pr-10'/>
        <input type="text" name="password" id='password' onChange={(e) => setPassword(e.target.value)} value={password} required={true} placeholder='Password' className='border m-3 p-2 pr-10'/>
        <p>{warning}</p>
        <button type="submit" className='border m-3 px-24 rounded-3xl py-3 bg-secondry text-white'>Log In</button>
        <p>Don't have an account?<Link href='/signup'>Sign Up</Link></p>
      </form>
      <button onClick={() => signIn("google",{ callbackUrl: '/'})} type="submit" className="button bg-white border flex flex-row m-10 px-5 rounded-full" ><img loading="lazy" height="24" width="24" id="provider-logo" src="https://authjs.dev/img/providers/google.svg" className='ml-5 py-4'/><span className='pl-5 py-4 mr-5'>Continue with Google</span></button>
    </div>
  )
}

export default Page
