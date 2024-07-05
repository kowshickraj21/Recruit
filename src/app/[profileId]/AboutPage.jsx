import React from 'react'
import { GoPencil } from "react-icons/go";


const AboutPage = ({profile,isAuth}) => {
  
  return (
    <div className='h-full flex justify-end'>
      <div className='w-full mx-10 my-5 bg-white p-5 rounded-xl'>
        <div className='flex justify-between items-center mb-10'>
          <h2 className='text-2xl font-semibold'>Descriprion:</h2>
          {isAuth?<button><GoPencil /></button>:null}
        </div>
        <p className='md:px-10 pg-5'>{profile.description ? profile.description :"Hello EveryOne! I am new to recrute"}</p>
      {/* <p>{profile.createdAt}</p> */}

      </div>
    </div>
  )
}

export default AboutPage
