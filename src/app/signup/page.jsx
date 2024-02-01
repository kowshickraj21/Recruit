"use client"
import { useRouter } from 'next/navigation';
import React, {useState} from 'react'

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setWarning("Loading");

    const res = await fetch("/api/Users",{
      method: "POST",
      body: JSON.stringify({formData}),
      "content-type" : "application/json"
    });

    if(!res.ok){
      const response = await res.json();
      setWarning(response.message);
    }else{
      router.refresh();
      router.push('/login');
    }
  }
  return (
    <div className='m-auto flex flex-col items-center mt-40 '>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} method="post" className='flex flex-col items-center'>
        <input type="text" name="name" id='name' onChange={handleChange} value={formData.name} required={true} placeholder='Full Name' className='border m-3 p-2 pr-10'/>
        <input type="email" name="email" id='email' onChange={handleChange} value={formData.email} required={true} placeholder='Email' className='border m-3 p-2 pr-10'/>
        <input type="text" name="password" id='password' onChange={handleChange} value={formData.password} required={true} placeholder='Password' className='border m-3 p-2 pr-10'/>
        <button type="submit" className='border m-3 px-24 rounded-3xl py-3 bg-secondry text-white'>Register</button>
        <p>{warning}</p>
      </form>
    </div>
  )
}

export default Page
