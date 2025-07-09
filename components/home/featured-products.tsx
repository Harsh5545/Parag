"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Eye, Star, Palette, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/components/cart/cart-context"
import { useWishlist } from "@/components/wishlist/wishlist-context"
import { toast } from "@/components/ui/use-toast"

const featuredProducts = [
  {
    id: "1",
    name: "Premium Custom T-Shirt",
    description: "High-quality cotton with unlimited design options",
    price: 599,
    originalPrice: 799,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviews: 234,
    badge: "Bestseller",
    badgeColor: "from-green-500 to-emerald-600",
    customizable: true,
    category: "Apparel",
  },
  {
    id: "2",
    name: "Custom Coffee Mug",
    description: "Ceramic mug perfect for photos and text",
    price: 349,
    originalPrice: 449,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    reviews: 189,
    badge: "Popular",
    badgeColor: "from-blue-500 to-cyan-600",
    customizable: true,
    category: "Drinkware",
  },
  {
    id: "3",
    name: "Designer Phone Case",
    description: "Protective case with custom design options",
    price: 499,
    originalPrice: 699,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    reviews: 156,
    badge: "New",
    badgeColor: "from-purple-500 to-pink-600",
    customizable: true,
    category: "Accessories",
  },
  {
    id: "4",
    name: "Custom Hoodie",
    description: "Premium hoodie with advanced printing",
    price: 1299,
    originalPrice: 1599,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviews: 298,
    badge: "Premium",
    badgeColor: "from-orange-500 to-red-600",
    customizable: true,
    category: "Apparel",
  },
  {
    id: "5",
    name: "Personalized Water Bottle",
    description: "Stainless steel bottle with custom engraving",
    price: 799,
    originalPrice: 999,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.6,
    reviews: 127,
    badge: "Eco-Friendly",
    badgeColor: "from-green-600 to-teal-700",
    customizable: true,
    category: "Drinkware",
  },
  {
    id: "6",
    name: "Custom Laptop Sleeve",
    description: "Protective sleeve with personalized design",
    price: 899,
    originalPrice: 1199,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    reviews: 203,
    badge: "Limited",
    badgeColor: "from-red-500 to-pink-600",
    customizable: true,
    category: "Accessories",
  },
]

export default function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const { addItem } = useCart()
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist()

  const handleAddToCart = (product: (typeof featuredProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleWishlistToggle = (product: (typeof featuredProducts)[0]) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      })
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
      toast({
        title: "Added to wishlist!",
        description: `${product.name} has been added to your wishlist.`,
      })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white border-0 mb-4">
            <Zap className="h-3 w-3 mr-1" />
            Featured Products
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair mb-6">
            Most{" "}
            <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-700 bg-clip-text text-transparent">
              Customized
            </span>{" "}
            Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our bestselling customizable products loved by thousands of customers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 overflow-hidden"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className={`bg-gradient-to-r ${product.badgeColor} text-white border-0 shadow-lg`}>
                      {product.badge}
                    </Badge>
                    {product.customizable && (
                      <Badge className="bg-white/90 text-gray-900 border-0">
                        <Palette className="h-3 w-3 mr-1" />
                        Customizable
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg"
                      onClick={() => handleWishlistToggle(product)}
                    >
                      <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-red-500 text-red-500" : ""}`} />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg"
                      asChild
                    >
                      <Link href={`/products/${product.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex gap-2">
                      <Button
                        className="flex-1 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-xl font-semibold shadow-lg"
                        asChild
                      >
                        <Link href={`/customize/${product.id}`}>
                          <Palette className="h-4 w-4 mr-2" />
                          Customize
                        </Link>
                      </Button>
                      <Button
                        size="icon"
                        className="bg-white/90 hover:bg-white text-gray-900 rounded-xl shadow-lg"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <Badge variant="outline" className="mb-3 text-xs">
                    {product.category}
                  </Badge>

                  <h3 className="font-bold text-lg mb-2 group-hover:text-teal-600 transition-colors font-playfair">
                    {product.name}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold font-playfair bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                        ₹{product.price}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Link href="/products">
              View All Products
              <Eye className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
