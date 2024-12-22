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
    titleIndex: index("title_idx").on(products.title), // Optional index on title
  }),
);

export const images = createTable(
  "images",
  {
    id: uuid("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`), // UUID primary key with default value
    name: varchar("name", { length: 256 }).notNull(), // Image name
    url: varchar("url", { length: 512 }).notNull(), // Image URL
  },
  (images) => ({
    nameIndex: index("name_idx").on(images.name), // Index on name for search
  }),
);
export type Product = typeof products.$inferInsert;
export type ImageItem = typeof images.$inferInsert;
