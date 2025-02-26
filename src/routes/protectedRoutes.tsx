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
    requiresAuth: false,
  },
  {
    path: "/tasks-screen",
    element: <TasksPage />,
    requiresAuth: false,
  },
  {
    path: "/tasks-details/:id",
    element: <TasksDetailsPage />,
    requiresAuth: false,
  },
  {
    path: "/settings/profile",
    element: <EditProfile />,
    requiresAuth: false,
  },
  {
    path: "/settings/linked-accounts",
    element: <LinkedAccounts />,
    requiresAuth: false,
  },
  {
    path: "/account-settings",
    element: <ProfileSettingsPage />,
    requiresAuth: false,
  },
  {
    path: "/tasks",
    element: <Task />,
    requiresAuth: false,
  },
]

