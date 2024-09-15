import FullpageImageView from "~/components/full-image-page";

export default async function PhotoPage({
  params: { id },
}: {
  params: { id: number };
}) {
  return <FullpageImageView id={id} />;
}
