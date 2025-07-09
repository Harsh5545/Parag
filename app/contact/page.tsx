import ContactPage from "@/components/contact/contact-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Parag Interior Design Studio | Get Free Consultation",
  description:
    "Contact expert interior designer Parag for custom nameplates, wall art, and interior design consultation. Located in Mumbai. Free quotes available.",
  keywords:
    "contact interior designer Mumbai, interior design consultation, custom nameplate quote, wall art designer contact, Parag interior designer",
  openGraph: {
    title: "Contact Parag Interior Design Studio",
    description: "Get in touch for custom interior design solutions and free consultation.",
    images: ["/og-contact.jpg"],
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function Contact() {
  return <ContactPage />
}
