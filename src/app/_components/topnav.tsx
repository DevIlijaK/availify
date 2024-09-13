"use client";

import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  const router = useRouter();
  return (
    <div className="w-full">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={() => {
            router.refresh();
          }}
        />
      </SignedIn>
    </div>
  );
}
