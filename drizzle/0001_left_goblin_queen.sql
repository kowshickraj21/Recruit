ALTER TABLE "user" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "picture" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "id" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "DOB" date;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "LinkedIn" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "GitHub" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "Country" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "state" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "Category" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "tags1" text[] DEFAULT '{}'::text[] NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "title" text;