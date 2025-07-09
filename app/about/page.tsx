import AboutPage from "@/components/about/about-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Parag | Expert Interior Designer & Custom Design Specialist",
  description:
    "Meet Parag, an award-winning interior designer with 5+ years of experience. Specializing in custom nameplates, wall art, and premium interior decor solutions.",
  keywords:
    "Parag interior designer, Mumbai interior designer, custom design specialist, interior design expert, nameplate designer, wall art specialist",
  openGraph: {
    title: "About Parag | Expert Interior Designer",
    description: "Award-winning interior designer creating custom solutions for homes and offices.",
    images: ["/og-about.jpg"],
  },
  alternates: {
    canonical: "/about",
  },
}

export default function About() {
  return <AboutPage />
}
