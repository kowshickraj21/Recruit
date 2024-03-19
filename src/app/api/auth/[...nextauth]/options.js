import GoogleProvider from "next-auth/providers/google";
import  CredentialsProvider  from "next-auth/providers/credentials";
import { connectMongoDB } from "@/models/mongodb";
import User from "@/models/user";
import bcrypt from "bcrypt";

export const options = {
    providers: [ 
        CredentialsProvider({
            name: "credentials",
            credentials: {
                gmail: {label:"Gmail", type:"email"},
                password: {label:"Password",type:"text"}
            },
            async authorize(credentials){
                connectMongoDB()
                const user = await User.findOne({email: credentials.email});
                if(user && user.password){
                   const res = await bcrypt.compare(credentials.password, user.password)
                    console.log(res)
                    if(res) return user;
                    return false
            }
            return false;
}}), 
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
    ],
    pages:{
        signIn: '/login'
    },
    session:{
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({session, token}){
            if(session?.user) session.user.role = token.role;
            return session;
        },
        async signIn({profile}){
            try {
                await connectMongoDB();
                const userExists = await User.findOne({email: profile.email});
                if(!userExists){
                    const user = await User.create({
                        name: profile.name,
                        email: profile.email,
                        picture: profile.picture,
                    })
                    console.log(user);
                }
            }catch(e){
                console.log(e)
            }
            return true;
        },
        async jwt(props) {
            return props.token
          }
    }
};