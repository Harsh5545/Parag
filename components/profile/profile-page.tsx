"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import {
  User,
  MapPin,
  Package,
  Heart,
  Bell,
  Shield,
  CreditCard,
  Upload,
  Edit,
  Save,
  Eye,
  Trash2,
  Plus,
} from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

// Mock user data
const userData = {
  id: "user_123",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+91 98765 43210",
  avatar: "/placeholder.svg?height=100&width=100",
  joinDate: "2023-06-15",
  totalOrders: 12,
  totalSpent: 15420,
  addresses: [
    {
      id: "addr_1",
      type: "home",
      name: "John Doe",
      street: "123 Main Street",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
      phone: "+91 98765 43210",
      isDefault: true,
    },
    {
      id: "addr_2",
      type: "work",
      name: "John Doe",
      street: "456 Business Park",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400002",
      phone: "+91 98765 43210",
      isDefault: false,
    },
  ],
  recentOrders: [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "delivered",
      total: 649,
      items: 1,
      product: "Custom T-Shirt",
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      status: "shipped",
      total: 399,
      items: 1,
      product: "Custom Mug",
    },
  ],
  wishlist: [
    {
      id: "prod_1",
      name: "Custom Hoodie",
      price: 1299,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "prod_2",
      name: "Custom Phone Case",
      price: 499,
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  preferences: {
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: true,
    orderUpdates: true,
  },
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
  })
  const [preferences, setPreferences] = useState(userData.preferences)
  const { toast } = useToast()

  const handleSave = () => {
    // Simulate API call
    setTimeout(() => {
      setIsEditing(false)
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })
    }, 1000)
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Profile</span>
        </h1>
        <p className="text-xl text-muted-foreground">Manage your account and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="addresses">Addresses</TabsTrigger>
          <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          {/* Profile Overview */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Information
                </CardTitle>
                <Button
                  variant={isEditing ? "default" : "outline"}
                  onClick={isEditing ? handleSave : () => setIsEditing(true)}
                >
                  {isEditing ? (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
                  <AvatarFallback className="text-2xl">
                    {userData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{userData.name}</h3>
                  <p className="text-muted-foreground">Customer since {userData.joinDate}</p>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Package className="h-4 w-4" />
                      <span>{userData.totalOrders} orders</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CreditCard className="h-4 w-4" />
                      <span>₹{userData.totalSpent.toLocaleString()} spent</span>
                    </div>
                  </div>
                  {!isEditing && (
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Change Photo
                    </Button>
                  )}
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Account Status</Label>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">Verified</Badge>
                      <Badge variant="outline">Premium Customer</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Order History
              </CardTitle>
              <CardDescription>View and track your recent orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userData.recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Package className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{order.id}</h4>
                        <p className="text-sm text-muted-foreground">{order.product}</p>
                        <p className="text-xs text-muted-foreground">{order.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(order.status)}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                      <p className="text-lg font-semibold mt-1">₹{order.total}</p>
                      <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                        <Eye className="h-3 w-3 mr-1" />
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="addresses" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Saved Addresses
                  </CardTitle>
                  <CardDescription>Manage your delivery addresses</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Address
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userData.addresses.map((address) => (
                  <Card key={address.id} className="relative">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Badge variant={address.type === "home" ? "default" : "secondary"}>
                            {address.type.charAt(0).toUpperCase() + address.type.slice(1)}
                          </Badge>
                          {address.isDefault && (
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              Default
                            </Badge>
                          )}
                        </div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-1 text-sm">
                        <p className="font-medium">{address.name}</p>
                        <p className="text-muted-foreground">{address.street}</p>
                        <p className="text-muted-foreground">
                          {address.city}, {address.state} {address.pincode}
                        </p>
                        <p className="text-muted-foreground">{address.phone}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wishlist" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                My Wishlist
              </CardTitle>
              <CardDescription>Products you've saved for later</CardDescription>
            </CardHeader>
            <CardContent>
              {userData.wishlist.length === 0 ? (
                <div className="text-center py-12">
                  <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Your wishlist is empty</h3>
                  <p className="text-muted-foreground mb-4">Save products you love to buy them later</p>
                  <Button>Browse Products</Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {userData.wishlist.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-semibold mb-2">{item.name}</h4>
                        <p className="text-lg font-bold text-primary mb-3">₹{item.price}</p>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            Add to Cart
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Choose how you want to receive updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive order updates via email</p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={preferences.emailNotifications}
                  onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, emailNotifications: checked }))}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sms-notifications">SMS Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive order updates via SMS</p>
                </div>
                <Switch
                  id="sms-notifications"
                  checked={preferences.smsNotifications}
                  onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, smsNotifications: checked }))}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="marketing-emails">Marketing Emails</Label>
                  <p className="text-sm text-muted-foreground">Receive promotional offers and updates</p>
                </div>
                <Switch
                  id="marketing-emails"
                  checked={preferences.marketingEmails}
                  onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, marketingEmails: checked }))}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="order-updates">WhatsApp Order Updates</Label>
                  <p className="text-sm text-muted-foreground">Get real-time order status on WhatsApp</p>
                </div>
                <Switch
                  id="order-updates"
                  checked={preferences.orderUpdates}
                  onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, orderUpdates: checked }))}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Account Security
              </CardTitle>
              <CardDescription>Manage your account security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Password</Label>
                  <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                </div>
                <Button variant="outline">Change Password</Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
                <Button variant="outline">Enable 2FA</Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label>Login Sessions</Label>
                  <p className="text-sm text-muted-foreground">Manage your active sessions</p>
                </div>
                <Button variant="outline">View Sessions</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
            <CardHeader>
              <CardTitle className="text-red-800 dark:text-red-200">Danger Zone</CardTitle>
              <CardDescription className="text-red-600 dark:text-red-300">
                Irreversible actions that affect your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-red-800 dark:text-red-200">Delete Account</Label>
                  <p className="text-sm text-red-600 dark:text-red-300">Permanently delete your account and all data</p>
                </div>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
