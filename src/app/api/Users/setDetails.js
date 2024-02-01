import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { connectMongoDB } from '@/models/mongodb';
import User from '@/models/user';

export default async function fetchUser(){
    const session = await getServerSession(options)
    await connectMongoDB();
    const user = await User.findOne({email: session?.user?.email})
    return user;
}