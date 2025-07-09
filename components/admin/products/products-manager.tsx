"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Package, Plus, Search, MoreHorizontal, Edit, Eye, Trash2, Palette, Download, Upload } from "lucide-react"
import Link from "next/link"

// Mock products data
const products = [
  {
    id: "PRD-001",
    name: "Custom Premium T-Shirt",
    type: "customizable",
    category: "Apparel",
    price: 599,
    stock: 45,
    status: "published",
    orders: 124,
    image: "/placeholder.svg?height=60&width=60",
    createdAt: "2024-01-15",
  },
  {
    id: "PRD-002",
    name: "Personalized Coffee Mug",
    type: "customizable",
    category: "Drinkware",
    price: 349,
    stock: 23,
    status: "published",
    orders: 89,
    image: "/placeholder.svg?height=60&width=60",
    createdAt: "2024-01-14",
  },
  {
    id: "PRD-003",
    name: "Standard Notebook",
    type: "direct",
    category: "Stationery",
    price: 199,
    stock: 67,
    status: "published",
    orders: 45,
    image: "/placeholder.svg?height=60&width=60",
    createdAt: "2024-01-13",
  },
  {
    id: "PRD-004",
    name: "Custom Hoodie",
    type: "customizable",
    category: "Apparel",
    price: 1199,
    stock: 12,
    status: "draft",
    orders: 0,
    image: "/placeholder.svg?height=60&width=60",
    createdAt: "2024-01-12",
  },
]

export default function ProductsManager() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "all" || product.type === filterType
    const matchesStatus = filterStatus === "all" || product.status === filterStatus
    return matchesSearch && matchesType && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "published":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      case "archived":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeColor = (type: string) => {
    return type === "customizable" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
  }

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { label: "Out of Stock", color: "bg-red-100 text-red-800" }
    if (stock < 20) return { label: "Low Stock", color: "bg-yellow-100 text-yellow-800" }
    return { label: "In Stock", color: "bg-green-100 text-green-800" }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-muted-foreground">Manage your product catalog</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/admin/products/add?type=customizable">
                  <Palette className="h-4 w-4 mr-2" />
                  Customizable Product
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admin/products/add?type=direct">
                  <Package className="h-4 w-4 mr-2" />
                  Direct Product
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Products</p>
                <p className="text-2xl font-bold">{products.length}</p>
              </div>
              <Package className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Customizable</p>
                <p className="text-2xl font-bold">{products.filter((p) => p.type === "customizable").length}</p>
              </div>
              <Palette className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Published</p>
                <p className="text-2xl font-bold">{products.filter((p) => p.status === "published").length}</p>
              </div>
              <Eye className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Low Stock</p>
                <p className="text-2xl font-bold">{products.filter((p) => p.stock < 20).length}</p>
              </div>
              <Package className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Product Catalog</CardTitle>
          <CardDescription>View and manage all your products</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Product Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="customizable">Customizable</SelectItem>
                <SelectItem value="direct">Direct</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => {
                  const stockStatus = getStockStatus(product.stock)
                  return (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-muted-foreground">{product.id}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getTypeColor(product.type)}>
                          {product.type === "customizable" ? (
                            <>
                              <Palette className="h-3 w-3 mr-1" />
                              Customizable
                            </>
                          ) : (
                            <>
                              <Package className="h-3 w-3 mr-1" />
                              Direct
                            </>
                          )}
                        </Badge>
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell className="font-medium">₹{product.price}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span>{product.stock}</span>
                          <Badge className={stockStatus.color} variant="secondary">
                            {stockStatus.label}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(product.status)}>
                          {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>{product.orders}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
