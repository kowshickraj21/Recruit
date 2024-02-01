import React from 'react'
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import HomeNav from './(components)/HomeNav';
import Nav from './(components)/Nav';
import fetchUser from './api/Users/setDetails';


const  Navbar = async () => {
  const session = await getServerSession(options)
  const user = await fetchUser()
  return (
    <div>
      {session ? <HomeNav name={user.name} email={user.email} picture={user.picture}/> : <Nav />}
    </div>
  )
}

export default Navbar
