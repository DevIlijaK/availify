import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export async function Images() {
  const allImages = await getMyImages();
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {allImages.map((image) => (
        <div key={image.id}>
          <Link href={`/img/${image.id}`} passHref>
            <Image
              src={image.url}
              alt={"Image"}
              width={500}
              height={500}
              style={{ objectFit: "contain", height: "auto", width: "auto" }}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
