ALTER TABLE "messages" ALTER COLUMN "message" SET DATA TYPE json;--> statement-breakpoint
ALTER TABLE "messages" ALTER COLUMN "message" SET DEFAULT '{}'::json;