"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Palette, Eye, Truck, Shield, Clock, Award, Smartphone, Headphones } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "Live Preview",
    description: "See exactly how your custom product will look before you buy with our real-time preview feature.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Easy Customization",
    description: "Simple drag-and-drop interface with multiple fonts, colors, and design options.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "High-quality materials and professional printing ensure your custom products last.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick processing and shipping with real-time order tracking via WhatsApp.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Multiple payment options including UPI, cards, and COD with secure processing.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support via WhatsApp and email for all your queries.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Fully responsive design that works perfectly on all devices and screen sizes.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Headphones,
    title: "Expert Guidance",
    description: "Our design experts are available to help you create the perfect custom product.",
    color: "from-pink-500 to-red-500",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              CustomCraft
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the best in custom product creation with our advanced features and premium service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>

                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
