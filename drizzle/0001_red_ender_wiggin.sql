ALTER TABLE "messages" ALTER COLUMN "message" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "messages" ADD COLUMN "sentAt" timestamp DEFAULT now() NOT NULL;