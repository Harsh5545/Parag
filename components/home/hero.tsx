"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Palette, Eye, Play, Star, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Create Your Perfect",
      highlight: "Custom Product",
      subtitle: "Design personalized products with live preview technology",
      image: "/placeholder.svg?height=600&width=600",
      badge: "Live Preview",
    },
    {
      title: "Premium Quality",
      highlight: "Fast Delivery",
      subtitle: "High-quality materials with express shipping worldwide",
      image: "/placeholder.svg?height=600&width=600",
      badge: "Premium",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/50 dark:from-slate-950 dark:via-teal-950/20 dark:to-emerald-950/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full blur-xl animate-float"></div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white border-0 px-4 py-2 text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                {slides[currentSlide].badge}
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold font-playfair leading-tight">
                {slides[currentSlide].title}{" "}
                <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-700 bg-clip-text text-transparent block lg:inline">
                  {slides[currentSlide].highlight}
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3 p-4 rounded-2xl bg-white/60 dark:bg-black/20 backdrop-blur-sm border border-teal-200/20">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Palette className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">Live Design</div>
                  <div className="text-xs text-muted-foreground">Real-time Preview</div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 p-4 rounded-2xl bg-white/60 dark:bg-black/20 backdrop-blur-sm border border-emerald-200/20">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">Fast Delivery</div>
                  <div className="text-xs text-muted-foreground">2-3 Days</div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 p-4 rounded-2xl bg-white/60 dark:bg-black/20 backdrop-blur-sm border border-cyan-200/20">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">Premium Quality</div>
                  <div className="text-xs text-muted-foreground">Guaranteed</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/customize">
                  Start Customizing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Link href="/gallery" className="flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  View Gallery
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold font-playfair bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold font-playfair bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  100+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Product Types</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold font-playfair bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground font-medium">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-teal-100 via-emerald-100 to-cyan-100 dark:from-teal-900/20 dark:via-emerald-900/20 dark:to-cyan-900/20 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-white/20">
              {/* Mock Product Preview */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-teal-200 via-emerald-200 to-cyan-200 dark:from-teal-800 dark:via-emerald-800 dark:to-cyan-800 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Custom Product Preview"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <div className="text-2xl font-bold font-playfair text-white mb-2">Your Design Here</div>
                    <Badge className="bg-white/90 text-gray-900">
                      <Eye className="h-3 w-3 mr-1" />
                      Live Preview
                    </Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-gradient-to-r from-teal-200 to-emerald-200 dark:from-teal-700 dark:to-emerald-700 rounded-full"></div>
                  <div className="h-3 bg-gradient-to-r from-emerald-200 to-cyan-200 dark:from-emerald-700 dark:to-cyan-700 rounded-full w-3/4"></div>
                  <div className="h-3 bg-gradient-to-r from-cyan-200 to-teal-200 dark:from-cyan-700 dark:to-teal-700 rounded-full w-1/2"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white p-4 rounded-2xl shadow-lg animate-bounce">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white p-4 rounded-2xl shadow-lg animate-pulse">
                <Palette className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gradient-to-r from-teal-500 to-emerald-500 w-8"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
