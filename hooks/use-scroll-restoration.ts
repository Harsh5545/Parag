"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function useScrollRestoration() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Save scroll position before navigation
    const handleBeforeUnload = () => {
      sessionStorage.setItem(`scroll-${pathname}`, window.scrollY.toString())
    }

    // Restore scroll position after navigation
    const handleLoad = () => {
      const savedPosition = sessionStorage.getItem(`scroll-${pathname}`)
      if (savedPosition) {
        window.scrollTo(0, Number.parseInt(savedPosition))
      } else {
        window.scrollTo(0, 0)
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    window.addEventListener("load", handleLoad)

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" })

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
      window.removeEventListener("load", handleLoad)
    }
  }, [pathname, searchParams])
}
