import { deleteMyImage, getMyImage } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullpageImageView(input: { id: number }) {
  const { id } = input;
  const image = await getMyImage({ id });
  return (
    <div className="flex h-full w-full">
      <div>
        <img src={image.url} alt={"Image"} className="object-contain" />
      </div>
      <div className="flex w-48 flex-col">
        <div className="text-xl font-bold">{image.name}</div>
        <form
          action={async () => {
            "use server";
            console.log("test");
            await deleteMyImage({ id });
          }}
        >
          <Button type="submit" variant="destructive">
            Delete
          </Button>
        </form>
      </div>
    </div>
  );
}
