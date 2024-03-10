"use client";
import { useState,createContext,useContext } from "react";

const ChatContext = createContext()
const ToggleChatContext = createContext()  

export function UseChat(){
    return useContext(ChatContext)
}

export function UseToggleChat(){
    return useContext(ToggleChatContext)
}

export const ChatProvider = ({children}) => {
 
    const [open, setOpen] = useState(false)
    function toggleOpen(){
        setOpen(!open)
    }
    return(
        <ChatContext.Provider value={open}>
        <ToggleChatContext.Provider value={toggleOpen}>
        {children}
        </ToggleChatContext.Provider>
        </ChatContext.Provider>
)}