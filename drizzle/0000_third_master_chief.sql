CREATE TABLE IF NOT EXISTS "user" (
	"name" text NOT NULL,
	"email" text,
	"password" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
