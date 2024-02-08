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
       await connectMongoDB();
       await Gigs.create(gig)
  }

  return (
    <div>
      <button className='text-lg font-medium'>Back to Home</button>
      <div>
      <h1 className='text-2xl font-bold m-10'>About your Gig</h1>
      <form action={handleSubmit} className='m-10'>
        <label htmlFor="title">Gig Title:</label>
        <input type="text" name="title" className='border' id="title" />
        <label htmlFor="description">Gig Description:</label>
        <input type="text" name="description" className='border' id="description" />
        <label htmlFor="hourly">Hourly Rate:</label>
        <input type="number" name="hourly" className='border' id="hourly" />
        <div>
          <h2>Basic Package:</h2>
          <label htmlFor="package1-info">Description</label>
          <input type="text" name='package1-info'/>
        </div>
        <input type="file" accept='image/*' name='image' />
        <button type="submit">Create Gig</button>
      </form>
    </div>  
    </div>
  )
}

export default page
