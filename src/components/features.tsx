import { Icon } from "./icon";

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to Manage Your Menu
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            A complete solution for creating and managing digital menus that
            look great and are easy to update
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-3">
          <div className="flex flex-col items-start">
            <div className="rounded-2xl bg-purple-100 p-3">
              <Icon name="PenTool" className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Customizable Design
            </h3>
            <p className="mt-2 text-gray-600">
              Customize colors, layouts, and styles to match your brand
              perfectly
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="rounded-2xl bg-purple-100 p-3">
              <Icon name="Image" className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Image Management
            </h3>
            <p className="mt-2 text-gray-600">
              Upload and manage high-quality images for your menu items
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="rounded-2xl bg-purple-100 p-3">
              <Icon name="ListOrdered" className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Category Organization
            </h3>
            <p className="mt-2 text-gray-600">
              Organize items into categories for easy navigation
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="rounded-2xl bg-purple-100 p-3">
              <Icon name="Smartphone" className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Mobile First
            </h3>
            <p className="mt-2 text-gray-600">
              Responsive design that works perfectly on all devices
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="rounded-2xl bg-purple-100 p-3">
              <Icon name="BarChart" className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Analytics
            </h3>
            <p className="mt-2 text-gray-600">
              Track views and engagement with your digital menu
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="rounded-2xl bg-purple-100 p-3">
              <Icon name="Clock" className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Quick Updates
            </h3>
            <p className="mt-2 text-gray-600">
              Update prices and items in real-time with no delay
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
