"use server"
import { connectMongoDB } from "@/models/mongodb";
import ChatMessages from '@/models/chatMessages';

export async function getChatList(user){
    await connectMongoDB()
    const members = await ChatMessages.find({sender:user}) && await ChatMessages.find({receiver:user})
 console.log(members)   
}