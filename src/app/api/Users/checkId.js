"use server";
import {db} from '@/drizzle/index.ts';
import {user} from '@/drizzle/schema.ts';
import { eq } from "drizzle-orm";

export async function checkAvailable(Id){
    const available = await db.select().from(user).where(eq(user.userId,Id));
    if(available.length > 0){
        return true;
    }else{
        return false;
    }
}
