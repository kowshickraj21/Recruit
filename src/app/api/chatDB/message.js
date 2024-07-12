"use server"
import { db } from '@/drizzle/index'
import { messages,user } from '@/drizzle/schema'
import { and, eq, sql } from 'drizzle-orm';
export const storeMessage = async ({message,sender,reciever}) => {
    try{
       await db.insert(messages).values({sender:sender,reciever:reciever,message:message});
    }catch(err){
        console.log(err)
    }
}

export const getMessages = async ({sender,reciever}) => {
    try{
        const db1 = await db.select().from(messages).where(sql`${messages.sender} = ${sender} and ${messages.reciever} = ${reciever}`);
        const db2 = await db.select().from(messages).where(sql`${messages.sender} = ${reciever} and ${messages.reciever} = ${sender}`);
        return (db1.concat(db2).sort((a,b) => a.sentAt - b.sentAt));
    }
    catch(e){
        console.log(e)
    }
}