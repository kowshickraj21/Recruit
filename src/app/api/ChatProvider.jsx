"use client"
import { useState,createContext,useContext } from "react";

const ChatContext = createContext()
const ToggleChatContext = createContext()  
const ChatMemberContext = createContext()
const SetChatMemberContext = createContext()

export function UseChat(){
    return useContext(ChatContext)
}
export function UseToggleChat(){
    return useContext(ToggleChatContext)
}
export function UseChatMember(){
    return useContext(ChatMemberContext)
}
export function UseSetChatMember(){
    return useContext(SetChatMemberContext)
}

export const ChatProvider = ({children}) => {
 
    const [open, setOpen] = useState(false)
    const [chat, setChat] = useState({})
    function toggleOpen(prop){
        if(prop){
            setOpen(prop)
        }else
        setOpen(!open);
    }
    function toggleChat(member){
        setChat(member)
    }
    return(
        <ChatContext.Provider value={open}>
        <ToggleChatContext.Provider value={toggleOpen}>
        <ChatMemberContext.Provider value={chat}>
        <SetChatMemberContext.Provider value={toggleChat}>
        {children}
        </SetChatMemberContext.Provider >
        </ChatMemberContext.Provider >
        </ToggleChatContext.Provider>
        </ChatContext.Provider>
)}