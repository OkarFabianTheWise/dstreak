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
    requiresAuth: false,
  },
  {
    path: '/tasks-screen',
    element: <TasksPage />,
    requiresAuth: false,
  },
  {
    path: '/tasks-details/:id',
    element: <TasksDetailsPage />,
    requiresAuth: false,
  },
  {
    path: '/settings/profile',
    element: <EditProfile />,
    requiresAuth: false,
  },
  {
    path: '/settings/linked-accounts',
    element: <LinkedAccounts />,
    requiresAuth: false,
  },
  {
    path: '/account-settings',
    element: <ProfileSettingsPage />,
    requiresAuth: false,
  },
  {
    path: '/tasks',
    element: <Task />,
    requiresAuth: false,
  },
]
