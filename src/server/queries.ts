"use server";

import { eq, like } from "drizzle-orm";
import { db } from "./db";
import { images, type Product, products, weeklyMenu } from "./db/schema";
import { type DaysOfWeek } from "~/lib/utils";

export type CreateProductInput = {
  title: string;
  description: string;
  price: string;
};

export async function createProduct(
  input: Product & { dayOfWeek: DaysOfWeek },
) {
  const { title, description, price, imageUrl, dayOfWeek } = input;

  if (!title || !description || !price || !imageUrl || !dayOfWeek) {
    throw new Error("Invalid input!");
  }
  const result = await db
    .select()
    .from(products)
    .where(eq(products.title, title));

  if (result.length !== 0) {
    throw new Error("Proizvod sa ovim imenom već postoji!");
  }

  const newProduct = await db
    .insert(products)
    .values({
      title,
      description,
      price,
      imageUrl,
    })
    .returning();

  if (newProduct[0]) {
    await db.insert(weeklyMenu).values({
      dayOfWeek: input.dayOfWeek,
      productId: newProduct[0].id,
    });
  }

  if (!newProduct || newProduct.length === 0) {
    throw new Error("Failed to insert product.");
  }

  return newProduct[0];
}
export async function searchImagesByName(name: string) {
  const result = await db
    .select()
    .from(images)
    .where(like(images.name, `%${name}%`))
    .execute();

  return result;
}
export async function getAllImages() {
  const result = await db.select().from(images); // Select from the images table

  return result;
}
export async function getProductsByDay(input: DaysOfWeek) {
  const result = await db
    .select({
      id: products.id,
      title: products.title,
      description: products.description,
      price: products.price,
      imageUrl: products.imageUrl,
      createdAt: products.createdAt,
      updatedAt: products.updatedAt,
    })
    .from(weeklyMenu)
    .innerJoin(products, eq(weeklyMenu.productId, products.id))
    .where(eq(weeklyMenu.dayOfWeek, input));

  return result;
}
export async function deleteProduct(id: string) {
  await db.delete(products).where(eq(products.id, id));
}

// Function to get products by day
export async function getProductsByDays() {
  try {
    // Perform the query
    const results = await db
      .select({
        dayOfWeek: weeklyMenu.dayOfWeek,
        productId: weeklyMenu.productId,
        title: products.title,
        description: products.description,
        price: products.price,
        imageUrl: products.imageUrl,
      })
      .from(weeklyMenu)
      .innerJoin(products, eq(weeklyMenu.productId, products.id))
      .orderBy(weeklyMenu.dayOfWeek);

    // Grouping products by day of the week
    const groupedByDay: Record<string, Product[]> = {};

    results.forEach((result) => {
      const { dayOfWeek, ...productDetails } = result;

      // Initialize the array if it doesn't exist yet for the specific day
      if (!groupedByDay[dayOfWeek]) {
        groupedByDay[dayOfWeek] = [];
      }

      // Push the product details into the corresponding day group
      groupedByDay[dayOfWeek].push(productDetails as Product);
    });

    return groupedByDay;
  } catch (error) {
    console.error("Error fetching products by day:", error);
    throw error;
  }
}
