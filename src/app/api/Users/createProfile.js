"use server"
import {db} from '@/drizzle/index.ts';
import {user} from '@/drizzle/schema.ts';
import { eq } from "drizzle-orm";
import fetchUser from "./setDetails";

export default async function createProfile(userData){
    const auth = await fetchUser();
    const profile = await db.update(user).set(userData).where(eq(user.email,auth.email));
    console.log(profile);
}