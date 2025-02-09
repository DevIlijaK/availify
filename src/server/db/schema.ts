// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `availify_${name}`);

export const weeklyMenu = createTable(
  "weekly_menu",
  {
    id: uuid("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),
    productId: uuid("product_id").notNull(),
    dayOfWeek: varchar("day_of_week", { length: 10 }).notNull(),
  },
  (weeklyMenu) => ({
    productIndex: index("product_idx").on(weeklyMenu.productId),
  }),
);

export const products = createTable(
  "products",
  {
    id: uuid("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),
    title: varchar("title", { length: 256 }).notNull(),
    description: text("description").notNull(),
    price: varchar("price", { length: 256 }).notNull(),
    imageUrl: varchar("image_url", { length: 512 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (products) => ({
    titleIndex: index("title_idx").on(products.title),
  }),
);

export const restaurants = createTable("restaurants", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  userId: varchar("user_id", { length: 256 })
    .notNull()
    .references(() => users.id),
  name: varchar("name", { length: 255 }).notNull(),
  address: varchar("address", { length: 512 }),
  logoUrl: varchar("logo_url", { length: 512 }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});

export const productCategories = createTable(
  "product_categories",
  {
    id: uuid("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),
    name: varchar("name", { length: 128 }).notNull(),
    description: text("description"),
    iconName: varchar("icon_name", { length: 128 }).notNull(),
  },
  (productCategories) => ({
    nameIndex: index("category_name_idx").on(productCategories.name),
  }),
);

export const images = createTable(
  "images",
  {
    id: uuid("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),
    name: varchar("name", { length: 256 }).notNull(),
    url: varchar("url", { length: 512 }).notNull(),
  },
  (images) => ({
    nameIndex: index("name_idx").on(images.name),
  }),
);

export const menuThemes = createTable(
  "menu_themes",
  {
    id: uuid("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),
    name: varchar("name", { length: 255 }).notNull(),
    backgroundColor: varchar("background_color", { length: 7 }),
    textColor: varchar("text_color", { length: 7 }),
    iconColor: varchar("icon_color", { length: 7 }),
    borderColor: varchar("border_color", { length: 7 }),
    textForeground: varchar("text_foreground", { length: 7 }),
    textMutedForeground: varchar("text_muted_foreground", { length: 7 }),
    productCartBackgroundColor: varchar("product_cart_background_color", {
      length: 7,
    }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (menuThemes) => ({
    nameIndex: index("menu_theme_name_idx").on(menuThemes.name),
  }),
);

export const users = createTable("users", {
  id: varchar("id", { length: 256 }).primaryKey(),
  firstName: varchar("first_name", { length: 256 }),
  lastName: varchar("last_name", { length: 256 }),
  imageUrl: varchar("image_url", { length: 256 }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdate(() => new Date()),
});

export type AppUser = typeof users.$inferSelect;
export type Product = typeof products.$inferInsert;
export type ImageItem = typeof images.$inferInsert;
export type ProductCategory = typeof productCategories.$inferSelect;
export type MenuTheme = typeof menuThemes.$inferSelect;
