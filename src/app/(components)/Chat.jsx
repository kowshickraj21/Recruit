"use client";
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import Image from 'next/image';
import { IoMdSend } from 'react-icons/io';
import { storeMessage, getMessages } from '@/app/api/chatDB/message';
import { UseChatMember } from '../api/ChatProvider';

const Chat = (props) => {
  const chat = UseChatMember();
  const { name, picture, email } = props.you;
  const [messages, setMessages] = useState([]);
  const [pastMessages, setPastMessages] = useState([]);
  const [input, setInput] = useState('');
  const socket = useRef(null); 

  useEffect(() => {

    const getChat = async () => {
      try {
        const pastMessages = await getMessages(email, chat.email);
        setPastMessages(pastMessages);
        console.log(pastMessages)
      } catch (error) {
        console.error('Error retrieving messages:', error);
      }
    };
    getChat();

    socket.current = io('ws://localhost:5000');

    socket.current.on('connect', () => {
      console.log('Connected to server');
    });

    socket.current.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    socket.current.on('chat-message', (data) => {
      console.log(data);
      setMessages((prevMessages) => [...prevMessages, { sender: data.sender, message: data.message }]);
    });

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, [chat.email, email]);

  const send = async () => {
    if (input.trim() === '') return;

    socket.current.emit('client-message', { sender: email, message: input });
    
    try {
      await storeMessage(input, chat.email, email);
    } catch (error) {
      console.error('Error storing message:', error);
    }
    
    setInput('');
  };

  return (
    <div className='lg:h-96 h-full overflow-y-auto'>
      <div className='pb-10'>
        {pastMessages?.map((message, index) => (
          <div key={index} className='py-2 hover:bg-slate-50 px-2'>
            <div className='flex space-x-2'>
              <Image
                src={message.sender === email ? picture : chat.picture}
                width={30}
                height={20}
                className='rounded-full'
                alt='profile'
              />
              <h2 className='font-semibold'>{message.sender === email ? name : chat.name}</h2>
            </div>
            <p className='px-10 py-2'>{message.message}</p>
          </div>
        ))}
        {messages.map((message, index) => (
          <div key={index} className='py-2 hover:bg-slate-50 px-2'>
          <div className='flex space-x-2'>
            <Image
              src={message.sender === email ? picture : chat.picture}
              width={30}
              height={20}
              className='rounded-full'
              alt='profile'
            />
            <h2 className='font-semibold'>{message.sender === email ? name : chat.name}</h2>
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
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              send();
            }
          }}
        />
        <button className='w-1/5 h-full bg-black text-white' onClick={send}>
          <IoMdSend className='m-auto text-xl' />
        </button>
      </div>
    </div>
  );
};

export default Chat;
