"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Small Business Owner",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The live preview feature is amazing! I could see exactly how my custom t-shirts would look before ordering. The quality exceeded my expectations.",
    product: "Custom T-Shirts",
  },
  {
    name: "Rahul Patel",
    role: "Event Organizer",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Ordered 50 custom mugs for our corporate event. The admin panel made tracking everything so easy, and the WhatsApp updates were very helpful.",
    product: "Custom Mugs",
  },
  {
    name: "Sneha Gupta",
    role: "Gift Shop Owner",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "CustomCraft has transformed my business. The variety of customization options and the professional quality have impressed all my customers.",
    product: "Various Products",
  },
  {
    name: "Amit Kumar",
    role: "Marketing Manager",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The mobile experience is fantastic. I can customize products on the go, and the responsive design works perfectly on my phone.",
    product: "Custom Hoodies",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="h-8 w-8 text-purple-500 flex-shrink-0 mt-1" />
                  <p className="text-lg leading-relaxed text-muted-foreground italic">"{testimonial.text}"</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-purple-600 font-medium">{testimonial.product}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
