"use client"
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Image from 'next/image';
import { IoMdSend } from 'react-icons/io';
import { storeMessage, getMessages } from '@/app/api/chatDB/message';
import { UseChatMember } from '../api/ChatProvider';

const Chat = (props) => {
  const chat = UseChatMember();
  const { name, picture, email } = props.you;
  const [messages, setMessage] = useState([]);
  const [pastMessages, setPastMessage] = useState([]);
  const [input, setInput] = useState('');
  console.log(chat)
  useEffect(() => {
    // Initialize socket only once when the component mounts
    const socket = io('http://localhost:3000/api/chat');

    const getChat = async () => {
      const pastMessage = await getMessages({ sender: email, reciever: chat.email });
      setPastMessage(pastMessage);
    };
    getChat();

    socket.on('chat-message', (data) => {
      setMessage((prevMessages) => [...prevMessages, { sender: data.sender, message: data.message }]);
    });

    return () => {
      // Clean up the socket connection when the component unmounts
      socket.off('chat-message');
      socket.disconnect();
    };
  }, [email, chat.email]);

  const send = async () => {
    // socket.emit('client-message', { sender: name, message: input });
    setMessage((prevMessages) => [...prevMessages, { sender: name, message: input }]);
    await storeMessage({ message: input, reciever: chat.email, sender: email});
    setInput('');
  };

  return (
    <div className='h-96 overflow-y-auto'>
      <div className='pb-10'>
        {pastMessages?.map((message, index) => (
          <div key={index} className='py-2 hover:bg-slate-50 px-2'>
            <div className='flex space-x-2'>
              <Image src={message.sender == email ? picture : chat.picture} width={30} height={20} className='rounded-full' alt='profile' />
              <h2 className='font-semibold'>{(message.sender == email)?name:chat.name}</h2>
            </div>
            <p className='px-10 py-2'>{message.message}</p>
          </div>
        ))}
        {messages.map((message, index) => (
          <div key={index} className='py-2 hover:bg-slate-50 px-2'>
            <div className='flex space-x-2'>
              <Image src={picture} width={30} height={20} className='rounded-full' alt='profile' />
              <h2 className='font-semibold'>{message.sender}</h2>
            </div>
            <p className='px-10 py-2'>{message.message}</p>
          </div>
        ))}
      </div>
      <div className='w-full absolute bottom-0 h-10 flex'>
        <input
          type='text'
          className='border w-4/5 h-full'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='w-1/5 h-full bg-black text-white' onClick={send}>
          <IoMdSend className='m-auto text-xl' />
        </button>
      </div>
    </div>
  );
};

export default Chat;
