import { SignedIn } from "@clerk/nextjs";
import { Images } from "./_components/images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <SignedIn>
      <Images />
    </SignedIn>
  );
}
