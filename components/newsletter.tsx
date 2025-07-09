"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Gift, Sparkles } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Successfully Subscribed!",
      description: "Welcome to CustomCraft! Check your email for a special discount code.",
    })

    setEmail("")
    setIsLoading(false)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-0 bg-white/10 backdrop-blur-lg text-white">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2">
                <div className="p-3 bg-white/20 rounded-full">
                  <Mail className="h-8 w-8" />
                </div>
                <Sparkles className="h-6 w-6 text-yellow-300" />
              </div>
            </div>

            <h2 className="text-4xl font-bold mb-4">Stay Updated with CustomCraft</h2>

            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Subscribe to our newsletter and get exclusive discounts, new product updates, and design inspiration
              delivered to your inbox.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-white/90">
                <Gift className="h-5 w-5" />
                <span>10% off your first order</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Sparkles className="h-5 w-5" />
                <span>Exclusive design tips</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-white text-purple-600 hover:bg-white/90 font-semibold px-8"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>

            <p className="text-sm text-white/70 mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
