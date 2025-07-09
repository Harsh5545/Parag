import type React from "react"
import AdminSidebar from "@/components/admin/admin-sidebar"
import AdminHeader from "@/components/admin/admin-header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Dashboard | CustomCraft",
  description: "Manage your eCommerce store",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
