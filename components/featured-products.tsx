"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Eye, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredProducts = [
  {
    id: "1",
    name: "Custom Premium T-Shirt",
    description: "High-quality cotton with custom text and design options",
    price: 599,
    originalPrice: 799,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    customizable: true,
  },
  {
    id: "2",
    name: "Personalized Coffee Mug",
    description: "Ceramic mug perfect for custom messages and photos",
    price: 349,
    originalPrice: 449,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 89,
    badge: "New",
    customizable: true,
  },
  {
    id: "3",
    name: "Custom Hoodie",
    description: "Comfortable hoodie with premium printing options",
    price: 1199,
    originalPrice: 1499,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 156,
    badge: "Popular",
    customizable: true,
  },
  {
    id: "4",
    name: "Personalized Phone Case",
    description: "Protective case with custom design capabilities",
    price: 499,
    originalPrice: 699,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 78,
    badge: "Limited",
    customizable: true,
  },
]

export default function FeaturedProducts() {
  const getBadgeColor = (badge: string) => {
    switch (badge.toLowerCase()) {
      case "bestseller":
        return "bg-green-500"
      case "new":
        return "bg-blue-500"
      case "popular":
        return "bg-purple-500"
      case "limited":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular customizable products with live preview features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Badge */}
                  <Badge className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white border-0`}>
                    {product.badge}
                  </Badge>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Customizable Badge */}
                  {product.customizable && (
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900">
                        Customizable
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>

                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{product.name}</h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button asChild className="flex-1" size="sm">
                      <Link href={`/products/${product.id}`}>Customize</Link>
                    </Button>
                    <Button size="sm" variant="outline" className="px-3 bg-transparent">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
