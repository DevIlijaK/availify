CREATE TABLE IF NOT EXISTS "availify_images" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL,
	"url" varchar(512) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "availify_weekly_menu" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"product_id" uuid NOT NULL,
	"day_of_week" varchar(10) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "availify_products" ADD COLUMN "picture" varchar(512);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "availify_images" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "product_idx" ON "availify_weekly_menu" USING btree ("product_id");