import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import serverSideAnalitics from "./analitics";
import { and, eq } from "drizzle-orm";
import { images } from "./db/schema";

export async function getMyImages() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized!");
  return db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
}
export async function getMyImage(input: { id: number }) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized!");

  const image = await db.query.images.findFirst({
    where: (model, { eq, and }) =>
      and(eq(model.userId, user.userId), eq(model.id, input.id)),
  });
  if (!image) throw new Error("No image found");
  return image;
}
export async function deleteMyImage(input: { id: number }) {
  const { id } = input;

  const user = auth();

  if (!user.userId) throw new Error("Unauthorized!");

  await db
    .delete(images)
    .where(and(eq(images.userId, user.userId), eq(images.id, input.id)));

  serverSideAnalitics.capture({
    distinctId: user.userId,
    event: "delete image",
    properties: { imageId: id },
  });

  redirect("/");
}
