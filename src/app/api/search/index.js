"use server"
import { db } from '@/drizzle/index';
import { gigs } from '@/drizzle/schema';
import { like } from 'drizzle-orm';

export default async function search(query) {
    const Gigs = await db.select().from(gigs).where(like(gigs.title, `%${query}%`));
    console.log(Gigs);
}