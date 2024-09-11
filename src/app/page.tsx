import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main className="">
      <div className="">{posts.map((post) => post.name)}</div>
    </main>
  );
}
