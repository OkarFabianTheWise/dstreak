import type { RouteConfig } from '@/interfaces/routes'
import EditProfile from '@/pages/accounts-settings/EditProfile'
import LinkedAccounts from '@/pages/accounts-settings/LinkedAccounts'
import ProfilePage from '@/pages/ProfilePage'
import ProfileSettingsPage from '@/pages/ProfileSettingsPage'
import Task from '@/pages/Task'
import TasksDetailsPage from '@/pages/TaskDetailsPage'
import TasksPage from '@/pages/TasksPage'

export const protectedRoutes: RouteConfig[] = [
  {
    path: '/profile',
    element: <ProfilePage />,
    requiresAuth: true,
  },
  {
    path: '/tasks-screen',
    element: <TasksPage />,
    requiresAuth: true,
  },
  {
    path: '/tasks-details/:id',
    element: <TasksDetailsPage />,
    requiresAuth: true,
  },
  {
    path: '/settings/profile',
    element: <EditProfile />,
    requiresAuth: true,
  },
  {
    path: '/settings/linked-accounts',
    element: <LinkedAccounts />,
    requiresAuth: true,
  },
  {
    path: '/account-settings',
    element: <ProfileSettingsPage />,
    requiresAuth: true,
  },
  {
    path: '/tasks',
    element: <Task />,
    requiresAuth: true,
  },
]
