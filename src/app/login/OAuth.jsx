"use client"
import React from 'react';
import { signIn } from 'next-auth/react';

const AuthButton = () => {
  return (
    <div>
      <button onClick={() => signIn("google",{ callbackUrl: '/'})} type="submit" className="button bg-white border flex flex-row m-10 px-5 rounded-full" ><img loading="lazy" height="24" width="24" id="provider-logo" src="https://authjs.dev/img/providers/google.svg" alt='google' className='ml-5 py-4'/><span className='pl-5 py-4 mr-5'>Continue with Google</span></button>
    </div>
  )
}

export default AuthButton
