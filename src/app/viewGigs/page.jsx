import React from 'react'
import Gigs from '@/models/gigs'
import fetchUser from '../api/Users/setDetails'
import { connectMongoDB } from '@/models/mongodb'
import Image from 'next/image'

const page = async () => {
    "use server"
    const user = await fetchUser()
    connectMongoDB();
    const data = await Gigs.find({email: user.email})
  return (
    <div>
      {data.map((Data,index) => {
         const imageData = Data.image
         const base64Image = Buffer.from(imageData).toString('base64');
         const image = (`data:image/png;base64,${base64Image}`);
        return (
          <div key={index}>
          <p>{Data.title}</p>
        <Image src={image} width={500} height={500} alt="Profile"/>
        </div>
        )
      })}
    </div>
  )
}

export default page
