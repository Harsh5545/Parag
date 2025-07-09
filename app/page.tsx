import Hero from "@/components/home/hero"
import Categories from "@/components/home/categories"
import FeaturedProducts from "@/components/home/featured-products"
import Features from "@/components/home/features"
import Testimonials from "@/components/home/testimonials"
import Newsletter from "@/components/home/newsletter"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Features />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
