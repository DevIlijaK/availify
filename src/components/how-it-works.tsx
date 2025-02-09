import { ClipboardList, PenTool, Upload } from "lucide-react";

const steps = [
  {
    icon: <ClipboardList className="h-12 w-12 text-purple-600" />,
    title: "Choose a Template",
    description:
      "Select from our wide range of professionally designed menu templates.",
  },
  {
    icon: <PenTool className="h-12 w-12 text-purple-600" />,
    title: "Customize Your Menu",
    description:
      "Add your items, prices, and descriptions. Customize colors and fonts to match your brand.",
  },
  {
    icon: <Upload className="h-12 w-12 text-purple-600" />,
    title: "Publish and Share",
    description:
      "Instantly publish your menu and share it across all your digital platforms.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Get your digital menu up and running in minutes
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-xl font-bold text-white">
              1
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Create Account
            </h3>
            <p className="mt-2 text-gray-600">
              Sign up for free and set up your restaurant profile
            </p>
          </div>

          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-xl font-bold text-white">
              2
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Add Menu Items
            </h3>
            <p className="mt-2 text-gray-600">
              Upload your menu items with images and descriptions
            </p>
          </div>

          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-xl font-bold text-white">
              3
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Customize & Share
            </h3>
            <p className="mt-2 text-gray-600">
              Choose your theme, customize layout, and share with customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
