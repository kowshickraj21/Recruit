"use client"
import React,{useState} from 'react'

const ProfileNav = (props) => {
    const [active, setActive] = useState()
    
    const changeActive = (newActive) => {
        active?.classList.remove("border-b-2","border-secondry","text-secondry")
        setActive(newActive)
        props.fetchActive(newActive.innerText)
        newActive.classList.add("border-b-2","border-secondry","text-secondry")
    }
  return (
    <div className='flex space-x-5'>
      <p className='relative left-10 p-4 text-xl font-semibold hover:border-b-2 hover:border-secondry hover:text-secondry cursor-pointer' onClick={(e) => changeActive(e.target)}>Posts</p>
      <p className='relative left-10 p-4 text-xl font-semibold hover:border-b-2 hover:border-secondry hover:text-secondry cursor-pointer' onClick={(e) => changeActive(e.target)}>Gigs</p>
      <p className='relative left-10 p-4 text-xl font-semibold hover:border-b-2 hover:border-secondry hover:text-secondry cursor-pointer' onClick={(e) => changeActive(e.target)}>Orders</p>
      </div>
  )
}

export default ProfileNav
