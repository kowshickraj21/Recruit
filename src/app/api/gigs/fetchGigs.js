import { db } from '@/drizzle/index';
import { user,gigs } from '@/drizzle/schema';
import { eq,not, like } from 'drizzle-orm';

export default async function fetchGigs(profile,search,auth){
    const gigList = (profile)?await db.select().from(gigs).where(eq(gigs.email,profile.email)):
    (search)?await db.select().from(gigs).where(like(gigs.title, `%${search}%`)):
    await db.select().from(gigs).where(not(eq(gigs.email,auth.email))); 
    return gigList; 
} 