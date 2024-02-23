import GoogleProvider from "next-auth/providers/google";
import  CredentialsProvider  from "next-auth/providers/credentials";
import { connectMongoDB } from "@/models/mongodb";
import User from "@/models/user";

export const options = {
    providers: [ 
        CredentialsProvider({
            name: "credentials",
            credentials: {
            },
            async authorize(credentials){
                const user = { id: "1"};
                return user;
            }
        }), 
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
        async jwt({token, user}){
            if(user) token.role = user.role;
            return token;
        },
        async session({session, token}){
            if(session?.user) session.user.role = token.role;
            return session;
        },
        async signIn({profile}){
            try {
                await connectMongoDB();
                const userExists = await User.findOne({email: profile.email});
                
                if(!userExists){
                    return false;
                }
            }catch(e){
                console.log(e)
            }
            return true;
        }
    }
};