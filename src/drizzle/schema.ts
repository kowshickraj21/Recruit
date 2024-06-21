import { sql, relations } from 'drizzle-orm';
import { pgTable, text, timestamp, date, numeric, uuid } from "drizzle-orm/pg-core";

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
    provider: text("provider")
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