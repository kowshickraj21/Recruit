import {db} from '@/drizzle/index.ts';
import {user} from '@/drizzle/schema.ts';
import { eq } from "drizzle-orm";

export default async function getProfile(profileId) {
    console.log("hi")
    const User = await db.select().from(user).where(eq(profileId,user.userId));
    return User;
}