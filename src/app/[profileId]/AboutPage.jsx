"use client"
import React,{useState} from 'react'
import { GoPencil } from "react-icons/go";
import DescriptionModal from './descriptionModal'


const AboutPage = ({profile,isAuth}) => {
  
  const [editDescription,setEditDescription] = useState(false);
  
  return (
    <div className='h-full flex justify-end'>
      {
        editDescription? <DescriptionModal close={() => setEditDescription()} profile={profile} description={profile.description}/>:null
      }
      <div className='w-full mx-10 my-5 bg-white p-5 rounded-xl'>
        <div className='flex justify-between items-center mb-10'>
          <h2 className='text-2xl font-semibold'>Descriprion:</h2>
          {isAuth?<button onClick={() => setEditDescription(true)}><GoPencil /></button>:null}
        </div>
        <p className='md:px-10 pg-5'>{profile?.description}</p>
      {/* <p>{profile.createdAt}</p> */}

      </div>
    </div>
  )
}

export default AboutPage
