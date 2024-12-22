"use client";

import Image from "next/image";
import { type FC, useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { type ImageItem } from "~/server/db/schema";
import { getAllImages, searchImagesByName } from "~/server/queries";
import { Input } from "./ui/input";

interface Props {
  onSelectionChange: (url: string) => void;
  selectedImageUrl: string;
}

export const ImageList: FC<Props> = ({
  onSelectionChange,
  selectedImageUrl,
}) => {
  const [images, setImages] = useState<ImageItem[] | undefined>(undefined);

  useEffect(() => {
    const getDate = async () => {
      const images = await getAllImages();

      console.log("Images: ", images);
      setImages(images);
    };
    void getDate();
  }, []);

  const searchImages = async (imageName: string) => {
    const images = await searchImagesByName(imageName);
    setImages(images);
  };

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center gap-4">
        <p className="flex-shrink-0 text-sm"> Izaberite sliku: </p>
        <Input
          placeholder="Pretrazite slike jela"
          className="rounded-xl"
          onChange={async ({ target }) => {
            await searchImages(target.value);
          }}
        />
      </div>
      <div className="no-scrollbar grid max-h-[220px] grid-cols-3 gap-4 overflow-auto">
        {images?.map((image) => (
          <Image
            key={image.url}
            src={image.url}
            alt={`Image ${image.url}`}
            width={100}
            height={100}
            className={cn(
              "h-[100px] w-[100px] cursor-pointer rounded-xl border object-cover",
              selectedImageUrl === image.url
                ? "border-green-500"
                : "border-transparent",
            )}
            onClick={() => onSelectionChange(image.url)}
          />
        ))}
      </div>
    </div>
  );
};
