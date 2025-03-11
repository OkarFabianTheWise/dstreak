import type { ReactNode } from "react"

export interface RouteConfig {
  path: string
  element: ReactNode
  requiresAuth?: boolean
  isAdmin?: boolean
  layout?: "default" | "admin" | "none"
}

export interface RouteGuardProps {
  children: ReactNode
  isAuthenticated: boolean
  redirectTo?: string
}

