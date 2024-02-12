import React from 'react'
import HomeNav from './HomeNav'
import fetchUser from '../api/Users/setDetails';
import { connectMongoDB } from '@/models/mongodb';
import Gigs from '@/models/gigs';
import User from '@/models/user';
import GigCards from './GigCards';

const HomePage = async () => {
    const user = await fetchUser();
    await connectMongoDB();
    const gigs = await Gigs.find();
  return (
    <div>
      <HomeNav picture={user?.picture} id={user?.userId} postition="sticky"/>
      <h2 className='p-10 text-2xl font-bold'>Hi <span className='text-secondry'>{user.name}</span>, Check These Out!</h2>
      <section className='flex flex-row flex-wrap'>
      {gigs.map(async (Data) => {
      const imageData = Data.image
      const base64Image = Buffer.from(imageData).toString('base64');
      const image = (`data:image/png;base64,${base64Image}`);
      const author = await User.findOne({email: Data.email});
      const Author = JSON.stringify(author);
      const authorData = JSON.parse(Author);
      Data.image = null;
      const gig = JSON.stringify(Data);
      const gigData = JSON.parse(gig);
     return (
        <GigCards author={authorData} image={image} gigData={gigData} />
        )})}
        <p></p>
     </section>
    </div>
  )
}

export default HomePage
