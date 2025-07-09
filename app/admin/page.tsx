import AdminOverview from "@/components/admin/admin-overview"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Dashboard | CustomCraft",
  description: "Manage products, orders, and customers",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminPage() {
  return <AdminOverview />
}
