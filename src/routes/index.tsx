import { AuthGuard } from '@/components/guards/authGurads'
import { useAuth } from '@/contexts/AuthContext'
import type { RouteConfig } from '@/interfaces/routes'
import { adminRoutes } from './adminRoutes'
import { protectedRoutes } from './protectedRoutes'
import { publicRoutes } from './publicRoutes'

export const useRoutes = () => {
  const { isLoggedIn } = useAuth()

  const renderRoute = (route: RouteConfig) => {
    // Only apply AuthGuard to protected routes, not admin routes
    if (route.requiresAuth) {
      return {
        path: route.path,
        element: (
          <AuthGuard isAuthenticated={isLoggedIn}>{route.element}</AuthGuard>
        ),
      }
    }
    return { path: route.path, element: route.element }
  }

  // Combine all routes, admin routes will be rendered without restrictions
  return [...publicRoutes, ...protectedRoutes, ...adminRoutes].map(renderRoute)
}
