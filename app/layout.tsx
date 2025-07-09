import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/components/cart/cart-context"
import { WishlistProvider } from "@/components/wishlist/wishlist-context"
import { AuthProvider } from "@/components/auth/auth-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import WhatsAppFloat from "@/components/whatsapp-float"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "CustomCraft - Premium Customizable Products Store",
  description:
    "Create personalized products with live preview. Custom t-shirts, mugs, phone cases, and more. Premium quality with instant customization.",
  keywords: "custom products, personalized gifts, custom t-shirts, custom mugs, live preview, premium customization",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <AuthProvider>
            <CartProvider>
              <WishlistProvider>
                <div className="relative flex min-h-screen flex-col">
                  <Header />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </div>
                <WhatsAppFloat />
                <Toaster />
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
