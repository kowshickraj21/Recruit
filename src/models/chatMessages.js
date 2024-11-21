import mongoose, { Schema } from "mongoose";

const chatSchema = new Schema({
    sender: String,
    reciever: String,
    messages:Array

},{
    timestamps: true,
})

const ChatMessages = mongoose.models?.ChatMessages || mongoose.model("ChatMessages", chatSchema)

export default ChatMessages;