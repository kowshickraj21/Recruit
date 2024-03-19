import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectMongoDB } from "@/models/mongodb";

export async function POST(req){
    try{
        const body = await req.json();
        const userData = body.formData;
            const duplicate = await User.findOne({email: userData.email}).lean().exec();
        if(duplicate){
            return NextResponse.json({message : "This Email already exists."},{status:409});
        }
        const hashPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashPassword;
        userData.picture = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        await connectMongoDB(); 
        await User.create(userData)
        return NextResponse.json({message : "User Registed" },{status:201});  
    }catch(e){
        console.log(e);
        return NextResponse.json({message : "Error", e},{status:500});
    }
}