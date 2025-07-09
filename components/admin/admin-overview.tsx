"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Users, Package, DollarSign } from "lucide-react"

const stats = [
  {
    title: "Total Revenue",
    value: "₹2,45,000",
    change: "+12.5%",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Total Orders",
    value: "156",
    change: "+8.2%",
    icon: ShoppingCart,
    color: "text-blue-600",
  },
  {
    title: "Total Products",
    value: "89",
    change: "+3.1%",
    icon: Package,
    color: "text-purple-600",
  },
  {
    title: "Total Customers",
    value: "234",
    change: "+15.3%",
    icon: Users,
    color: "text-orange-600",
  },
]

const recentOrders = [
  {
    id: "ORD-001",
    customer: "Priya Sharma",
    product: "Elegant Wooden Nameplate",
    amount: "₹2,999",
    status: "Processing",
  },
  {
    id: "ORD-002",
    customer: "Rajesh Kumar",
    product: "Modern Abstract Wall Art",
    amount: "₹4,999",
    status: "Shipped",
  },
  {
    id: "ORD-003",
    customer: "Anita Patel",
    product: "Designer Table Lamp",
    amount: "₹3,499",
    status: "Delivered",
  },
]

export default function AdminOverview() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className={`text-xs ${stat.color}`}>{stat.change} from last month</p>
                </div>
                <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">{order.id}</p>
                  <p className="text-sm text-muted-foreground">{order.customer}</p>
                  <p className="text-sm">{order.product}</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="font-medium">{order.amount}</p>
                  <Badge
                    variant={
                      order.status === "Delivered" ? "default" : order.status === "Shipped" ? "secondary" : "outline"
                    }
                  >
                    {order.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
