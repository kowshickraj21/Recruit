import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    picture: String,
    userId: String,
    DOB: Date,
    likedIn: String,
    gitHub: String,
    country: String,
    state: String,
    city: String,
    category: String,
    tags: Array,
},{
    timestamps: true,
})

const User = mongoose.models?.User || mongoose.model("User", userSchema)

export default User;
