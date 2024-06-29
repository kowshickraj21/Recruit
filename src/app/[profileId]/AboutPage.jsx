import React from 'react'
import { GoPencil } from "react-icons/go";


const AboutPage = ({profile,isAuth}) => {
  console.log(profile)
  return (
    <div className='min-h-96 flex justify-end'>
      <div className='w-full mx-10 my-5 bg-white p-5 rounded-xl'>
        <div className='flex justify-between items-center '>
          <h2>Descriprion:</h2>
          {isAuth?<button><GoPencil /></button>:null}
        </div>
        {profile.description ? <p>{profile.description}</p>:<p>Hello EveryOne I am new to recrute</p>}
      {/* <p>{profile.createdAt}</p> */}

      </div>
    </div>
  )
}

export default AboutPage
