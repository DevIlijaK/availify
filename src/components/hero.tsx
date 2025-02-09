"use client";

import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Icon } from "./icon";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Transform Your Menu Experience
            </h1>
            <p className="mt-6 text-center text-lg leading-8 text-gray-300">
              Create stunning digital menus that captivate your customers.
              Customize layouts, themes, and update items in real-time. Perfect
              for restaurants, cafes, and food service businesses.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-6 sm:flex-row">
              <Button
                size="lg"
                onClick={() => router.push("/get-started")}
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                Get Started Free
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => router.push("/demo")}
              >
                Live Demo
                <Icon name="ExternalLink" className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-6 text-white">
              <Icon name="Palette" className="h-8 w-8" />
              <h3 className="mt-4 text-lg font-semibold">Beautiful Themes</h3>
              <p className="mt-2 text-sm text-gray-300">
                Choose from a variety of professionally designed themes or
                create your own
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 text-white">
              <Icon name="LayoutGrid" className="h-8 w-8" />
              <h3 className="mt-4 text-lg font-semibold">Flexible Layouts</h3>
              <p className="mt-2 text-sm text-gray-300">
                Multiple layout options to showcase your menu items perfectly
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 text-white">
              <Icon name="Smartphone" className="h-8 w-8" />
              <h3 className="mt-4 text-lg font-semibold">Mobile Optimized</h3>
              <p className="mt-2 text-sm text-gray-300">
                Looks great on all devices, from phones to tablets
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 text-white">
              <Icon name="Zap" className="h-8 w-8" />
              <h3 className="mt-4 text-lg font-semibold">Real-time Updates</h3>
              <p className="mt-2 text-sm text-gray-300">
                Update prices and items instantly, no waiting
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
