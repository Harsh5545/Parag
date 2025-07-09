import ShopPage from "@/components/shop/shop-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop Interior Design Products | Custom Nameplates, Wall Art & Decor",
  description:
    "Browse our collection of custom interior design products. Premium nameplates, wall art, lamps, and home decor items. Free delivery across Mumbai.",
  keywords:
    "buy interior products online, custom nameplates Mumbai, wall art shop, interior decor store, home design products, office nameplates",
  openGraph: {
    title: "Shop Interior Design Products | Parag Interiors",
    description: "Premium interior design products for homes and offices. Custom solutions available.",
    images: ["/og-shop.jpg"],
  },
  alternates: {
    canonical: "/shop",
  },
}

export default function Shop() {
  return <ShopPage />
}
