import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
    messages:Array
},{
    timestamps: true,
})

const Messages = mongoose.models?.Messages || mongoose.model("Messages", messageSchema)

export default Messages;