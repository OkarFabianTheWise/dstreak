import { Navigate, useLocation } from "react-router-dom"
import type { RouteGuardProps } from "@/types/routes"

export function AuthGuard({ children, isAuthenticated, redirectTo = "/login" }: RouteGuardProps) {
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace state={{ from: location.pathname }} />
  }

  return <>{children}</>
}

