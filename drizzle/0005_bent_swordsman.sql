CREATE TABLE IF NOT EXISTS "availify_product_categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(128) NOT NULL,
	"description" text,
	"icon_name" varchar(128) NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "category_name_idx" ON "availify_product_categories" USING btree ("name");