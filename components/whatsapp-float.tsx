"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(true)

  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your custom products. Can you help me?"
    const phoneNumber = "919876543210" // Replace with actual WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Close button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute -top-2 -right-2 h-6 w-6 bg-gray-900 hover:bg-gray-800 text-white rounded-full"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-3 w-3" />
        </Button>

        {/* WhatsApp button */}
        <Button
          size="lg"
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-4"
        >
          <MessageCircle className="h-6 w-6 mr-2" />
          Chat with us
        </Button>

        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </div>
    </div>
  )
}
