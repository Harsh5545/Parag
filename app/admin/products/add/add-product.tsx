// "use client"

// import { useState, useRef } from "react"
// import { useSearchParams } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Switch } from "@/components/ui/switch"
// import { Badge } from "@/components/ui/badge"
// import { Package, Palette, X, Plus, Trash2, Eye, Save, ArrowLeft, ImageIcon, Loader2 } from "lucide-react"
// import Link from "next/link"
// import { useToast } from "@/components/ui/use-toast"
// import ImageOptimizer from "@/components/admin/image-optimizer"

// interface ProductVariant {
//   id: string
//   size: string
//   color: string
//   price: number
//   stock: number
// }

// interface CustomizationOption {
//   id: string
//   name: string
//   type: "text" | "image" | "color"
//   required: boolean
//   priceModifier: number
// }

// export default function AddProduct() {
//   const searchParams = useSearchParams()
//   const productType = searchParams.get("type") || "direct"
//   const { toast } = useToast()
//   const fileInputRef = useRef<HTMLInputElement>(null)

//   const [isLoading, setIsLoading] = useState(false)
//   const [productData, setProductData] = useState({
//     name: "",
//     description: "",
//     shortDescription: "",
//     category: "",
//     basePrice: 0,
//     comparePrice: 0,
//     sku: "",
//     weight: 0,
//     dimensions: { length: 0, width: 0, height: 0 },
//     tags: [] as string[],
//     seoTitle: "",
//     seoDescription: "",
//     seoKeywords: "",
//     status: "draft",
//     featured: false,
//     trackInventory: true,
//     allowBackorder: false,
//     requiresShipping: true,
//   })

//   const [images, setImages] = useState<string[]>([])
//   const [variants, setVariants] = useState<ProductVariant[]>([])
//   const [customizationOptions, setCustomizationOptions] = useState<CustomizationOption[]>([])
//   const [currentTag, setCurrentTag] = useState("")

//   const categories = [
//     "Apparel",
//     "Drinkware",
//     "Home & Living",
//     "Gifts",
//     "Stationery",
//     "Tech Accessories",
//     "Sports & Fitness",
//     "Bags & Accessories",
//   ]

