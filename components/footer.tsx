"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  Heart,
  Shield,
  Award,
  Sparkles,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold font-playfair">CustomCraft</span>
                <div className="text-xs text-gray-400 font-medium tracking-wider">PREMIUM CUSTOMIZATION</div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Create personalized products with our advanced customization technology. Premium quality materials with
              live preview features.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-teal-900/50 text-teal-200 border-teal-700">
                <Award className="w-3 h-3 mr-1" />
                Premium Quality
              </Badge>
              <Badge className="bg-emerald-900/50 text-emerald-200 border-emerald-700">
                <Shield className="w-3 h-3 mr-1" />
                Secure Payments
              </Badge>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:bg-teal-900/50 hover:text-teal-300 rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-teal-900/50 hover:text-teal-300 rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-teal-900/50 hover:text-teal-300 rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-teal-900/50 hover:text-teal-300 rounded-full">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-playfair mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-teal-300 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/customize" className="text-gray-300 hover:text-teal-300 transition-colors">
                  Customize Now
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-teal-300 transition-colors">
                  Design Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-teal-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-300 hover:text-teal-300 transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-300 hover:text-teal-300 transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold font-playfair mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products?category=apparel" className="text-gray-300 hover:text-teal-300 transition-colors">
                  Custom Apparel
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=drinkware"
                  className="text-gray-300 hover:text-teal-300 transition-colors"
                >
                  Custom Drinkware
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=accessories"
                  className="text-gray-300 hover:text-teal-300 transition-colors"
                >
                  Phone Cases
                </Link>
              </li>
              <li>
                <Link href="/products?category=gifts" className="text-gray-300 hover:text-teal-300 transition-colors">
                  Custom Gifts
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=stationery"
                  className="text-gray-300 hover:text-teal-300 transition-colors"
                >
                  Stationery
                </Link>
              </li>
              <li>
                <Link href="/products?category=home" className="text-gray-300 hover:text-teal-300 transition-colors">
                  Home Decor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold font-playfair mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Design Street</p>
                  <p className="text-gray-300">Mumbai, Maharashtra 400001</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <p className="text-gray-300">+91 98765 43210</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <p className="text-gray-300">hello@customcraft.com</p>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon - Sat: 9AM - 8PM</p>
                  <p className="text-gray-300">Sunday: 10AM - 6PM</p>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 rounded-xl">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <p>&copy; 2024 CustomCraft. All rights reserved.</p>
              <span>•</span>
              <Link href="/privacy" className="hover:text-teal-300 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-teal-300 transition-colors">
                Terms of Service
              </Link>
            </div>

            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
