"use client"
import { useRouter } from 'next/navigation';
import {useState} from 'react';
import signUp from './signup';
import AuthButton from '../login/OAuth'
import Link from 'next/link';

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = async () => {
    setWarning("");
    setWarning("Loading...");
    console.log("hello")
    console.log("OK");
    const signup = await signUp(formData);
    if(signup){
    router.push('/login');
    }else{
      setWarning("Already Exists");
    }
  }

  return (
    <div className='w-full h-svh bg-gray-100 flex items-center justify-center font-sans'>
    <div className='m-auto flex flex-col items-center bg-white lg:w-1/4 w-3/4 py-10 rounded-md'>
      <h2 className='my-5 text-2xl font-semibold'>Create a New Account</h2>
      <div className='flex flex-col items-center'>
        <input type="text" name="name" id='name' onChange={handleChange} required={true} placeholder='Full Name' className='border m-3 p-2 pr-10'/>
        <input type="email" name="email" id='email' onChange={handleChange} required={true} placeholder='Email' className='border m-3 p-2 pr-10'/>
        <input type="text" name="password" id='password' onChange={handleChange} required={true} placeholder='Password' className='border m-3 p-2 pr-10'/>
        <button type="submit" className='border mt-5 rounded-md bg-secondry h-10 text-white w-full' onClick={() => handleSubmit()}>Register</button>
        <p>{warning}</p>
      </div>
      <p className='mt-5'>or</p>
      <AuthButton />
      <Link href="/login" className='hover:underline'>Already have an account?</Link>
    </div>
    </div>
  )
}

export default Page
