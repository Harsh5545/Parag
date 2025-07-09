"use client"

import type React from "react"
import { useEffect } from "react"

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function PageWrapper({ children, className = "" }: PageWrapperProps) {
  useEffect(() => {
    // Ensure page starts at top
    window.scrollTo(0, 0)
  }, [])

  return <div className={`page-container page-transition ${className}`}>{children}</div>
}
