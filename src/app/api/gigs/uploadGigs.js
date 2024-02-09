"use server"
import { connectMongoDB } from '@/models/mongodb'
import Gigs from '@/models/gigs'
import fetchUser from '../Users/setDetails';

export async function uploadGigs(formData){
    const user = await fetchUser()
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
      delivery: formData.get('fastDelivery'),
      image: imageBinary,
      email: user.email,
    }
       await connectMongoDB();
       await Gigs.create(gig)
}