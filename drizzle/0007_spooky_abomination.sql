ALTER TABLE "messages" RENAME COLUMN "uuid1" TO "sender";--> statement-breakpoint
ALTER TABLE "messages" RENAME COLUMN "title" TO "reciever";--> statement-breakpoint
/* 
    Unfortunately in current drizzle-kit version we can't automatically get name for primary key.
    We are working on making it available!

    Meanwhile you can:
        1. Check pk name in your database, by running
            SELECT constraint_name FROM information_schema.table_constraints
            WHERE table_schema = 'public'
                AND table_name = 'messages'
                AND constraint_type = 'PRIMARY KEY';
        2. Uncomment code below and paste pk name manually
        
    Hope to release this update as soon as possible
*/

-- ALTER TABLE "messages" DROP CONSTRAINT "<constraint_name>";--> statement-breakpoint
ALTER TABLE "messages" ALTER COLUMN "sender" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "messages" ALTER COLUMN "sender" DROP DEFAULT;--> statement-breakpoint
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
