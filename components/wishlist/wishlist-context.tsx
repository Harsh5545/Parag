"use client"

import { createContext, useContext, useReducer, type ReactNode } from "react"

interface WishlistItem {
  id: string
  name: string
  price: number
  image: string
}

interface WishlistState {
  items: WishlistItem[]
}

type WishlistAction =
  | { type: "ADD_ITEM"; payload: WishlistItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "CLEAR_WISHLIST" }

const WishlistContext = createContext<{
  state: WishlistState
  addItem: (item: WishlistItem) => void
  removeItem: (id: string) => void
  clearWishlist: () => void
  isInWishlist: (id: string) => boolean
  items: WishlistItem[]
} | null>(null)

function wishlistReducer(state: WishlistState, action: WishlistAction): WishlistState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.id === action.payload.id)
      if (existingItem) {
        return state
      }
      return {
        items: [...state.items, action.payload],
      }
    }
    case "REMOVE_ITEM": {
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      }
    }
    case "CLEAR_WISHLIST":
      return { items: [] }
    default:
      return state
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, { items: [] })

  const addItem = (item: WishlistItem) => {
    dispatch({ type: "ADD_ITEM", payload: item })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const clearWishlist = () => {
    dispatch({ type: "CLEAR_WISHLIST" })
  }

  const isInWishlist = (id: string) => {
    return state.items.some((item) => item.id === id)
  }

  return (
    <WishlistContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        clearWishlist,
        isInWishlist,
        items: state.items,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
