import ProductCustomizer from "@/components/product-customizer"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import PageWrapper from "@/components/page-wrapper"

// Mock product data - in real app, fetch from database
const getProduct = async (id: string) => {
  return {
    id,
    name: "Custom T-Shirt",
    description: "Premium quality cotton t-shirt perfect for custom designs",
    basePrice: 599,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy", "Red", "Gray"],
    customizationOptions: {
      allowText: true,
      allowImages: true,
      maxTextLength: 50,
      fonts: ["Arial", "Helvetica", "Times New Roman", "Georgia", "Verdana", "Comic Sans MS", "Impact", "Trebuchet MS"],
      textColors: ["#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"],
      positions: ["Center", "Top", "Bottom", "Left", "Right"],
    },
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getProduct(params.id)

  return {
    title: `${product.name} - Custom Design | CustomCraft`,
    description: `Customize your ${product.name} with live preview. ${product.description}`,
    keywords: `custom ${product.name.toLowerCase()}, personalized, live preview, custom text`,
    openGraph: {
      title: `${product.name} - Custom Design`,
      description: product.description,
      images: [product.images[0]],
    },
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  return (
    <PageWrapper>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <ProductCustomizer product={product} />
        </main>
        <Footer />
      </div>
    </PageWrapper>
  )
}
