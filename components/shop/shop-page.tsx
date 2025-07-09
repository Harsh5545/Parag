"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, ShoppingCart, Star, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/components/cart/cart-context"
import { useWishlist } from "@/components/wishlist/wishlist-context"
import { toast } from "@/components/ui/use-toast"

const products = [
  {
    id: 1,
    name: "Elegant Wooden Nameplate",
    price: 2999,
    originalPrice: 3999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 124,
    category: "Nameplates",
    isNew: true,
    description: "Handcrafted wooden nameplate with premium finish",
  },
  {
    id: 2,
    name: "Modern Abstract Wall Art",
    price: 4999,
    originalPrice: 6999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 89,
    category: "Wall Art",
    isNew: false,
    description: "Contemporary wall art piece for modern homes",
  },
  {
    id: 3,
    name: "Designer Table Lamp",
    price: 3499,
    originalPrice: 4499,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 156,
    category: "Lamps",
    isNew: true,
    description: "Stylish table lamp with adjustable brightness",
  },
  {
    id: 4,
    name: "Vintage Wall Clock",
    price: 1999,
    originalPrice: 2999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 203,
    category: "Decor",
    isNew: false,
    description: "Classic vintage-style wall clock",
  },
  {
    id: 5,
    name: "Custom Metal Nameplate",
    price: 3999,
    originalPrice: 4999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 67,
    category: "Nameplates",
    isNew: true,
    description: "Premium metal nameplate with laser engraving",
  },
  {
    id: 6,
    name: "Geometric Wall Art Set",
    price: 5999,
    originalPrice: 7999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 45,
    category: "Wall Art",
    isNew: false,
    description: "Set of 3 geometric wall art pieces",
  },
]

const categories = ["All", "Nameplates", "Wall Art", "Lamps", "Decor"]
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest First" },
]

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")
  const { addItem } = useCart()
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist()

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleWishlistToggle = (product: (typeof products)[0]) => {
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
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      })
    }
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop Interior Products</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our premium collection of custom interior design products for your home and office spaces.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && <Badge className="bg-green-500 hover:bg-green-600">New</Badge>}
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>

                  {/* Wishlist Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                    onClick={() => handleWishlistToggle(product)}
                  >
                    <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>

                  {/* Quick Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" asChild>
                        <Link href={`/products/${product.id}`}>View Details</Link>
                      </Button>
                      <Button size="sm" variant="secondary" onClick={() => handleAddToCart(product)}>
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
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
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">₹{product.price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-green-600">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  )
}
