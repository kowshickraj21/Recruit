import { db } from '@/drizzle/index';
import { messages } from '@/drizzle/schema';
import { and,eq } from 'drizzle-orm';

export const storeMessage = async (message, sender, receiver, res) => {
  console.log(message, sender, receiver)
  console.log("Receiver:",receiver)
  try {
    await db.insert(messages).values({
      sender: sender,
      reciever: receiver,
      message: message,
    });
  } catch (err) {
    console.error('Error storing message:', err);
  }
};

export const getMessages = async ( sender, reciever ) => {
    try {
      const db1 = await db.select().from(messages).where(and(eq(messages.sender, sender), eq(messages.reciever, reciever)));
      const db2 = await db.select().from(messages).where(and(eq(messages.sender, reciever), eq(messages.reciever, sender)));
      console.log(console.log(sender,reciever))
      return db1.concat(db2).sort((a, b) => new Date(a.sentAt) - new Date(b.sentAt));
      
    } catch (e) {
      console.log(e);
    }
  };
