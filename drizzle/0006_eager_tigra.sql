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
CREATE INDEX IF NOT EXISTS "menu_theme_name_idx" ON "availify_menu_themes" USING btree ("name");