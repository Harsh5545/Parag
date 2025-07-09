"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Small Business Owner",
    location: "Mumbai",
    rating: 5,
    comment:
      "The quality of custom t-shirts is exceptional! The live preview feature helped me create exactly what I wanted. My customers love them!",
    image: "/placeholder.svg?height=80&width=80",
    product: "Custom T-Shirts",
    orderValue: "₹15,000",
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "Event Organizer",
    location: "Delhi",
    rating: 5,
    comment:
      "Ordered 200 custom mugs for our corporate event. The delivery was on time and the print quality was outstanding. Highly recommended!",
    image: "/placeholder.svg?height=80&width=80",
    product: "Custom Mugs",
    orderValue: "₹25,000",
  },
  {
    id: 3,
    name: "Sneha Reddy",
    role: "Graphic Designer",
    location: "Bangalore",
    rating: 5,
    comment:
      "As a designer, I'm very particular about print quality. CustomCraft exceeded my expectations with their premium materials and vibrant colors.",
    image: "/placeholder.svg?height=80&width=80",
    product: "Phone Cases",
    orderValue: "₹8,500",
  },
  {
    id: 4,
    name: "Amit Kumar",
    role: "Startup Founder",
    location: "Pune",
    rating: 5,
    comment:
      "The customization process is so smooth and intuitive. We've been ordering branded merchandise for our team regularly. Great service!",
    image: "/placeholder.svg?height=80&width=80",
    product: "Custom Hoodies",
    orderValue: "₹35,000",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white border-0 mb-4">
            <Star className="h-3 w-3 mr-1" />
            Customer Reviews
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-700 bg-clip-text text-transparent">
              Customers
            </span>{" "}
            Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust us for their custom product needs
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <Card className="bg-gradient-to-br from-white via-teal-50/30 to-emerald-50/30 dark:from-gray-900 dark:via-teal-950/10 dark:to-emerald-950/10 border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Customer Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      width={120}
                      height={120}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <Quote className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonials[currentIndex].comment}"
                  </blockquote>

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold font-playfair">{testimonials[currentIndex].name}</h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                      <Badge variant="outline" className="text-teal-600 border-teal-600">
                        {testimonials[currentIndex].product}
                      </Badge>
                      <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                        {testimonials[currentIndex].orderValue}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-teal-500 to-emerald-500 w-8"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold font-playfair bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <div className="text-muted-foreground font-medium">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-playfair bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-muted-foreground font-medium">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-playfair bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">
              1M+
            </div>
            <div className="text-muted-foreground font-medium">Products Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-playfair bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              99%
            </div>
            <div className="text-muted-foreground font-medium">Repeat Customers</div>
          </div>
        </div>
      </div>
    </section>
  )
}
