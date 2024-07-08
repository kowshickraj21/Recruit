import {db} from '@/drizzle/index.ts';
import {user} from '@/drizzle/schema.ts';
import { eq } from "drizzle-orm";

const setDescription = async (text,profile) => {
  await db.update(user).set({description: text}).where(eq(profile.userId,user.userId));
}

export default setDescription;