import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "~/components/simple-upload-button";

export function TopNav() {
  return (
    <div className="w-full">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <SimpleUploadButton />
      </SignedIn>
    </div>
  );
}
