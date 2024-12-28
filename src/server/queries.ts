"use server";

import { eq, like } from "drizzle-orm";
import { db } from "./db";
import {
  images,
  type MenuTheme,
  menuThemes,
  type Product,
  productCategories,
  type ProductCategory,
  products,
  weeklyMenu,
} from "./db/schema";
import { type DaysOfWeek } from "~/lib/utils";
import { revalidatePath } from "next/cache";

export type CreateProductInput = {
  title: string;
  description: string;
  price: string;
};

// product

export async function getAllProducts() {
  return db.select().from(products);
}

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
export async function getProducts() {
  const rawResult = await db
    .select({
      id: products.id,
      title: products.title,
      description: products.description,
      price: products.price,
      imageUrl: products.imageUrl,
      createdAt: products.createdAt,
      updatedAt: products.updatedAt,
      day: weeklyMenu.dayOfWeek,
    })
    .from(weeklyMenu)
    .innerJoin(products, eq(weeklyMenu.productId, products.id));

  const groupedResult = rawResult.reduce(
    (acc: Record<string, Product[]>, item) => {
      const { day, ...product } = item;

      if (!acc[day]) {
        acc[day] = [];
      }

      acc[day].push(product);

      return acc;
    },
    {},
  );
  const dayOrder = [
    "Ponedeljak",
    "Utorak",
    "Sreda",
    "Četvrtak",
    "Petak",
    "Subota",
    "Nedelja",
  ];

  return Object.entries(groupedResult)
    .sort((a, b) => {
      const indexA = dayOrder.indexOf(a[0]);
      const indexB = dayOrder.indexOf(b[0]);
      return indexA - indexB;
    })
    .map(([day, products]) => ({
      day,
      products,
    }));
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

// categories

export async function createCategory(data: {
  name: string;
  description?: string;
  iconName: string;
}) {
  console.log("Name is: ", data.name);
  return db.insert(productCategories).values(data).returning();
}

// Get all categories
export async function getAllCategories() {
  return db.select().from(productCategories);
}

// Get a single category by ID
export async function getCategoryById(
  categoryId: string,
): Promise<ProductCategory | null | undefined> {
  const [result] = await db
    .select()
    .from(productCategories)
    .where(eq(productCategories.id, categoryId));
  return result;
}

// Update a category by ID
export async function updateCategory(
  categoryId: string,
  data: {
    name?: string;
    description?: string;
    iconName?: string;
  },
) {
  return await db
    .update(productCategories)
    .set(data)
    .where(eq(productCategories.id, categoryId))
    .returning();
}

// Delete a category by ID
export async function deleteCategory(categoryId: string) {
  return await db
    .delete(productCategories)
    .where(eq(productCategories.id, categoryId))
    .returning();
}

// menu theme

export async function createMenuTheme(data: {
  name: string;
  backgroundColor: string;
  textColor: string;
  iconColor: string;
  borderColor: string;
}) {
  return await db.insert(menuThemes).values(data).returning(); // Returns the inserted data
}

export async function getAllMenuThemes() {
  return await db.select().from(menuThemes);
}
export async function getMenuThemeById(id: string) {
  return await db
    .select()
    .from(menuThemes)
    .where(eq(menuThemes.id, id))
    .limit(1); // Get only one result by ID
}
export async function updateMenuTheme(newTheme: MenuTheme) {
  const result = await db
    .update(menuThemes)
    .set(newTheme)
    .where(eq(menuThemes.id, newTheme.id))
    .returning(); // Returns the updated data

  revalidatePath("/");
  return result;
}
