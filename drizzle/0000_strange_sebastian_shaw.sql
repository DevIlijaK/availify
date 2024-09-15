CREATE TABLE IF NOT EXISTS "theo_tutorial_images" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"user_id" varchar(256) NOT NULL,
	"url" varchar(256),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "theo_tutorial_images" USING btree ("name");