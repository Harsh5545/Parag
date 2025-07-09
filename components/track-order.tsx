"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Package, Truck, CheckCircle, Clock, MapPin, Phone, Mail } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

// Mock order data
const mockOrder = {
  id: "ORD-2024-001",
  status: "shipped",
  product: "Custom T-Shirt",
  customization: 'Text: "Best Dad Ever", Font: Arial, Color: Black',
  amount: "₹649",
  orderDate: "2024-01-15",
  estimatedDelivery: "2024-01-20",
  trackingNumber: "TRK123456789",
  timeline: [
    {
      status: "Order Placed",
      date: "2024-01-15 10:30 AM",
      description: "Your order has been placed successfully",
      completed: true,
    },
    {
      status: "Order Confirmed",
      date: "2024-01-15 11:00 AM",
      description: "Payment confirmed and order processing started",
      completed: true,
    },
    {
      status: "Customizing",
      date: "2024-01-16 02:00 PM",
      description: "Your custom design is being printed",
      completed: true,
    },
    {
      status: "Quality Check",
      date: "2024-01-17 10:00 AM",
      description: "Product quality verification completed",
      completed: true,
    },
    {
      status: "Shipped",
      date: "2024-01-17 04:00 PM",
      description: "Package shipped and on the way to you",
      completed: true,
      current: true,
    },
    {
      status: "Out for Delivery",
      date: "Expected: 2024-01-20 09:00 AM",
      description: "Package will be delivered today",
      completed: false,
    },
    {
      status: "Delivered",
      date: "Expected: 2024-01-20 06:00 PM",
      description: "Package delivered successfully",
      completed: false,
    },
  ],
}

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("")
  const [orderData, setOrderData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!orderId.trim()) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (orderId.toUpperCase() === "ORD-2024-001") {
      setOrderData(mockOrder)
    } else {
      toast({
        title: "Order Not Found",
        description: "Please check your order ID and try again.",
        variant: "destructive",
      })
    }

    setIsLoading(false)
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Track Your{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Order</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Enter your order ID to get real-time updates on your custom product
        </p>
      </div>

      {/* Search Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Order Lookup
          </CardTitle>
          <CardDescription>
            Enter your order ID to track your custom product. You can find this in your confirmation email.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTrackOrder} className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="order-id" className="sr-only">
                Order ID
              </Label>
              <Input
                id="order-id"
                placeholder="Enter Order ID (e.g., ORD-2024-001)"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="text-lg"
              />
            </div>
            <Button type="submit" disabled={isLoading} size="lg">
              {isLoading ? "Searching..." : "Track Order"}
            </Button>
          </form>

          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              💡 <strong>Demo:</strong> Try order ID "ORD-2024-001" to see the tracking interface
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Order Details */}
      {orderData && (
        <div className="space-y-6">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Order Details
                </CardTitle>
                <Badge className={getStatusColor(orderData.status)}>
                  {orderData.status.charAt(0).toUpperCase() + orderData.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Order ID</Label>
                    <p className="font-mono text-lg">{orderData.id}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Product</Label>
                    <p className="font-semibold">{orderData.product}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Customization</Label>
                    <p className="text-sm">{orderData.customization}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Order Date</Label>
                    <p>{orderData.orderDate}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Amount</Label>
                    <p className="text-2xl font-bold text-primary">{orderData.amount}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Tracking Number</Label>
                    <p className="font-mono">{orderData.trackingNumber}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Order Timeline
              </CardTitle>
              <CardDescription>Track your order progress from creation to delivery</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {orderData.timeline.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.completed ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"
                        } ${step.current ? "ring-4 ring-blue-200" : ""}`}
                      >
                        {step.completed ? <CheckCircle className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                      </div>
                      {index < orderData.timeline.length - 1 && (
                        <div className={`w-0.5 h-12 mt-2 ${step.completed ? "bg-green-500" : "bg-gray-200"}`} />
                      )}
                    </div>

                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className={`font-semibold ${
                            step.current ? "text-blue-600" : step.completed ? "text-green-600" : "text-gray-500"
                          }`}
                        >
                          {step.status}
                        </h3>
                        {step.current && (
                          <Badge variant="outline" className="text-blue-600 border-blue-600">
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{step.description}</p>
                      <p className="text-xs text-muted-foreground">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>Contact our support team for any questions about your order</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <Phone className="h-4 w-4" />
                  Call Support
                </Button>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <Mail className="h-4 w-4" />
                  Email Us
                </Button>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <MapPin className="h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
