"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Palette, ShoppingCart, Eye } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

const productTypes = [
  { id: "nameplate", name: "Custom Nameplate", basePrice: 2999 },
  { id: "wallart", name: "Wall Art", basePrice: 4999 },
  { id: "lamp", name: "Designer Lamp", basePrice: 3499 },
]

const materials = [
  { id: "wood", name: "Premium Wood", price: 0 },
  { id: "metal", name: "Stainless Steel", price: 500 },
  { id: "acrylic", name: "Acrylic", price: 300 },
  { id: "marble", name: "Marble", price: 1000 },
]

const sizes = [
  { id: "small", name: "Small (12x6 inches)", price: 0 },
  { id: "medium", name: "Medium (18x8 inches)", price: 500 },
  { id: "large", name: "Large (24x10 inches)", price: 1000 },
]

const colors = [
  { id: "natural", name: "Natural", hex: "#D2B48C" },
  { id: "black", name: "Black", hex: "#000000" },
  { id: "white", name: "White", hex: "#FFFFFF" },
  { id: "gold", name: "Gold", hex: "#FFD700" },
  { id: "silver", name: "Silver", hex: "#C0C0C0" },
]

export default function CustomizePage() {
  const [selectedProduct, setSelectedProduct] = useState(productTypes[0])
  const [customText, setCustomText] = useState("")
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0])
  const [selectedSize, setSelectedSize] = useState(sizes[0])
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [font, setFont] = useState("serif")
  const [specialInstructions, setSpecialInstructions] = useState("")

  const calculatePrice = () => {
    return selectedProduct.basePrice + selectedMaterial.price + selectedSize.price
  }

  const handleAddToCart = () => {
    toast({
      title: "Custom product added to cart",
      description: "Your customized product has been added to cart for ₹" + calculatePrice().toLocaleString(),
    })
  }

  const handleRequestQuote = () => {
    toast({
      title: "Quote requested",
      description: "We'll send you a detailed quote within 24 hours.",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customize Your Design</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create personalized interior design products tailored to your unique style and space requirements.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Customization Panel */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Product Customization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Product Type */}
                <div className="space-y-2">
                  <Label>Product Type</Label>
                  <Select
                    value={selectedProduct.id}
                    onValueChange={(value) =>
                      setSelectedProduct(productTypes.find((p) => p.id === value) || productTypes[0])
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {productTypes.map((product) => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.name} - ₹{product.basePrice.toLocaleString()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Custom Text */}
                <div className="space-y-2">
                  <Label>Custom Text</Label>
                  <Input
                    placeholder="Enter your custom text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                  />
                </div>

                {/* Material */}
                <div className="space-y-2">
                  <Label>Material</Label>
                  <Select
                    value={selectedMaterial.id}
                    onValueChange={(value) =>
                      setSelectedMaterial(materials.find((m) => m.id === value) || materials[0])
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {materials.map((material) => (
                        <SelectItem key={material.id} value={material.id}>
                          {material.name} {material.price > 0 && `(+₹${material.price})`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Size */}
                <div className="space-y-2">
                  <Label>Size</Label>
                  <Select
                    value={selectedSize.id}
                    onValueChange={(value) => setSelectedSize(sizes.find((s) => s.id === value) || sizes[0])}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {sizes.map((size) => (
                        <SelectItem key={size.id} value={size.id}>
                          {size.name} {size.price > 0 && `(+₹${size.price})`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Color */}
                <div className="space-y-2">
                  <Label>Color</Label>
                  <div className="grid grid-cols-5 gap-2">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        className={`w-12 h-12 rounded-lg border-2 ${
                          selectedColor.id === color.id ? "border-primary" : "border-muted"
                        }`}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => setSelectedColor(color)}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Font */}
                <div className="space-y-2">
                  <Label>Font Style</Label>
                  <Select value={font} onValueChange={setFont}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="serif">Serif</SelectItem>
                      <SelectItem value="sans">Sans Serif</SelectItem>
                      <SelectItem value="script">Script</SelectItem>
                      <SelectItem value="modern">Modern</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Special Instructions */}
                <div className="space-y-2">
                  <Label>Special Instructions</Label>
                  <Textarea
                    placeholder="Any special requirements or design preferences..."
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Price Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Price Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Base Price ({selectedProduct.name})</span>
                  <span>₹{selectedProduct.basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Material ({selectedMaterial.name})</span>
                  <span>₹{selectedMaterial.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Size ({selectedSize.name.split("(")[0]})</span>
                  <span>₹{selectedSize.price.toLocaleString()}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Price</span>
                    <span>₹{calculatePrice().toLocaleString()}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <Button onClick={handleAddToCart} className="w-full">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" onClick={handleRequestQuote} className="w-full bg-transparent">
                    Request Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Live Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted/30 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div
                    className="text-center p-8 rounded-lg shadow-lg"
                    style={{
                      backgroundColor: selectedColor.hex,
                      color: selectedColor.id === "white" ? "#000" : "#fff",
                      fontFamily:
                        font === "serif"
                          ? "serif"
                          : font === "sans"
                            ? "sans-serif"
                            : font === "script"
                              ? "cursive"
                              : "monospace",
                    }}
                  >
                    <div className="text-2xl font-bold mb-2">{customText || "Your Custom Text"}</div>
                    <div className="text-sm opacity-75">
                      {selectedMaterial.name} • {selectedSize.name.split("(")[0]}
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  This is a preview of your customized {selectedProduct.name.toLowerCase()}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>What You Get</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Premium quality materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Professional craftsmanship</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Free design consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>7-10 days delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>1-year warranty</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
