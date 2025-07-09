"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Upload, X, Loader2, CheckCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

interface ImageOptimizerProps {
  images: string[]
  onImagesChange: (images: string[]) => void
  maxImages?: number
  maxSizePerImage?: number // in MB
  acceptedTypes?: string[]
}

interface OptimizationResult {
  originalSize: number
  optimizedSize: number
  compressionRatio: number
  format: string
}

export default function ImageOptimizer({
  images,
  onImagesChange,
  maxImages = 10,
  maxSizePerImage = 5,
  acceptedTypes = ["image/jpeg", "image/png", "image/webp"],
}: ImageOptimizerProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [optimizationResults, setOptimizationResults] = useState<Record<string, OptimizationResult>>({})
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  // Simulate image optimization (in real app, this would call your optimization service)
  const optimizeImage = useCallback(async (file: File): Promise<{ url: string; result: OptimizationResult }> => {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      const img = new Image()

      img.onload = () => {
        // Calculate new dimensions (max 1200px width/height while maintaining aspect ratio)
        const maxDimension = 1200
        let { width, height } = img

        if (width > height && width > maxDimension) {
          height = (height * maxDimension) / width
          width = maxDimension
        } else if (height > maxDimension) {
          width = (width * maxDimension) / height
          height = maxDimension
        }

        canvas.width = width
        canvas.height = height

        // Draw and compress
        ctx?.drawImage(img, 0, 0, width, height)

        canvas.toBlob(
          (blob) => {
            if (blob) {
              const optimizedUrl = URL.createObjectURL(blob)
              const result: OptimizationResult = {
                originalSize: file.size,
                optimizedSize: blob.size,
                compressionRatio: Math.round(((file.size - blob.size) / file.size) * 100),
                format: "webp",
              }
              resolve({ url: optimizedUrl, result })
            }
          },
          "image/webp",
          0.85,
        ) // Convert to WebP with 85% quality
      }

      img.src = URL.createObjectURL(file)
    })
  }, [])

  const handleFileUpload = async (files: FileList) => {
    if (images.length + files.length > maxImages) {
      toast({
        title: "Too many images",
        description: `Maximum ${maxImages} images allowed`,
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)
    setUploadProgress(0)

    const newImages: string[] = []
    const newResults: Record<string, OptimizationResult> = {}

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i]

        // Validate file type
        if (!acceptedTypes.includes(file.type)) {
          toast({
            title: "Invalid file type",
            description: `${file.name} is not a supported image format`,
            variant: "destructive",
          })
          continue
        }

        // Validate file size
        if (file.size > maxSizePerImage * 1024 * 1024) {
          toast({
            title: "File too large",
            description: `${file.name} exceeds ${maxSizePerImage}MB limit`,
            variant: "destructive",
          })
          continue
        }

        // Optimize image
        const { url, result } = await optimizeImage(file)
        newImages.push(url)
        newResults[url] = result

        // Update progress
        setUploadProgress(((i + 1) / files.length) * 100)
      }

      onImagesChange([...images, ...newImages])
      setOptimizationResults((prev) => ({ ...prev, ...newResults }))

      toast({
        title: "Images optimized successfully",
        description: `${newImages.length} images uploaded and optimized to WebP format`,
      })
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "Failed to optimize images. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
      setUploadProgress(0)
    }
  }

  const removeImage = (index: number) => {
    const imageUrl = images[index]
    const newImages = images.filter((_, i) => i !== index)
    onImagesChange(newImages)

    // Clean up optimization results
    const newResults = { ...optimizationResults }
    delete newResults[imageUrl]
    setOptimizationResults(newResults)

    // Revoke object URL to free memory
    URL.revokeObjectURL(imageUrl)
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileUpload(files)
    }
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
  }, [])

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <Card
        className={cn(
          "border-2 border-dashed transition-colors cursor-pointer",
          isUploading ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50",
        )}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()}
      >
        <CardContent className="p-8 text-center">
          {isUploading ? (
            <div className="space-y-4">
              <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
              <div>
                <p className="text-lg font-medium">Optimizing images...</p>
                <p className="text-sm text-muted-foreground">Converting to WebP and compressing</p>
              </div>
              <Progress value={uploadProgress} className="w-full max-w-xs mx-auto" />
            </div>
          ) : (
            <div className="space-y-4">
              <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
              <div>
                <p className="text-lg font-medium">Upload Product Images</p>
                <p className="text-sm text-muted-foreground">Drag & drop images here, or click to browse</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Supports JPEG, PNG, WebP • Max {maxSizePerImage}MB per image • Up to {maxImages} images
                </p>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <CheckCircle className="h-3 w-3 mr-1" />
                Auto-optimized to WebP
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept={acceptedTypes.join(",")}
        onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
        className="hidden"
      />

      {/* Image Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => {
            const result = optimizationResults[image]
            return (
              <Card key={index} className="relative group">
                <CardContent className="p-2">
                  <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Product image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />

                    {/* Remove button */}
                    <Button
                      size="icon"
                      variant="destructive"
                      className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation()
                        removeImage(index)
                      }}
                    >
                      <X className="h-3 w-3" />
                    </Button>

                    {/* Primary image badge */}
                    {index === 0 && <Badge className="absolute bottom-2 left-2 text-xs">Primary</Badge>}
                  </div>

                  {/* Optimization info */}
                  {result && (
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Optimized</span>
                        <Badge variant="outline" className="text-xs">
                          {result.format.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">
                          {(result.originalSize / 1024 / 1024).toFixed(1)}MB →{" "}
                          {(result.optimizedSize / 1024 / 1024).toFixed(1)}MB
                        </span>
                        <span className="text-green-600 font-medium">-{result.compressionRatio}%</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}

      {/* Upload Summary */}
      {images.length > 0 && (
        <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium">
                {images.length} image{images.length !== 1 ? "s" : ""} uploaded and optimized
              </span>
            </div>
            <p className="text-xs text-green-600 dark:text-green-300 mt-1">
              All images have been automatically converted to WebP format for optimal performance
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
