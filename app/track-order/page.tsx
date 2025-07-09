import TrackOrder from "@/components/track-order"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import PageWrapper from "@/components/page-wrapper"

export const metadata: Metadata = {
  title: "Track Your Order | CustomCraft",
  description: "Track your custom product order status and get real-time updates",
  keywords: "track order, order status, delivery tracking, custom products",
}

export default function TrackOrderPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <TrackOrder />
        </main>
        <Footer />
      </div>
    </PageWrapper>
  )
}
