import React from 'react'
import HomeNav from './HomeNav'
import fetchUser from '../api/Users/setDetails';
import GigCards from './GigCards';
import ChatBox from './ChatBox';

const HomePage = async () => {
    const user = await fetchUser();
  return (
    <div className='bg-gray-100 h-svh'>
      <HomeNav picture={user?.picture} id={user?.userId} postition="sticky"/>
      <h2 className='p-10 text-2xl font-bold mt-5'>Hi <span className='text-secondry'>{user?.name}</span>, Check These Out!</h2>
      <section className='flex flex-row flex-wrap'>
        <GigCards />
     </section>
     <ChatBox picture={user?.picture} name={user?.name}/>
    </div>
  )
}

export default HomePage