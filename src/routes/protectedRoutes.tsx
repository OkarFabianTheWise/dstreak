import type { RouteConfig } from "@/types/routes"
import ProfilePage from "@/pages/ProfilePage"
import TasksPage from "@/pages/TasksPage"
import TasksDetailsPage from "@/pages/TaskDetailsPage"
import EditProfile from "@/pages/accounts-settings/EditProfile"
import LinkedAccounts from "@/pages/accounts-settings/LinkedAccounts"
import ProfileSettingsPage from "@/pages/ProfileSettingsPage"
import Task from "@/pages/Task"

export const protectedRoutes: RouteConfig[] = [
  {
    path: "/profile",
    element: <ProfilePage />,
    requiresAuth: true,
  },
  {
    path: "/tasks-screen",
    element: <TasksPage />,
    requiresAuth: true,
  },
  {
    path: "/tasks-details",
    element: <TasksDetailsPage />,
    requiresAuth: true,
  },
  {
    path: "/settings/profile",
    element: <EditProfile />,
    requiresAuth: true,
  },
  {
    path: "/settings/linked-accounts",
    element: <LinkedAccounts />,
    requiresAuth: true,
  },
  {
    path: "/account-settings",
    element: <ProfileSettingsPage />,
    requiresAuth: true,
  },
  {
    path: "/tasks",
    element: <Task />,
    requiresAuth: true,
  },
]

