import { Modal } from "./modal";
import FullpageImageView from "~/components/full-image-page";

export default async function PhotoModal({
  params: { id },
}: {
  params: { id: number };
}) {
  return (
    <Modal>
      <FullpageImageView id={id} />
    </Modal>
  );
}
