import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    }catch(e){
        console.log("Failed to connect to database",e);
    }
}