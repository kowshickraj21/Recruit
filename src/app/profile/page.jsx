import React from 'react';
import Image from 'next/image';
import fetchUser from '../api/Users/setDetails';
import Link from 'next/link';
import CreateId from '../(components)/CreateId';
import IdForm from '../(components)/IdForm';

const page = async () => {
  const user = await fetchUser()
  const Id = user.userId
  return (
    <div>
      <div className='w-full h-28'>
        <Link href={"/"}>Logo</Link>
      </div>
        <div className='flex flex-column align-middle justify-center'>
          <div className=' p-10 border m-10 w-1/4'>
            <Image src={user.picture} width={200} height={200} alt="Profile" className='rounded-full m-auto' />
          </div>
          <div className=' p-10 border m-10 ml-20 w-1/2 text-center'>
            <h2 className='text-2xl p-3'>{user.name}</h2>
            <p className='p-2'>{user.email}</p>
            {Id? <p>{Id}</p> : <CreateId><IdForm></IdForm></CreateId>}
          </div>
        </div>
        {Id? 
        <div className='flex flex-column align-middle justify-center'>
        <div className=' p-10 border m-10 w-1/4'>
          
        </div>
        <div className=' p-10 border m-10 ml-20 w-1/2 text-center'>
          <h2 className='text-2xl p-3'>Gigs</h2>
        </div>
      </div>: null}
        
    </div>
  )
}

export default page
