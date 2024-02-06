import React from 'react'
import HomeNav from './HomeNav'
import fetchUser from '../api/Users/setDetails';

const HomePage = async () => {
    const user = await fetchUser()
  return (
    <div>
      <HomeNav picture={user.picture}/>
    </div>
  )
}

export default HomePage
