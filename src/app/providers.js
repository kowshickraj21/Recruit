"use client";
import { SessionProvider } from "next-auth/react";
import { ChatProvider } from '@/app/api/ChatProvider'


export const Provider = ({children}) => {

    return <SessionProvider>
        <ChatProvider>
        {children}
        </ChatProvider>
        </SessionProvider>;
}
