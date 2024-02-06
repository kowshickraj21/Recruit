import { connectMongoDB } from '@/models/mongodb';
import User from '@/models/user';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

export async function findUser(Id){
    await connectMongoDB();
    const user = await User?.findOne({userID: Id})
    return user;
}

export async function addId(Id){
    const session = await getServerSession(options)
    await connectMongoDB();
    const user = await User?.findOneAndUpdate({email: session?.user?.email}, {UserID: Id})
    console.log(user)
    console.log(Id)
}