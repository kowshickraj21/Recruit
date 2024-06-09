"use server"
import { connectMongoDB } from "@/models/mongodb";
import ChatMessages from '@/models/chatMessages';
export const storeMessage = async ({message,sender,reciever,messageSender}) => {
    console.log('sender',messageSender)
    try{
        connectMongoDB();
        const chatExists = await ChatMessages.findOne({sender:sender,reciever:reciever}) || await ChatMessages.findOne({sender:reciever,reciever:sender});
        if(chatExists){
            const updateMessage = await ChatMessages.findOneAndUpdate({_id: chatExists._id},{$push:{messages:{sender:messageSender,message:message}}})
        }else{
            const newMessage = [{sender:messageSender,message:message}]
            const newChat = {sender:sender,reciever:reciever,messages:newMessage}
            const newMembers = await ChatMessages.create(newChat)
        }
    }catch(err){
        console.log(err)
    }
}

export const getMessages = async ({sender,reciever}) => {
    try{
        connectMongoDB()
        const chatExists = await ChatMessages.findOne({sender:sender,reciever:reciever}) || await ChatMessages.findOne({sender:reciever,reciever:sender});
        if(chatExists){
            return chatExists.messages
        }
    }
    catch(e){
        console.log(e)
    }
}