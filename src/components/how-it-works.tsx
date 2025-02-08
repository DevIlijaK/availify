import { ClipboardList, PenTool, Upload } from "lucide-react"

const steps = [
  {
    icon: <ClipboardList className="h-12 w-12 text-purple-600" />,
    title: "Choose a Template",
    description: "Select from our wide range of professionally designed menu templates.",
  },
  {
    icon: <PenTool className="h-12 w-12 text-purple-600" />,
    title: "Customize Your Menu",
    description: "Add your items, prices, and descriptions. Customize colors and fonts to match your brand.",
  },
  {
    icon: <Upload className="h-12 w-12 text-purple-600" />,
    title: "Publish and Share",
    description: "Instantly publish your menu and share it across all your digital platforms.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-sm">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

