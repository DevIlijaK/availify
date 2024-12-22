import { type Product } from "~/server/db/schema";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "./ui/drawer";
import Image from "next/image";

export const ProductDrawer = ({
  open,
  onOpenChange,
  product,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product;
}) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[500px]">
        <DrawerHeader>
          <DrawerTitle className="text-start">{product.title}</DrawerTitle>
          <DrawerDescription />
        </DrawerHeader>
        {/* Add a scrollable section for content */}
        <div className="flex h-[calc(100%-150px)] flex-col overflow-y-auto p-4">
          <div className="flex gap-4">
            <Image
              src={product.imageUrl ?? ""}
              alt="Example Image"
              width={100}
              height={100}
              className="h-[150px] w-[150px] rounded-lg"
            />
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-500">{product.description}</p>
              <p className="font-bold">Cena: {product.price}</p>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
