"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shirt, Coffee, Home, Gift, Palette, Smartphone } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Apparel",
    icon: Shirt,
    count: "45+ Products",
    color: "from-blue-500 to-purple-600",
    href: "/categories/apparel",
  },
  {
    name: "Drinkware",
    icon: Coffee,
    count: "25+ Products",
    color: "from-orange-500 to-red-600",
    href: "/categories/drinkware",
  },
  {
    name: "Home & Living",
    icon: Home,
    count: "30+ Products",
    color: "from-green-500 to-teal-600",
    href: "/categories/home",
  },
  {
    name: "Gifts",
    icon: Gift,
    count: "20+ Products",
    color: "from-pink-500 to-rose-600",
    href: "/categories/gifts",
  },
  {
    name: "Stationery",
    icon: Palette,
    count: "15+ Products",
    color: "from-yellow-500 to-orange-600",
    href: "/categories/stationery",
  },
  {
    name: "Tech Accessories",
    icon: Smartphone,
    count: "12+ Products",
    color: "from-indigo-500 to-blue-600",
    href: "/categories/tech",
  },
]

export default function Categories() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Shop by{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our wide range of customizable products across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={category.name} href={category.href}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color}`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    Customize and personalize {category.name.toLowerCase()} products
                  </p>

                  <div className="flex items-center text-sm font-medium text-primary group-hover:translate-x-2 transition-transform">
                    Explore Collection →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
