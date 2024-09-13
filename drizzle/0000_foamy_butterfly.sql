CREATE TABLE IF NOT EXISTS "theo-tutorial_post" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"url" varchar(256),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "theo-tutorial_post" USING btree ("name");