import React from 'react'
import HomeNav from './HomeNav'
import fetchUser from '../api/Users/setDetails';
import GigCards from './GigCards';
import ChatBox from './ChatBox';
import TagScroller from './tagScroller';

const HomePage = async ({ search }) => {
    const user = await fetchUser();
  return (
    <div className='bg-gray-100 h-full min-h-svh'>
      <HomeNav picture={user?.picture} id={user?.userId} postition="sticky" search={search}/>
      <TagScroller />
      {search ?
      <h2 className='p-10 text-2xl font-bold mt-5'>Results for <span className='text-secondry'>{search}</span></h2>
      :<h2 className='p-10 text-2xl font-bold mt-5'>Hi <span className='text-secondry'>{user?.name}</span>, Check These Out!</h2>}
      <section className='flex flex-row flex-wrap'>
        <GigCards search={search}/>
     </section>
     <ChatBox picture={user?.picture} name={user?.name} email={user?.email}/>
    </div>
  )
}

export default HomePage