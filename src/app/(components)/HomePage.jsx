import React from 'react'
import HomeNav from './HomeNav'
import fetchUser from '../api/Users/setDetails';
import GigCards from './GigCards';

const HomePage = async () => {
    const user = await fetchUser();
  return (
    <div>
      <HomeNav picture={user?.picture} id={user?.userId} postition="sticky"/>
      <h2 className='p-10 text-2xl font-bold'>Hi <span className='text-secondry'>{user.name}</span>, Check These Out!</h2>
      <section className='flex flex-row flex-wrap'>
        <GigCards />
     </section>
    </div>
  )
}

export default HomePage