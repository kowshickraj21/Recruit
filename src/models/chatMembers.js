import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const chatSchema = new Schema({
    sender: String,
    reciever: String,
    messagesId: ObjectId,
},{
    timestamps: true,
})

const ChatMembers = mongoose.models?.ChatMembers || mongoose.model("ChatMembers", chatSchema)

export default ChatMembers;