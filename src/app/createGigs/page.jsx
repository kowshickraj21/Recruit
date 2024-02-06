import React from 'react'
import { connectMongoDB } from '@/models/mongodb'
import Gigs from '@/models/gigs'
import fetchUser from '../api/Users/setDetails';

const page = async () => {
  const user = await fetchUser()
  const handleSubmit = async (formData) => {
    "use server"
    const image = formData.get('image')
    const imageReader = image.stream().getReader();
  const imageDataU8 = [];
  while (true){
    const {done,value} = await imageReader.read();
    if (done) break;
    imageDataU8.push(...value);
  }
  const imageBinary = Buffer.from(imageDataU8,'binary');
    const gig = {
      title: formData.get('title'),
      description: formData.get('description'),
      hourly: formData.get('hourly'),
      projectly: formData.get('projectly'),
      image: imageBinary,
      email: user.email,
    }
    console.log(imageBinary)
       await connectMongoDB();
       await Gigs.create(gig)
  }

  return (
    <div>
      <form action={handleSubmit}>
        <input type="text" name="title" className='border' id="title" />
        <input type="text" name="description" className='border' id="description" />
        <input type="number" name="hourly" className='border' id="hourly" />
        <input type="number" name="projectly" className='border' id="projectly" />
        <input type="file" accept='image/*' name='image' />
        <button type="submit">Create Gig</button>
      </form>
    </div>  
  )
}

export default page
