"use client";

import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto flex flex-col items-center px-6 py-24 text-center">
        <h1 className="mb-6 text-5xl font-bold md:text-6xl">
          Create Stunning Digital Menus
        </h1>
        <p className="mb-8 max-w-2xl text-xl md:text-2xl">
          {`Elevate your restaurant's dining experience with our easy-to-use menu creation app. Design, update, and share
          your menu in minutes.`}
        </p>
        <Button
          size="lg"
          className="bg-white text-purple-600 hover:bg-gray-100"
          onClick={() => router.push("/product-list")}
        >
          Get Started Free
        </Button>
      </div>
    </section>
  );
}
