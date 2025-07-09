"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  FolderTree,
  Settings,
  BarChart3,
  Palette,
  ImageIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  {
    name: "Overview",
    href: "/admin",
    icon: LayoutDashboard,
    current: false,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: Package,
    current: false,
    badge: "156",
    children: [
      { name: "All Products", href: "/admin/products" },
      { name: "Add Product", href: "/admin/products/add" },
      { name: "Customizable", href: "/admin/products/customizable" },
      { name: "Direct Products", href: "/admin/products/direct" },
    ],
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
    current: false,
    badge: "23",
  },
  {
    name: "Categories",
    href: "/admin/categories",
    icon: FolderTree,
    current: false,
  },
  {
    name: "Customers",
    href: "/admin/customers",
    icon: Users,
    current: false,
    badge: "892",
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
    current: false,
  },
  {
    name: "Media Library",
    href: "/admin/media",
    icon: ImageIcon,
    current: false,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
    current: false,
  },
]

const quickActions = [
  {
    name: "Add Customizable Product",
    href: "/admin/products/add?type=customizable",
    icon: Palette,
    color: "bg-purple-500",
  },
  {
    name: "Add Direct Product",
    href: "/admin/products/add?type=direct",
    icon: Package,
    color: "bg-blue-500",
  },
]

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      {/* Collapse Toggle */}
      <div className="flex justify-end p-4">
        <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)} className="h-8 w-8">
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <div className="px-4 pb-4">
        {/* Quick Actions */}
        {!collapsed && (
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Actions</h3>
            <div className="space-y-2">
              {quickActions.map((action) => (
                <Link key={action.name} href={action.href}>
                  <Button variant="outline" className="w-full justify-start text-left h-auto p-3 bg-transparent">
                    <div className={`p-1 rounded ${action.color} mr-3`}>
                      <action.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm">{action.name}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}

        <Separator className="mb-6" />

        {/* Navigation */}
        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

            return (
              <div key={item.name}>
                <Link href={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start",
                      collapsed ? "px-2" : "px-3",
                      isActive && "bg-primary/10 text-primary",
                    )}
                  >
                    <item.icon className={cn("h-5 w-5", collapsed ? "" : "mr-3")} />
                    {!collapsed && (
                      <>
                        <span>{item.name}</span>
                        {item.badge && (
                          <Badge variant="secondary" className="ml-auto">
                            {item.badge}
                          </Badge>
                        )}
                      </>
                    )}
                  </Button>
                </Link>

                {/* Sub-navigation for Products */}
                {!collapsed && item.children && isActive && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <Link key={child.name} href={child.href}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={cn(
                            "w-full justify-start text-sm",
                            pathname === child.href && "bg-primary/5 text-primary",
                          )}
                        >
                          {child.name}
                        </Button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
