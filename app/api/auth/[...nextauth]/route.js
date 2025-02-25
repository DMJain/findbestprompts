import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";

import {connectToDatabase} from '@utils/database';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        async session({session}) {
            const sessionUser = await User.findOne({email: session.user.email});
    
            session.user.id = sessionUser._id.toString();
    
            return session;
        },
    
        async signIn({profile}) {
            try{
                await connectToDatabase();
    
                const userExist = await User.findOne({email: profile.email});
                console.log(profile)
                if(!userExist){
                    
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture,
                    })
                }
    
                return true;
            } catch (error) {
                console.log('Error Signing In', error);
                return false;
            }
        },
    }
})

export { handler as GET, handler as POST };