//   const handleImageUpload = async (files: FileList) => {
//     setIsLoading(true)
//     try {
//       // Simulate image optimization and upload
//       for (let i = 0; i < files.length; i++) {
//         const file = files[i]
//         // In real implementation, this would optimize and upload to your storage
//         const optimizedUrl = URL.createObjectURL(file)
//         setImages((prev) => [...prev, optimizedUrl])
//       }
//       toast({
//         title: "Images uploaded successfully",
//         description: "All images have been optimized and uploaded.",
//       })
//     } catch (error) {
//       toast({
//         title: "Upload failed",
//         description: "Failed to upload images. Please try again.",
//         variant: "destructive",
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const addVariant = () => {
//     const newVariant: ProductVariant = {
//       id: Date.now().toString(),
//       size: "",
//       color: "",
//       price: productData.basePrice,
//       stock: 0,
//     }
//     setVariants([...variants, newVariant])
//   }

//   const removeVariant = (id: string) => {
//     setVariants(variants.filter((v) => v.id !== id))
//   }

//   const addCustomizationOption = () => {
//     const newOption: CustomizationOption = {
//       id: Date.now().toString(),
//       name: "",
//       type: "text",
//       required: false,
//       priceModifier: 0,
//     }
//     setCustomizationOptions([...customizationOptions, newOption])
//   }

//   const removeCustomizationOption = (id: string) => {
//     setCustomizationOptions(customizationOptions.filter((o) => o.id !== id))
//   }

//   const addTag = () => {
//     if (currentTag.trim() && !productData.tags.includes(currentTag.trim())) {
//       setProductData((prev) => ({
//         ...prev,
//         tags: [...prev.tags, currentTag.trim()],
//       }))
//       setCurrentTag("")
//     }
//   }

//   const removeTag = (tag: string) => {
//     setProductData((prev) => ({
//       ...prev,
//       tags: prev.tags.filter((t) => t !== tag),
//     }))
//   }

//   const handleSave = async (status: "draft" | "published") => {
//     setIsLoading(true)
//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 2000))

//       toast({
//         title: `Product ${status === "published" ? "published" : "saved as draft"}`,
//         description: "Product has been saved successfully with SEO optimization.",
//       })
//     } catch (error) {
//       toast({
//         title: "Save failed",
//         description: "Failed to save product. Please try again.",
//         variant: "destructive",
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="max-w-6xl mx-auto space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <Button variant="outline" size="icon" asChild>
//             <Link href="/admin/products">
//               <ArrowLeft className="h-4 w-4" />
//             </Link>
//           </Button>
//           <div>
//             <h1 className="text-3xl font-bold flex items-center gap-2">
//               {productType === "customizable" ? (
//                 <>
//                   <Palette className="h-8 w-8 text-purple-600" />
//                   Add Customizable Product
//                 </>
//               ) : (
//                 <>
//                   <Package className="h-8 w-8 text-blue-600" />
//                   Add Direct Product
//                 </>
//               )}
//             </h1>
//             <p className="text-muted-foreground">
//               {productType === "customizable"
//                 ? "Create a product with live customization options"
//                 : "Add a standard product to your catalog"}
//             </p>
//           </div>
//         </div>

//         <div className="flex gap-2">
//           <Button variant="outline" onClick={() => handleSave("draft")} disabled={isLoading}>
//             {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
//             Save Draft
//           </Button>
//           <Button onClick={() => handleSave("published")} disabled={isLoading}>
//             {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
//             Publish
//           </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Main Content */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* Basic Information */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Basic Information</CardTitle>
//               <CardDescription>Essential product details and description</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="name">Product Name *</Label>
//                   <Input
//                     id="name"
//                     placeholder="Enter product name"
//                     value={productData.name}
//                     onChange={(e) => setProductData((prev) => ({ ...prev, name: e.target.value }))}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="sku">SKU</Label>
//                   <Input
//                     id="sku"
//                     placeholder="Product SKU"
//                     value={productData.sku}
//                     onChange={(e) => setProductData((prev) => ({ ...prev, sku: e.target.value }))}
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="description">Description</Label>
//                 <Textarea
//                   id="description"
//                   placeholder="Detailed product description"
//                   rows={4}
//                   value={productData.description}
//                   onChange={(e) => setProductData((prev) => ({ ...prev, description: e.target.value }))}
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="short-description">Short Description</Label>
//                 <Textarea
//                   id="short-description"
//                   placeholder="Brief product summary"
//                   rows={2}
//                   value={productData.shortDescription}
//                   onChange={(e) => setProductData((prev) => ({ ...prev, shortDescription: e.target.value }))}
//                 />
//               </div>
//             </CardContent>
//           </Card>

//           {/* Images */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <ImageIcon className="h-5 w-5" />
//                 Product Images
//               </CardTitle>
//               <CardDescription>Upload high-quality images (automatically optimized to WebP)</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ImageOptimizer
//                 images={images}
//                 onImagesChange={setImages}
//                 maxImages={10}
//                 acceptedTypes={["image/jpeg", "image/png", "image/webp"]}
//               />
//             </CardContent>
//           </Card>

//           {/* Pricing & Inventory */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Pricing & Inventory</CardTitle>
//               <CardDescription>Set pricing and manage inventory</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="base-price">Base Price (₹) *</Label>
//                   <Input
//                     id="base-price"
//                     type="number"
//                     placeholder="599"
//                     value={productData.basePrice || ""}
//                     onChange={(e) => setProductData((prev) => ({ ...prev, basePrice: Number(e.target.value) }))}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="compare-price">Compare Price (₹)</Label>
//                   <Input
//                     id="compare-price"
//                     type="number"
//                     placeholder="799"
//                     value={productData.comparePrice || ""}
//                     onChange={(e) => setProductData((prev) => ({ ...prev, comparePrice: Number(e.target.value) }))}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="weight">Weight (grams)</Label>
//                   <Input
//                     id="weight"
//                     type="number"
//                     placeholder="250"
//                     value={productData.weight || ""}
//                     onChange={(e) => setProductData((prev) => ({ ...prev, weight: Number(e.target.value) }))}
//                   />
//                 </div>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <Switch
//                   id="track-inventory"
//                   checked={productData.trackInventory}
//                   onCheckedChange={(checked) => setProductData((prev) => ({ ...prev, trackInventory: checked }))}
//                 />
//                 <Label htmlFor="track-inventory">Track inventory</Label>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Product Variants */}
//           <Card>
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <div>
//                   <CardTitle>Product Variants</CardTitle>
//                   <CardDescription>Different sizes, colors, and pricing options</CardDescription>
//                 </div>
//                 <Button onClick={addVariant} size="sm">
//                   <Plus className="h-4 w-4 mr-2" />
//                   Add Variant
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardContent>
//               {variants.length === 0 ? (
//                 <div className="text-center py-8 text-muted-foreground">
//                   <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
//                   <p>No variants added yet. Click "Add Variant" to create size/color options.</p>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {variants.map((variant, index) => (
//                     <div key={variant.id} className="p-4 border rounded-lg space-y-4">
//                       <div className="flex items-center justify-between">
//                         <h4 className="font-medium">Variant {index + 1}</h4>
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           onClick={() => removeVariant(variant.id)}
//                           className="text-red-500 hover:text-red-700"
//                         >
//                           <Trash2 className="h-4 w-4" />
//                         </Button>
//                       </div>
//                       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                         <div className="space-y-2">
//                           <Label>Size</Label>
//                           <Select
//                             value={variant.size}
//                             onValueChange={(value) => {
//                               setVariants(variants.map((v) => (v.id === variant.id ? { ...v, size: value } : v)))
//                             }}
//                           >
//                             <SelectTrigger>
//                               <SelectValue placeholder="Select size" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               <SelectItem value="XS">XS</SelectItem>
//                               <SelectItem value="S">S</SelectItem>
//                               <SelectItem value="M">M</SelectItem>
//                               <SelectItem value="L">L</SelectItem>
//                               <SelectItem value="XL">XL</SelectItem>
//                               <SelectItem value="XXL">XXL</SelectItem>
//                             </SelectContent>
//                           </Select>
//                         </div>
//                         <div className="space-y-2">
//                           <Label>Color</Label>
//                           <Input
//                             placeholder="Color name"
//                             value={variant.color}
//                             onChange={(e) => {
//                               setVariants(
//                                 variants.map((v) => (v.id === variant.id ? { ...v, color: e.target.value } : v)),
//                               )
//                             }}
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label>Price (₹)</Label>
//                           <Input
//                             type="number"
//                             value={variant.price || ""}
//                             onChange={(e) => {
//                               setVariants(
//                                 variants.map((v) =>
//                                   v.id === variant.id ? { ...v, price: Number(e.target.value) } : v,
//                                 ),
//                               )
//                             }}
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label>Stock</Label>
//                           <Input
//                             type="number"
//                             value={variant.stock || ""}
//                             onChange={(e) => {
//                               setVariants(
//                                 variants.map((v) =>
//                                   v.id === variant.id ? { ...v, stock: Number(e.target.value) } : v,
//                                 ),
//                               )
//                             }}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </CardContent>
//           </Card>

//           {/* Customization Options (only for customizable products) */}
//           {productType === "customizable" && (
//             <Card>
//               <CardHeader>
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <CardTitle className="flex items-center gap-2">
//                       <Palette className="h-5 w-5" />
//                       Customization Options
//                     </CardTitle>
//                     <CardDescription>Define what customers can customize</CardDescription>
//                   </div>
//                   <Button onClick={addCustomizationOption} size="sm">
//                     <Plus className="h-4 w-4 mr-2" />
//                     Add Option
//                   </Button>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 {customizationOptions.length === 0 ? (
//                   <div className="text-center py-8 text-muted-foreground">
//                     <Palette className="h-12 w-12 mx-auto mb-4 opacity-50" />
//                     <p>No customization options added yet. Add options like text, images, or colors.</p>
//                   </div>
//                 ) : (
//                   <div className="space-y-4">
//                     {customizationOptions.map((option, index) => (
//                       <div key={option.id} className="p-4 border rounded-lg space-y-4">
//                         <div className="flex items-center justify-between">
//                           <h4 className="font-medium">Option {index + 1}</h4>
//                           <Button
//                             variant="ghost"
//                             size="icon"
//                             onClick={() => removeCustomizationOption(option.id)}
//                             className="text-red-500 hover:text-red-700"
//                           >
//                             <Trash2 className="h-4 w-4" />
//                           </Button>
//                         </div>
//                         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//                           <div className="space-y-2">
//                             <Label>Option Name</Label>
//                             <Input
//                               placeholder="e.g., Custom Text"
//                               value={option.name}
//                               onChange={(e) => {
//                                 setCustomizationOptions(
//                                   customizationOptions.map((o) =>
//                                     o.id === option.id ? { ...o, name: e.target.value } : o,
//                                   ),
//                                 )
//                               }}
//                             />
//                           </div>
//                           <div className="space-y-2">
//                             <Label>Type</Label>
//                             <Select
//                               value={option.type}
//                               onValueChange={(value: "text" | "image" | "color") => {
//                                 setCustomizationOptions(
//                                   customizationOptions.map((o) => (o.id === option.id ? { ...o, type: value } : o)),
//                                 )
//                               }}
//                             >
//                               <SelectTrigger>
//                                 <SelectValue />
//                               </SelectTrigger>
//                               <SelectContent>
//                                 <SelectItem value="text">Text</SelectItem>
//                                 <SelectItem value="image">Image</SelectItem>
//                                 <SelectItem value="color">Color</SelectItem>
//                               </SelectContent>
//                             </Select>
//                           </div>
//                           <div className="space-y-2">
//                             <Label>Price Modifier (₹)</Label>
//                             <Input
//                               type="number"
//                               placeholder="0"
//                               value={option.priceModifier || ""}
//                               onChange={(e) => {
//                                 setCustomizationOptions(
//                                   customizationOptions.map((o) =>
//                                     o.id === option.id ? { ...o, priceModifier: Number(e.target.value) } : o,
//                                   ),
//                                 )
//                               }}
//                             />
//                           </div>
//                           <div className="flex items-center space-x-2 pt-6">
//                             <Switch
//                               id={`required-${option.id}`}
//                               checked={option.required}
//                               onCheckedChange={(checked) => {
//                                 setCustomizationOptions(
//                                   customizationOptions.map((o) =>
//                                     o.id === option.id ? { ...o, required: checked } : o,
//                                   ),
//                                 )
//                               }}
//                             />
//                             <Label htmlFor={`required-${option.id}`}>Required</Label>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           )}
//         </div>

//         {/* Sidebar */}
//         <div className="space-y-6">
//           {/* Product Status */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Product Status</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="space-y-2">
//                 <Label>Status</Label>
//                 <Select
//                   value={productData.status}
//                   onValueChange={(value) => setProductData((prev) => ({ ...prev, status: value }))}
//                 >
//                   <SelectTrigger>
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="draft">Draft</SelectItem>
//                     <SelectItem value="published">Published</SelectItem>
//                     <SelectItem value="archived">Archived</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <Switch
//                   id="featured"
//                   checked={productData.featured}
//                   onCheckedChange={(checked) => setProductData((prev) => ({ ...prev, featured: checked }))}
//                 />
//                 <Label htmlFor="featured">Featured Product</Label>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Category */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Category</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <Select
//                 value={productData.category}
//                 onValueChange={(value) => setProductData((prev) => ({ ...prev, category: value }))}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {categories.map((category) => (
//                     <SelectItem key={category} value={category.toLowerCase()}>
//                       {category}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </CardContent>
//           </Card>

//           {/* Tags */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Tags</CardTitle>
//               <CardDescription>Add tags to help customers find this product</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="flex gap-2">
//                 <Input
//                   placeholder="Add tag"
//                   value={currentTag}
//                   onChange={(e) => setCurrentTag(e.target.value)}
//                   onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
//                 />
//                 <Button onClick={addTag} size="sm">
//                   <Plus className="h-4 w-4" />
//                 </Button>
//               </div>

//               {productData.tags.length > 0 && (
//                 <div className="flex flex-wrap gap-2">
//                   {productData.tags.map((tag) => (
//                     <Badge key={tag} variant="secondary" className="flex items-center gap-1">
//                       {tag}
//                       <button onClick={() => removeTag(tag)} className="ml-1 hover:text-red-500">
//                         <X className="h-3 w-3" />
//                       </button>
//                     </Badge>
//                   ))}
//                 </div>
//               )}
//             </CardContent>
//           </Card>

//           {/* SEO */}
//           <Card>
//             <CardHeader>
//               <CardTitle>SEO Settings</CardTitle>
//               <CardDescription>Optimize for search engines</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="seo-title">SEO Title</Label>
//                 <Input
//                   id="seo-title"
//                   placeholder="SEO optimized title"
//                   value={productData.seoTitle}
//                   onChange={(e) => setProductData((prev) => ({ ...prev, seoTitle: e.target.value }))}
//                 />
//                 <p className="text-xs text-muted-foreground">{productData.seoTitle.length}/60 characters</p>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="seo-description">SEO Description</Label>
//                 <Textarea
//                   id="seo-description"
//                   placeholder="SEO meta description"
//                   rows={3}
//                   value={productData.seoDescription}
//                   onChange={(e) => setProductData((prev) => ({ ...prev, seoDescription: e.target.value }))}
//                 />
//                 <p className="text-xs text-muted-foreground">{productData.seoDescription.length}/160 characters</p>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="seo-keywords">SEO Keywords</Label>
//                 <Input
//                   id="seo-keywords"
//                   placeholder="keyword1, keyword2, keyword3"
//                   value={productData.seoKeywords}
//                   onChange={(e) => setProductData((prev) => ({ ...prev, seoKeywords: e.target.value }))}
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }
