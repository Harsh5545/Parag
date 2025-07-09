"use client"

import Link from "next/link"
import type React from "react"
import { useRouter } from "next/navigation"

interface SmoothLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function SmoothLink({ href, children, className, onClick }: SmoothLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()

    // Execute any custom onClick
    if (onClick) {
      onClick()
    }

    // Smooth scroll to top first
    window.scrollTo({ top: 0, behavior: "smooth" })

    // Navigate after a short delay
    setTimeout(() => {
      router.push(href)
    }, 300)
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
