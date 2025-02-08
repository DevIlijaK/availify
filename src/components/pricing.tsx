import { Check } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"

const plans = [
  {
    name: "Basic",
    price: "$9",
    features: ["1 Menu", "Basic Templates", "Regular Updates", "Email Support"],
  },
  {
    name: "Pro",
    price: "$29",
    features: ["5 Menus", "Premium Templates", "Instant Updates", "Priority Support", "Analytics"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited Menus", "Custom Templates", "API Access", "Dedicated Support", "Advanced Analytics"],
  },
]

export default function Pricing() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={index === 1 ? "border-purple-600 border-2" : ""}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold mb-4">{plan.price}</p>
                <p className="text-gray-600 mb-6">{index === 2 ? "per month" : "per month per restaurant"}</p>
                <ul className="text-left mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center mb-2">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={index === 1 ? "bg-purple-600 hover:bg-purple-700" : ""}>
                  {index === 2 ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

