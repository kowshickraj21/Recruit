ALTER TABLE "messages" ALTER COLUMN "message" SET DEFAULT '{}'::json;--> statement-breakpoint
ALTER TABLE "messages" ALTER COLUMN "message" DROP NOT NULL;