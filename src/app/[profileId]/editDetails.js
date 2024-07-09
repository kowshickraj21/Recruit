import {db} from '@/drizzle/index.ts';
import {user} from '@/drizzle/schema.ts';
import { eq } from "drizzle-orm";

export const setDescription = async (text,profile) => {
  await db.update(user).set({description: text}).where(eq(profile.userId,user.userId));
}

export const setTitle = async (title,profile) => {
  await db.update(user).set({title: title}).where(eq(profile.userId,user.userId));
}
