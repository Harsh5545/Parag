"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ShoppingCart, Heart, Share2, Palette, Plus, Minus, Eye, Star } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface Product {
  id: string
  name: string
  description: string
  basePrice: number
  images: string[]
  category: string
  sizes: string[]
  colors: string[]
  customizationOptions: {
    allowText: boolean
    allowImages: boolean
    maxTextLength: number
    fonts: string[]
    textColors: string[]
    positions: string[]
  }
}

interface CustomizationState {
  text: string
  font: string
  fontSize: number
  textColor: string
  position: string
  selectedSize: string
  selectedColor: string
  quantity: number
}

export default function ProductCustomizer({ product }: { product: Product }) {
  const { toast } = useToast()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const [customization, setCustomization] = useState<CustomizationState>({
    text: "Your Text Here",
    font: "Arial",
    fontSize: 24,
    textColor: "#000000",
    position: "Center",
    selectedSize: "M",
    selectedColor: "White",
    quantity: 1,
  })

  const [currentPrice, setCurrentPrice] = useState(product.basePrice)
  const [isInWishlist, setIsInWishlist] = useState(false)

  // Calculate dynamic pricing based on customization
  useEffect(() => {
    let price = product.basePrice

    // Add price for text customization
    if (customization.text && customization.text !== "Your Text Here") {
      price += 50
    }

    // Add price for larger sizes
    if (["XL", "XXL"].includes(customization.selectedSize)) {
      price += 100
    }

    // Multiply by quantity
    price *= customization.quantity

    setCurrentPrice(price)
  }, [customization, product.basePrice])

  // Draw preview on canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw product background
    ctx.fillStyle =
      customization.selectedColor.toLowerCase() === "white"
        ? "#f8f9fa"
        : customization.selectedColor.toLowerCase() === "black"
          ? "#212529"
          : customization.selectedColor.toLowerCase() === "navy"
            ? "#001f3f"
            : customization.selectedColor.toLowerCase() === "red"
              ? "#dc3545"
              : "#6c757d"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw text if exists
    if (customization.text) {
      ctx.font = `${customization.fontSize}px ${customization.font}`
      ctx.fillStyle = customization.textColor
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      let x = canvas.width / 2
      let y = canvas.height / 2

      // Adjust position based on selection
      switch (customization.position) {
        case "Top":
          y = canvas.height * 0.25
          break
        case "Bottom":
          y = canvas.height * 0.75
          break
        case "Left":
          x = canvas.width * 0.25
          break
        case "Right":
          x = canvas.width * 0.75
          break
      }

      ctx.fillText(customization.text, x, y)
    }
  }, [customization])

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart!",
      description: `${product.name} with custom design added to your cart.`,
    })
  }

  const handleAddToWishlist = () => {
    setIsInWishlist(!isInWishlist)
    toast({
      title: isInWishlist ? "Removed from Wishlist" : "Added to Wishlist!",
      description: isInWishlist ? "Item removed from your wishlist." : "Item saved to your wishlist.",
    })
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast({
        title: "Link Copied!",
        description: "Product link copied to clipboard.",
      })
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left Side - Product Preview */}
      <div className="space-y-6">
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg">
            <canvas
              ref={canvasRef}
              width={400}
              height={400}
              className="w-full h-full rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600"
            />
          </div>

          {/* Preview Badge */}
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600">
            <Eye className="h-3 w-3 mr-1" />
            Live Preview
          </Badge>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              size="icon"
              variant="secondary"
              onClick={handleAddToWishlist}
              className={isInWishlist ? "text-red-500" : ""}
            >
              <Heart className={`h-4 w-4 ${isInWishlist ? "fill-current" : ""}`} />
            </Button>
            <Button size="icon" variant="secondary" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-muted-foreground mt-2">{product.description}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-muted-foreground ml-2">(4.8) 234 reviews</span>
            </div>
          </div>

          <div className="text-3xl font-bold text-primary">
            ₹{currentPrice.toLocaleString()}
            {currentPrice > product.basePrice && (
              <span className="text-lg text-muted-foreground line-through ml-2">
                ₹{(product.basePrice * customization.quantity).toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Right Side - Customization Options */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Customize Your Product
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="text" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="text">Text</TabsTrigger>
                <TabsTrigger value="style">Style</TabsTrigger>
                <TabsTrigger value="product">Product</TabsTrigger>
              </TabsList>

              <TabsContent value="text" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="custom-text">Custom Text</Label>
                  <Textarea
                    id="custom-text"
                    placeholder="Enter your custom text..."
                    value={customization.text}
                    onChange={(e) => setCustomization((prev) => ({ ...prev, text: e.target.value }))}
                    maxLength={product.customizationOptions.maxTextLength}
                  />
                  <div className="text-sm text-muted-foreground">
                    {customization.text.length}/{product.customizationOptions.maxTextLength} characters
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Font Family</Label>
                  <Select
                    value={customization.font}
                    onValueChange={(value) => setCustomization((prev) => ({ ...prev, font: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {product.customizationOptions.fonts.map((font) => (
                        <SelectItem key={font} value={font} style={{ fontFamily: font }}>
                          {font}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Font Size: {customization.fontSize}px</Label>
                  <Slider
                    value={[customization.fontSize]}
                    onValueChange={([value]) => setCustomization((prev) => ({ ...prev, fontSize: value }))}
                    min={12}
                    max={48}
                    step={2}
                  />
                </div>
              </TabsContent>

              <TabsContent value="style" className="space-y-4">
                <div className="space-y-2">
                  <Label>Text Color</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {product.customizationOptions.textColors.map((color) => (
                      <button
                        key={color}
                        className={`w-12 h-12 rounded-lg border-2 ${
                          customization.textColor === color ? "border-primary" : "border-gray-200"
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setCustomization((prev) => ({ ...prev, textColor: color }))}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Text Position</Label>
                  <Select
                    value={customization.position}
                    onValueChange={(value) => setCustomization((prev) => ({ ...prev, position: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {product.customizationOptions.positions.map((position) => (
                        <SelectItem key={position} value={position}>
                          {position}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>

              <TabsContent value="product" className="space-y-4">
                <div className="space-y-2">
                  <Label>Size</Label>
                  <div className="grid grid-cols-5 gap-2">
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        variant={customization.selectedSize === size ? "default" : "outline"}
                        onClick={() => setCustomization((prev) => ({ ...prev, selectedSize: size }))}
                        className="h-12"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Color</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {product.colors.map((color) => (
                      <Button
                        key={color}
                        variant={customization.selectedColor === color ? "default" : "outline"}
                        onClick={() => setCustomization((prev) => ({ ...prev, selectedColor: color }))}
                        className="h-12"
                      >
                        {color}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Quantity</Label>
                  <div className="flex items-center gap-4">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() =>
                        setCustomization((prev) => ({
                          ...prev,
                          quantity: Math.max(1, prev.quantity - 1),
                        }))
                      }
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-xl font-semibold w-12 text-center">{customization.quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() =>
                        setCustomization((prev) => ({
                          ...prev,
                          quantity: prev.quantity + 1,
                        }))
                      }
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Purchase Actions */}
        <div className="space-y-4">
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart - ₹{currentPrice.toLocaleString()}
          </Button>

          <Button size="lg" variant="outline" className="w-full bg-transparent">
            Buy Now
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Free Shipping</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>7-Day Returns</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Premium Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span>Fast Delivery</span>
          </div>
        </div>
      </div>
    </div>
  )
}
