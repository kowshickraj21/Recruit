import { sql, relations } from 'drizzle-orm';
import { pgTable, text, timestamp, date, numeric, uuid, json } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    name: text("name").notNull(),
    email: text("email").notNull().primaryKey(),
    password: text("password"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    picture: text("picture"),
    userId: text("id"),
    DOB: date("DOB"),
    linkedIn: text("LinkedIn"),
    gitHub: text("GitHub"),
    country: text("Country"),
    state: text("state"),
    category: text("Category"),
    tags: text('tags1').array().notNull().default(sql`'{}'::text[]`),
    title: text("title"),
    provider: text("provider"),
    description: text("description").default("Hello EveryOne! I am new to recrute.")
});

export const usersRelations = relations(user, ({ many }) => ({
  gigs: many(gigs),
}));

export const gigs = pgTable("gigs",{
  gigId: uuid('uuid1').defaultRandom().primaryKey(),
  title: text("title").notNull(),
  delivery: numeric("delivery"),
  description: text("description"),
  hourly: numeric("hourly"),
  projectly: numeric("projectly"),
  email: text("email").references(() => user.email, {onDelete: 'cascade'}).notNull(),
  image: text("image"),
});

export const gigsRelations = relations(gigs, ({ one }) => ({
  author: one(user, {
    fields: [gigs.email],
    references: [user.email],
  }),
}));


export const messages = pgTable("messages",{
  sender: text('sender').notNull().references(() => user.email),
  reciever: text("reciever").notNull().references(() => user.email),
  message: text("message"),
  sentAt: timestamp("sentAt").notNull().defaultNow()
});

export const senderRelations = relations(messages, ({ one }) => ({
  sender: one(user, {
    fields: [messages.sender],
    references: [user.email],
  }),
}));

export const recieverRelations = relations(messages, ({ one }) => ({
  reciever: one(user, {
    fields: [messages.reciever],
    references: [user.email],
  }),
}));
