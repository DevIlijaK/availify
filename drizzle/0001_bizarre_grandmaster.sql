CREATE TABLE IF NOT EXISTS "availify_products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(256) NOT NULL,
	"description" text NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
DROP TABLE "theo_tutorial_images";--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "title_idx" ON "availify_products" USING btree ("title");