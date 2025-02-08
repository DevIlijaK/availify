import { Card, CardContent } from "~/components/ui/card"

const testimonials = [
  {
    quote: "This menu app has revolutionized how we manage our restaurant's offerings. It's so easy to use!",
    author: "Jane Doe",
    restaurant: "The Gourmet Kitchen",
  },
  {
    quote: "Our customers love how professional and easy-to-read our new digital menu is. Highly recommended!",
    author: "John Smith",
    restaurant: "Café Delights",
  },
  {
    quote: "Updating our menu used to be a hassle, but now it's a breeze. This app is a game-changer!",
    author: "Emily Brown",
    restaurant: "Tasty Bites Diner",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.restaurant}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

