import Image from "next/image";
import { getMyImages } from "~/server/queries";

export async function Images() {
  const allImages = await getMyImages();
  return (
    <>
      {allImages.map((image) => (
        <Image
          key={image.id}
          src={image.url}
          width={480}
          height={480}
          alt={"Image"}
          style={{ objectFit: "contain" }}
        />
      ))}
    </>
  );
}
