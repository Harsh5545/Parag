"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Menu,
  Search,
  ShoppingCart,
  Heart,
  User,
  Sun,
  Moon,
  Palette,
  Shirt,
  Coffee,
  ChevronDown,
  Sparkles,
} from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import { useWishlist } from "@/components/wishlist/wishlist-context"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { items } = useCart()
  const { items: wishlistItems } = useWishlist()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-xl border-teal-200/20"
          : "bg-background border-border/40"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-playfair bg-gradient-to-r from-teal-700 via-emerald-700 to-cyan-800 bg-clip-text text-transparent">
                CustomCraft
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wider">PREMIUM CUSTOMIZATION</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-teal-600 transition-colors relative group py-2">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium hover:text-teal-600 transition-colors flex items-center gap-1 py-2">
                Products
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 p-4">
                <div className="grid grid-cols-2 gap-2">
                  <DropdownMenuItem asChild className="p-3 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-950/20">
                    <Link href="/products?category=apparel" className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-lg flex items-center justify-center">
                        <Shirt className="h-5 w-5 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">Custom Apparel</div>
                        <div className="text-xs text-muted-foreground">T-shirts, Hoodies, Caps</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="p-3 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/20">
                    <Link href="/products?category=drinkware" className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-lg flex items-center justify-center">
                        <Coffee className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">Custom Drinkware</div>
                        <div className="text-xs text-muted-foreground">Mugs, Bottles, Tumblers</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/customize"
              className="text-sm font-medium hover:text-teal-600 transition-colors relative group py-2 flex items-center gap-1"
            >
              <Palette className="h-4 w-4" />
              Customize
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-medium hover:text-teal-600 transition-colors relative group py-2"
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-teal-600 transition-colors relative group py-2"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products to customize..."
                className="pl-10 bg-muted/30 border-muted-foreground/20 focus:border-teal-500 focus:ring-teal-500/20 transition-all duration-300 rounded-full"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="h-10 w-10 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/20 transition-all duration-300"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="relative h-10 w-10 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/20 transition-all duration-300"
            >
              <Link href="/wishlist">
                <Heart className="h-4 w-4" />
                {wishlistItems.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-teal-500 to-emerald-500 border-0 animate-pulse">
                    {wishlistItems.length}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="relative h-10 w-10 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/20 transition-all duration-300"
            >
              <Link href="/cart">
                <ShoppingCart className="h-4 w-4" />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-teal-500 to-emerald-500 border-0 animate-pulse">
                    {cartItemsCount}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* User Account */}
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/20 transition-all duration-300"
            >
              <User className="h-4 w-4" />
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden h-10 w-10 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/20 transition-all duration-300"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <SheetHeader className="p-6 border-b bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20">
                  <SheetTitle className="text-left font-playfair text-xl">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  {/* Mobile Search */}
                  <div className="p-6 border-b">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input placeholder="Search..." className="pl-10 rounded-full" />
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 p-6 space-y-6">
                    <Link href="/" className="block text-lg font-medium hover:text-teal-600 transition-colors">
                      Home
                    </Link>
                    <Link href="/products" className="block text-lg font-medium hover:text-teal-600 transition-colors">
                      Products
                    </Link>
                    <Link
                      href="/customize"
                      className="block text-lg font-medium hover:text-teal-600 transition-colors flex items-center gap-2"
                    >
                      <Palette className="h-5 w-5" />
                      Customize
                    </Link>
                    <Link href="/gallery" className="block text-lg font-medium hover:text-teal-600 transition-colors">
                      Gallery
                    </Link>
                    <Link href="/about" className="block text-lg font-medium hover:text-teal-600 transition-colors">
                      About
                    </Link>
                  </nav>

                  {/* Mobile Theme Toggle */}
                  <div className="p-6 border-t">
                    {mounted && (
                      <Button
                        variant="outline"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="w-full justify-start gap-2 rounded-full"
                      >
                        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        {theme === "light" ? "Dark Mode" : "Light Mode"}
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
