import { Utensils, Edit, Share2, Smartphone } from "lucide-react"

const features = [
  {
    icon: <Utensils className="h-8 w-8 text-purple-600" />,
    title: "Customizable Templates",
    description: "Choose from a variety of professionally designed templates to match your brand.",
  },
  {
    icon: <Edit className="h-8 w-8 text-purple-600" />,
    title: "Easy Editing",
    description: "Update your menu items, prices, and descriptions with just a few clicks.",
  },
  {
    icon: <Share2 className="h-8 w-8 text-purple-600" />,
    title: "Instant Updates",
    description: "Changes reflect immediately across all your digital platforms.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-purple-600" />,
    title: "Mobile Friendly",
    description: "Your menu looks great on any device, from smartphones to tablets.",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Menu App?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

