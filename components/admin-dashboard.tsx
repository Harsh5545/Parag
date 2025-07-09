"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  Download,
  Bell,
  Settings,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Mock data
const stats = [
  { title: "Total Products", value: "156", change: "+12%", icon: Package },
  { title: "Total Orders", value: "1,234", change: "+8%", icon: ShoppingCart },
  { title: "Total Customers", value: "892", change: "+15%", icon: Users },
  { title: "Revenue", value: "₹2,45,678", change: "+23%", icon: TrendingUp },
]

const recentOrders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    product: "Custom T-Shirt",
    customization: 'Text: "Best Dad Ever"',
    amount: "₹649",
    status: "Processing",
    date: "2024-01-15",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    product: "Custom Mug",
    customization: 'Text: "Coffee Lover"',
    amount: "₹399",
    status: "Shipped",
    date: "2024-01-14",
  },
  {
    id: "ORD-003",
    customer: "Mike Johnson",
    product: "Custom Hoodie",
    customization: 'Text: "Team Player"',
    amount: "₹1,299",
    status: "Delivered",
    date: "2024-01-13",
  },
]

const products = [
  {
    id: "PRD-001",
    name: "Custom T-Shirt",
    category: "Apparel",
    price: "₹599",
    stock: 45,
    status: "Active",
  },
  {
    id: "PRD-002",
    name: "Custom Mug",
    category: "Accessories",
    price: "₹349",
    stock: 23,
    status: "Active",
  },
  {
    id: "PRD-003",
    name: "Custom Hoodie",
    category: "Apparel",
    price: "₹1,199",
    stock: 12,
    status: "Low Stock",
  },
]

export default function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState("overview")

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      case "active":
        return "bg-green-100 text-green-800"
      case "low stock":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage your eCommerce store</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-green-600">{stat.change}</span> from last month
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest orders with customization details</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Customization</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.product}</TableCell>
                        <TableCell className="max-w-xs truncate">{order.customization}</TableCell>
                        <TableCell>{order.amount}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            {/* Products Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Products</h2>
                <p className="text-muted-foreground">Manage your product catalog</p>
              </div>
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Search products..." className="pl-10 w-64" />
                </div>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Product
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Add New Product</DialogTitle>
                      <DialogDescription>Create a new product with customization options</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Product Name</Label>
                          <Input id="name" placeholder="Enter product name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category">Category</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="apparel">Apparel</SelectItem>
                              <SelectItem value="accessories">Accessories</SelectItem>
                              <SelectItem value="home">Home & Living</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="Enter product description" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="price">Base Price (₹)</Label>
                          <Input id="price" type="number" placeholder="599" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="stock">Stock Quantity</Label>
                          <Input id="stock" type="number" placeholder="50" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-4">
                      <Button variant="outline">Cancel</Button>
                      <Button>Create Product</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Products Table */}
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.id}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(product.status)}>{product.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600 bg-transparent">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Orders</h2>
                <p className="text-muted-foreground">Manage customer orders and customizations</p>
              </div>
              <div className="flex gap-4">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Customization</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.product}</TableCell>
                        <TableCell className="max-w-xs truncate">{order.customization}</TableCell>
                        <TableCell>{order.amount}</TableCell>
                        <TableCell>
                          <Select defaultValue={order.status.toLowerCase()}>
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="processing">Processing</SelectItem>
                              <SelectItem value="shipped">Shipped</SelectItem>
                              <SelectItem value="delivered">Delivered</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Customers</h2>
              <p className="text-muted-foreground">Manage customer accounts and data</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Customer Management</h3>
                  <p className="text-muted-foreground">Customer management features will be implemented here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
