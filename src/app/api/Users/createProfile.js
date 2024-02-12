"use server"
import { connectMongoDB } from "@/models/mongodb";
import User from "@/models/user";
import fetchUser from "./setDetails";

export default async function createProfile(userData){
    await connectMongoDB();
    const user = await fetchUser();
    const profile = await User.findOneAndUpdate({email: user.email},userData);
    console.log(profile);
}