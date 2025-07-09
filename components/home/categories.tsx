"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shirt, Coffee, Smartphone, Gift, Palette, ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: "apparel",
    name: "Custom Apparel",
    description: "T-shirts, Hoodies, Caps & More",
    icon: Shirt,
    color: "from-teal-500 to-emerald-600",
    bgColor: "from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20",
    count: "50+ Products",
    popular: true,
  },
  {
    id: "drinkware",
    name: "Custom Drinkware",
    description: "Mugs, Bottles, Tumblers",
    icon: Coffee,
    color: "from-emerald-500 to-cyan-600",
    bgColor: "from-emerald-50 to-cyan-50 dark:from-emerald-950/20 dark:to-cyan-950/20",
    count: "30+ Products",
    popular: false,
  },
  {
    id: "accessories",
    name: "Phone Cases",
    description: "Custom Phone & Tablet Cases",
    icon: Smartphone,
    color: "from-cyan-500 to-teal-600",
    bgColor: "from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20",
    count: "25+ Products",
    popular: true,
  },
  {
    id: "gifts",
    name: "Custom Gifts",
    description: "Personalized Gift Items",
    icon: Gift,
    color: "from-teal-600 to-emerald-700",
    bgColor: "from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20",
    count: "40+ Products",
    popular: false,
  },
]

export default function Categories() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white border-0 mb-4">
            <Palette className="h-3 w-3 mr-1" />
            Product Categories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair mb-6">
            What Would You Like to{" "}
            <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-700 bg-clip-text text-transparent">
              Customize?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our wide range of premium products and make them uniquely yours with our advanced customization
            tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Category Header */}
                  <div className={`relative p-8 bg-gradient-to-br ${category.bgColor} overflow-hidden`}>
                    {category.popular && (
                      <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-xs">
                        Popular
                      </Badge>
                    )}

                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold font-playfair mb-2 group-hover:text-teal-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{category.description}</p>

                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-teal-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Category Content */}
                  <div className="p-6">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <Link href={`/products?category=${category.id}`}>Explore & Customize</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* View All Categories */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 bg-transparent"
          >
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
