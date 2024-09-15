import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";

export function SimpleNavManu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex h-full w-screen justify-between p-4 align-middle">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <div>
          <SignedOut>
            <NavigationMenuItem>
              <SignInButton />
            </NavigationMenuItem>
          </SignedOut>
          <SignedIn>
            <NavigationMenuItem className="flex gap-4">
              <SimpleUploadButton />
              <UserButton />
            </NavigationMenuItem>
          </SignedIn>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
