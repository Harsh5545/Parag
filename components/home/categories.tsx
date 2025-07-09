"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shirt, Coffee, Smartphone, Gift, Palette, ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: "nameplates",
    name: "Custom Nameplates",
    description: "Personalized Door & Wall Nameplates",
    icon: BadgeCheck, // Example icon for verified custom items
    color: "from-amber-500 to-yellow-600",
    bgColor: "from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20",
    count: "20+ Designs",
    popular: true,
  },
  {
    id: "wallart",
    name: "Wall Art",
    description: "Metal, Canvas & Wooden Wall Decor",
    icon: Image, // Represents artwork
    color: "from-rose-500 to-pink-600",
    bgColor: "from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20",
    count: "35+ Designs",
    popular: true,
  },
  {
    id: "furniture",
    name: "Custom Furniture",
    description: "Tables, Shelves & Custom Cabinets",
    icon: Sofa, // Or Home icon if Sofa not available
    color: "from-emerald-500 to-green-600",
    bgColor: "from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20",
    count: "15+ Products",
    popular: false,
  },
  {
    id: "decor",
    name: "Home Decor",
    description: "Lamps, Clocks & Accessories",
    icon: Lamp, // Use a lamp/bulb icon
    color: "from-indigo-500 to-purple-600",
    bgColor: "from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20",
    count: "40+ Products",
    popular: true,
  },
];


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
