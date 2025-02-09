import { Button } from "~/components/ui/button";
import { db } from "~/server/db";
import { menuThemes, productCategories } from "~/server/db/schema";
import { mockData } from "./mock-data";

async function seedData() {
  "use server";
  await db.insert(productCategories).values(mockData.productCategories);
  await db.insert(menuThemes).values(mockData.initialTheme);
}

export default function SandboxPage() {
  return (
    <div className="container mx-auto py-8">
      <form action={seedData}>
        <Button type="submit">Seed data</Button>
      </form>
    </div>
  );
}
