"use client"
import React from 'react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

const AuthButton = () => {
  return (
      <button onClick={() => signIn("google",{ callbackUrl: '/'})} type="submit" className=" bg-white border w-full border-black h-10 flex flex-row rounded-md my-5 items-center justify-center" ><Image loading="lazy" height={20} width={20} id="provider-logo" src="https://authjs.dev/img/providers/google.svg" alt='google'/><span className='ml-2 text-sm'>Continue with Google</span></button>
  )
}

export default AuthButton
