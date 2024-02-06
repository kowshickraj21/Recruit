import mongoose, { Schema } from "mongoose";

const gigSchema = new Schema({
    title: String,
    description: String,
    hourly: Number,
    projectly: Number,
    email: String,
    image: Buffer,
},{
    timestamps: true,
})

const Gigs = mongoose.models?.Gigs || mongoose.model("Gigs", gigSchema)

export default Gigs;