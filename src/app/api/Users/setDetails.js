import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import {db} from '@/drizzle';
import { user } from '@/drizzle/schema';
import { eq } from "drizzle-orm";

export default async function fetchUser(){
    const session = await getServerSession(options)
    const User = await db.select().from(user).where(eq(user.email, session?.user?.email));
    return User[0];
}