ALTER TABLE "availify_products" ADD COLUMN "image_url" varchar(512);--> statement-breakpoint
ALTER TABLE "availify_products" DROP COLUMN IF EXISTS "picture";