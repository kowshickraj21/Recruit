"use server";
import { connectMongoDB } from "@/models/mongodb";
import User from "@/models/user";

export async function checkAvailable(Id){
    await connectMongoDB();
    const available = await User.findOne({userId : Id})
    if(available){
        return true;
    }else{
        return false;
    }
}
