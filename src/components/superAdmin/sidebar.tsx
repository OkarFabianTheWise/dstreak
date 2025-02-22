"use client"

import { cn } from "@/lib/utils"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { LayoutDashboard, Users, Send, ListTodo, Calendar, Ban, User, Ticket, Wallet, Mail, LogOut } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const mainNavItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/super-admin",
  },
  {
    icon: Users,
    label: "Members",
    path: "/super-admin/members",
  },
  {
    icon: Send,
    label: "Assign",
    path: "/super-admin/assign",
  },
  {
    icon: ListTodo,
    label: "Task",
    path: "/super-admin/task/",
  },
  {
    icon: Calendar,
    label: "Event",
    path: "/super-admin/event",
  },
  {
    icon: Ban,
    label: "Ban",
    path: "/super-admin/ban",
  },
]

const accountNavItems = [
  {
    icon: User,
    label: "Profile",
    path: "/super-admin/profile",
  },
  {
    icon: Ticket,
    label: "Tickets",
    path: "/super-admin/tickets",
  },
]

const fileNavItems = [
  {
    icon: Wallet,
    label: "Wallets",
    path: "/super-admin/wallets",
  },
  {
    icon: Mail,
    label: "Email",
    path: "/super-admin/email",
  },
]

export function AdminSidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  const NavLink = ({ item }: { item: { icon: any; label: string; path: string } }) => {
    const Icon = item.icon
    const isActive = location.pathname === item.path

    return (
      <Link
        to={item.path}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
          "hover:bg-accent hover:text-black",
          isActive ? "bg-accent text-black" : "text-muted-foreground",
        )}
      >
        <Icon className="h-4 w-4" />
        <span>{item.label}</span>
      </Link>
    )
  }

  const handleLogout = () => {
    // Add your logout logic here
    navigate("/login")
  }

  return (
    <div className="flex h-full w-64 flex-col gap-4 border-r bg-background p-4">
      <div className="flex items-center gap-2 px-3 py-2">
        <span className="text-lg font-bold tracking-wider text-primary">DEVSTREAK ADMIN</span>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 space-y-4 overflow-y-auto no-scrollbar">
        <div className="space-y-2">
          {mainNavItems.map((item) => (
            <NavLink key={item.path} item={item} />
          ))}
        </div>

        {/* Account Section */}
        <div className="space-y-2">
          <Separator className="my-4" />
          {accountNavItems.map((item) => (
            <NavLink key={item.path} item={item} />
          ))}
          <Separator className="my-4" />
        </div>

        {/* Files Section */}
        <div className="space-y-2">
          <span className="px-3 text-xs font-semibold text-muted-foreground">FILES</span>
          {fileNavItems.map((item) => (
            <NavLink key={item.path} item={item} />
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors mt-auto",
          "hover:bg-destructive hover:text-destructive-foreground",
          "text-muted-foreground",
        )}
      >
        <LogOut className="h-4 w-4" />
        <span>Logout</span>
      </button>
    </div>
  )
}

