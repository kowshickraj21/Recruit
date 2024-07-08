import React from 'react'
import GigCards from '@/app/(components)/GigCards'

const GigPage = async({profile,isAuth}) => {
  console.log(profile)
  return (
    <div className='h-full flex justify-end'>
      <GigCards profile={profile}/>
    </div>
  )
}

export default GigPage
