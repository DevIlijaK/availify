CREATE TABLE IF NOT EXISTS "availify_images" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL,
	"url" varchar(512) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "availify_menu_themes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"background_color" varchar(7),
	"text_color" varchar(7),
	"icon_color" varchar(7),
	"border_color" varchar(7),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "availify_product_categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(128) NOT NULL,
	"description" text,
	"icon_name" varchar(128) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "availify_products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(256) NOT NULL,
	"description" text NOT NULL,
	"price" varchar(256) NOT NULL,
	"image_url" varchar(512) NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "availify_restaurants" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar(256) NOT NULL,
	"name" varchar(255) NOT NULL,
	"address" varchar(512),
	"logo_url" varchar(512),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "availify_users" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"first_name" varchar(256),
	"last_name" varchar(256),
	"image_url" varchar(256),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "availify_weekly_menu" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"product_id" uuid NOT NULL,
	"day_of_week" varchar(10) NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "availify_restaurants" ADD CONSTRAINT "availify_restaurants_user_id_availify_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."availify_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "availify_images" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "menu_theme_name_idx" ON "availify_menu_themes" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "category_name_idx" ON "availify_product_categories" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "title_idx" ON "availify_products" USING btree ("title");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "product_idx" ON "availify_weekly_menu" USING btree ("product_id");