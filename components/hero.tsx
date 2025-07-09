"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Palette, Eye } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-orange-950/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                <Sparkles className="h-3 w-3 mr-1" />
                New: Live Preview Feature
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Create{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Custom Products
                </span>{" "}
                with Live Preview
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Design personalized products with real-time preview. Add custom text, choose fonts, and see exactly how
                your product will look before you buy.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 p-3 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur">
                <Palette className="h-5 w-5 text-purple-600" />
                <span className="font-medium">Custom Design</span>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur">
                <Eye className="h-5 w-5 text-pink-600" />
                <span className="font-medium">Live Preview</span>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur">
                <Sparkles className="h-5 w-5 text-orange-600" />
                <span className="font-medium">Premium Quality</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Link href="/products">
                  Start Customizing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/customize">Try Live Preview</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">50+</div>
                <div className="text-sm text-muted-foreground">Product Types</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 shadow-2xl">
              {/* Mock Product Preview */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
                <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 to-pink-800 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-2">Your Text Here</div>
                    <div className="text-sm text-purple-600 dark:text-purple-300">Live Preview</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-pink-400 text-white p-3 rounded-full shadow-lg">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-400 to-blue-400 text-white p-3 rounded-full shadow-lg">
                <Palette className="h-6 w-6" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
