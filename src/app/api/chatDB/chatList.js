"use server"
import { db } from '@/drizzle/index';
import { messages,user } from '@/drizzle/schema';
import { sql,inArray } from 'drizzle-orm';

export async function getChatList(User){
    const data = await db.selectDistinct({reciever : messages.reciever,sender : messages.sender}).from(messages).where(sql`${User} = ${messages.sender} or ${User} = ${messages.reciever}`)
    const members = new Set();
    data.map((data) => {
        if(data.reciever == User) members.add(data.sender);
        else members.add(data.reciever);
    })
    const userDetails = await db.select().from(user).where(inArray(user.email, Array.from(members)));
    return userDetails;
}