CREATE TABLE IF NOT EXISTS "gigs" (
	"uuid1" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"delivery" numeric,
	"description" text,
	"hourly" numeric,
	"projectly" numeric,
	"email" text NOT NULL,
	"image" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "messages" (
	"sender" text NOT NULL,
	"reciever" text NOT NULL,
	"message" json
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"name" text NOT NULL,
	"email" text PRIMARY KEY NOT NULL,
	"password" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"picture" text,
	"id" text,
	"DOB" date,
	"LinkedIn" text,
	"GitHub" text,
	"Country" text,
	"state" text,
	"Category" text,
	"tags1" text[] DEFAULT '{}'::text[] NOT NULL,
	"title" text,
	"provider" text,
	"description" text DEFAULT 'Hello EveryOne! I am new to recrute.'
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "gigs" ADD CONSTRAINT "gigs_email_user_email_fk" FOREIGN KEY ("email") REFERENCES "public"."user"("email") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "messages" ADD CONSTRAINT "messages_sender_user_email_fk" FOREIGN KEY ("sender") REFERENCES "public"."user"("email") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "messages" ADD CONSTRAINT "messages_reciever_user_email_fk" FOREIGN KEY ("reciever") REFERENCES "public"."user"("email") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
