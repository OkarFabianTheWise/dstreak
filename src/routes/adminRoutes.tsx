import type { RouteConfig } from "@/types/routes";
import Admin from "@/pages/Admin";
import SuperAdminDashboard from "@/pages/superadmin/superadmin";
import AdminLayout from "@/layouts/AdminLayout";
import AssignPage from "@/pages/superadmin/assign/page";
import BanPage from "@/pages/superadmin/ban/page";
import EmailPage from "@/pages/superadmin/email/page";
import EventPage from "@/pages/superadmin/event/page";
import MembersPage from "@/pages/superadmin/members/page";
import TaskPage from "@/pages/superadmin/task/[userId]/page";
import TicketsPage from "@/pages/superadmin/ticket/page";
import WalletsPage from "@/pages/superadmin/wallet/page";
import { ProfilePage } from "@/pages/superadmin/profile/page";

export const adminRoutes: RouteConfig[] = [
  {
    path: "/admin",
    element: (
      <AdminLayout>
        <Admin />
      </AdminLayout>
    ),
  },
  {
    path: "/super-admin",
    element: (
      <AdminLayout>
        <SuperAdminDashboard />
      </AdminLayout>
    ),
  },
  {
    path: "/super-admin/assign",
    element: (
      <AdminLayout>
        <AssignPage />
      </AdminLayout>
    ),
  },
  {
    path: "/super-admin/ban",
    element: (
      <AdminLayout>
        <BanPage />
      </AdminLayout>
    ),
  },
  {
    path: "/super-admin/email",
    element: (
      <AdminLayout>
        <EmailPage />
      </AdminLayout>
    ),
  },
  {
    path: "/super-admin/event",
    element: (
      <AdminLayout>
        <EventPage />
      </AdminLayout>
    ),
  },
  {
    path: "/super-admin/members",
    element: (
      <AdminLayout>
        <MembersPage />
      </AdminLayout>
    ),
  },
  {
    path: "/super-admin/profile",
    element: (
      <AdminLayout>
        <ProfilePage />
      </AdminLayout>
    ),
  },
  {
    path: "/super-admin/task",
    element: (
      <AdminLayout>
        <TaskPage params={{ userId: "someUserId" }} />
      </AdminLayout>
    ),
  },
  {
    path: "/super-admin/tickets",
    element: (
      <AdminLayout>
        <TicketsPage />
      </AdminLayout>
    ),
  },
  {
    path: "/super-admin/wallets",
    element: (
      <AdminLayout>
        <WalletsPage />
      </AdminLayout>
    ),
  },
];
