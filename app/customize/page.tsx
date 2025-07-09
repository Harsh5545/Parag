import CustomizePage from "@/components/customize/customize-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Customize Your Interior Design | Custom Nameplates & Wall Art",
  description:
    "Create personalized interior design products with our customization tool. Design custom nameplates, wall art, and decor items tailored to your space.",
  keywords:
    "customize nameplate online, custom wall art design, personalized interior decor, design your own nameplate, custom interior products",
  openGraph: {
    title: "Customize Your Interior Design | Parag Interiors",
    description: "Design personalized interior products with our easy customization tool.",
    images: ["/og-customize.jpg"],
  },
  alternates: {
    canonical: "/customize",
  },
}

export default function Customize() {
  return <CustomizePage />
}
