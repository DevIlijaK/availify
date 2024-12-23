"use client";

import { useRouter } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import { toast } from "sonner";
import { useUploadThing } from "~/utils/uploadthing";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
    // TODO: persist result in state maybe?
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.routeConfig?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

export function UploadSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
      />
    </svg>
  );
}
export function LoadingBlocks() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="spinner_9Mto"
        x="1"
        y="1"
        rx="1"
        width="10"
        height="10"
      />
      <rect
        className="spinner_9Mto spinner_bb12"
        x="1"
        y="1"
        rx="1"
        width="10"
        height="10"
      />
    </svg>
  );
}

export function SimpleUploadButton() {
  const router = useRouter();
  const posthog = usePostHog();
  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onUploadBegin() {
      posthog.capture("upload_begin");
      toast(
        <div>
          <LoadingBlocks /> Loading
        </div>,
        {
          duration: 100000,
          id: "upload-begin",
        },
      );
    },
    onClientUploadComplete() {
      toast.dismiss("upload-begin");
      toast("Upload completed!");
      router.refresh();
    },
    onUploadError(error) {
      posthog.capture("upload_error", { error });
      toast.dismiss("upload-begin");
      toast.error("Uploading failed!");
    },
  });
  return (
    <div className="flex h-full justify-center align-middle">
      <label
        htmlFor="upload-button"
        className="flex h-full cursor-pointer justify-center align-middle"
      >
        <UploadSVG />
      </label>
      <input
        id="upload-button"
        type="file"
        className="sr-only"
        {...inputProps}
        multiple={true}
      />
    </div>
  );
}
