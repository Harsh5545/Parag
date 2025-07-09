import ProfilePage from "@/components/profile/profile-page"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import PageWrapper from "@/components/page-wrapper"

export const metadata: Metadata = {
  title: "My Profile | CustomCraft",
  description: "Manage your account settings and preferences",
  keywords: "profile, account, settings, preferences, custom products",
}

export default function Profile() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <ProfilePage />
        </main>
        <Footer />
      </div>
    </PageWrapper>
  )
}
