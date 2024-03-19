"use server"
import { connectMongoDB } from "@/models/mongodb";
import ChatMembers from '@/models/chatMembers'
import Messages from "@/models/messages";

export const storeMessage = async ({message,sender,reciever}) => {
    console.log({message,sender,reciever})
    try{
        connectMongoDB();
        const chatExists = await ChatMembers.findOne({sender:sender,reciever:reciever}) || await ChatMembers.findOne({sender:reciever,reciever:sender});
        if(chatExists){
            const updateMessage = await Messages.findOneAndUpdate({_id: chatExists.messagesId},{$push:{messages:{sender:sender,message:message}}})
            console.log(updateMessage)
        }else{
            const newMessage = {messages:[{sender:sender,message:message}]}
            const newMessages = await Messages.create(newMessage)
            const newChat = {sender:sender,reciever:reciever,messagesId:newMessages._id}
            const newMembers = await ChatMembers.create(newChat)
            console.log(newMembers)
            console.log(newMessages)
        }
    }catch(err){
        console.log(err)
    }
}
