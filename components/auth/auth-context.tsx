"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

interface AuthState {
  user: User | null
  isLoading: boolean
}

const AuthContext = createContext<{
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  register: (name: string, email: string, password: string) => Promise<void>
} | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: false,
  })

  const login = async (email: string, password: string) => {
    setAuthState((prev) => ({ ...prev, isLoading: true }))

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const user: User = {
      id: "1",
      name: "John Doe",
      email: email,
      avatar: "/placeholder.svg?height=40&width=40",
    }

    setAuthState({ user, isLoading: false })
  }

  const logout = () => {
    setAuthState({ user: null, isLoading: false })
  }

  const register = async (name: string, email: string, password: string) => {
    setAuthState((prev) => ({ ...prev, isLoading: true }))

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const user: User = {
      id: "1",
      name: name,
      email: email,
      avatar: "/placeholder.svg?height=40&width=40",
    }

    setAuthState({ user, isLoading: false })
  }

  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        isLoading: authState.isLoading,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
