import GoogleCallback from '@/components/GoogleCallback'
import type { RouteConfig } from '@/interfaces/routes'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import SignupSuccess from '@/pages/SignupSuccess'
import { Leaderboard } from '@/pages/leaderboard/Leaderboard'
import LeaderboardLayout from '@/pages/leaderboard/layouts'

export const publicRoutes: RouteConfig[] = [
  {
    path: '/auth/google/callback',
    element: <GoogleCallback />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/',
    element: (
      <LeaderboardLayout>
        <Leaderboard />
      </LeaderboardLayout>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/signup-success',
    element: <SignupSuccess />,
  },
  {
    path: '/leaderboard',
    element: (
      <LeaderboardLayout>
        <Leaderboard />
      </LeaderboardLayout>
    ),
  },
]
