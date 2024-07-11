import GoogleProvider from "next-auth/providers/google";
import  CredentialsProvider  from "next-auth/providers/credentials";
import {db} from '@/drizzle';
import { user } from '@/drizzle/schema';
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

export const options = {
    providers: [ 
        CredentialsProvider({
            name: "credentials",
            credentials: {
                gmail: {label:"Gmail", type:"email"},
                password: {label:"Password",type:"text"}
            },
            async authorize(credentials){
                    const exists = await db.select().from(user).where(eq(user.email, credentials.email));
                    const User = exists[0];
                    if(User && User.password && User.provider != "google"){
                        const res = await bcrypt.compare(credentials.password, User.password)
                        if(res) return User;
                        return null;
                    }
            }}), 
            
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            async signIn(data){
              return true;
            }
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
      async signIn(params){
        const User = params.user;
        const exists = await db.select().from(user).where(eq(user.email, User.email));
            if(exists.length == 0){
              User.picture = User.image;
              User.provider = "google";
              await db.insert(user).values(User);
            }
        return User;
      },
          async session({ session }) { 
            return session;
          },
          async jwt({ token, user }) {
            if (user) {
              token.role = user.role;  // Add user role to token
            }
            return token;
          }
        },
        session: {
          jwt: true,
        },
};