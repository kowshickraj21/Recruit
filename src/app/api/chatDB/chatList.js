"use server"
import { connectMongoDB } from "@/models/mongodb";
import ChatMessages from '@/models/chatMessages';
import User from '@/models/user';

export async function getChatList(user){
    await connectMongoDB()
    const members = await ChatMessages.find({$or:[{sender:user},{reciever:user}]})
    const emails = members.map(member => member.sender === user ? member.receiver : member.sender);
    const users = await User.find({ email: { $in: emails } });
    const userData = users.map(user => JSON.parse(JSON.stringify(user)))
    return userData
}