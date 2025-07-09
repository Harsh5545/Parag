"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail, Gift, Sparkles, ArrowRight } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Successfully subscribed!",
      description: "Welcome to CustomCraft! Check your email for a special discount code.",
    })

    setEmail("")
    setIsLoading(false)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            <Gift className="h-3 w-3 mr-1" />
            Exclusive Offers
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold font-playfair mb-6">
            Get <span className="text-yellow-300">20% Off</span> Your First Order
          </h2>

          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new products, exclusive discounts, and design
            inspiration
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-white/90 border-white/30 text-gray-900 placeholder:text-gray-500 rounded-xl h-12"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-white text-teal-600 hover:bg-white/90 px-6 rounded-xl font-semibold h-12 transition-all duration-300 hover:scale-105"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-teal-600 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Gift className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Exclusive Discounts</div>
                <div className="text-sm text-white/80">Up to 30% off</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold">New Products</div>
                <div className="text-sm text-white/80">First access</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Design Tips</div>
                <div className="text-sm text-white/80">Weekly inspiration</div>
              </div>
            </div>
          </div>

          <p className="text-sm text-white/70 mt-6">No spam, unsubscribe at any time. We respect your privacy.</p>
        </div>
      </div>
    </section>
  )
}
