ALTER TABLE "messages" ALTER COLUMN "message" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "messages" ALTER COLUMN "message" SET NOT NULL;