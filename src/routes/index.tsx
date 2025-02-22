import { publicRoutes } from "./publicRoutes"
import { protectedRoutes } from "./protectedRoutes"
import { adminRoutes } from "./adminRoutes"
import { AuthGuard } from "@/components/guards/authGurads"
import { useAuthStore } from "@/utils/api/auth"
import type { RouteConfig } from "@/types/routes"

export const useRoutes = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  const renderRoute = (route: RouteConfig) => {
    // Only apply AuthGuard to protected routes, not admin routes
    if (route.requiresAuth) {
      return {
        path: route.path,
        element: <AuthGuard isAuthenticated={isAuthenticated}>{route.element}</AuthGuard>,
      }
    }
    return { path: route.path, element: route.element }
  }

  // Combine all routes, admin routes will be rendered without restrictions
  return [...publicRoutes, ...protectedRoutes, ...adminRoutes].map(renderRoute)
}

