"use client";

import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Icon } from "~/components/icon";

export const SimpleNavMenu = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="fixed top-0 z-20 flex h-20 w-full items-center justify-end bg-white px-4">
      <SignedOut>
        <SignInButton>
          <Icon name="LogIn" />
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: {
                width: "42px",
                height: "42px",
              },
            },
          }}
        />
      </SignedIn>
    </div>
  );
};
