CREATE TABLE IF NOT EXISTS "messages" (
	"uuid1" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"message" json[]
);
