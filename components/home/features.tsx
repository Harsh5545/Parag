"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Zap, Shield, Truck, Palette, Star, Award } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "Live Preview",
    description: "See your design in real-time as you create it",
    color: "from-teal-500 to-emerald-600",
    bgColor: "from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Quick turnaround time with express production",
    color: "from-emerald-500 to-cyan-600",
    bgColor: "from-emerald-50 to-cyan-50 dark:from-emerald-950/20 dark:to-cyan-950/20",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Premium materials with 100% satisfaction guarantee",
    color: "from-cyan-500 to-teal-600",
    bgColor: "from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on orders above ₹999",
    color: "from-teal-600 to-emerald-700",
    bgColor: "from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20",
  },
  {
    icon: Palette,
    title: "Unlimited Designs",
    description: "Create as many designs as you want",
    color: "from-emerald-600 to-cyan-700",
    bgColor: "from-emerald-50 to-cyan-50 dark:from-emerald-950/20 dark:to-cyan-950/20",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in customization",
    color: "from-cyan-600 to-teal-700",
    bgColor: "from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white border-0 mb-4">
            <Star className="h-3 w-3 mr-1" />
            Why Choose Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair mb-6">
            Premium{" "}
            <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-700 bg-clip-text text-transparent">
              Customization
            </span>{" "}
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide the best-in-class customization experience with cutting-edge technology and premium quality
            materials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold font-playfair mb-4 group-hover:text-teal-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold font-playfair bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-muted-foreground font-medium">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold font-playfair bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-muted-foreground font-medium">Product Types</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold font-playfair bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-muted-foreground font-medium">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold font-playfair bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-muted-foreground font-medium">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
