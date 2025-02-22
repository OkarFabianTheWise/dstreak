"use client"

import { useState, useEffect } from "react"
import { Dot, PersonStanding, Search, X } from "lucide-react"
import { IoNotifications } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface SuperAdminNavProps {
  demoProfilePics: string
}

export function SuperAdminNav({ demoProfilePics }: SuperAdminNavProps) {
  const navigate = useNavigate()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsSearchOpen(false)
  }, [])

  const logout = () => {
    localStorage.removeItem("accessToken")
    navigate("/leaderboard")
  }

  const online = ["600"]

  const ProfileDropdown = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-8 w-8 cursor-pointer">
          <img src={demoProfilePics || "/placeholder.svg"} alt="Profile" className="h-full w-full rounded-full" />
          <AvatarFallback>
            <PersonStanding className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-black">
        <DropdownMenuItem className="cursor-pointer flex items-center" onClick={() => navigate("/profile")}>
          <img src={demoProfilePics || "/placeholder.svg"} className="h-8 w-8 rounded-full mr-2" alt="Profile" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer flex items-center" onClick={() => navigate("/settings/profile")}>
          <svg
            className="mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span>Account settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer text-destructive flex items-center" onClick={logout}>
          <svg
            className="mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <nav className="relative w-full">
      <div className="flex items-center justify-between gap-4 text-white">
        {/* Online Status - Hidden on mobile when search is open */}
        <div
          className={cn(
            "flex flex-col items-center justify-center rounded-full border border-gray-100/10 px-4 py-2 transition-all duration-300",
            isSearchOpen ? "hidden md:flex" : "flex",
          )}
        >
          <p className="text-[12px] font-bold flex flex-row items-center">
            <Dot className="text-primary" />
            Online
          </p>
          <span className="text-primary text-[15px]">{online}</span>
        </div>

        {/* Search Input - Full width on mobile when open */}
        <div
          className={cn(
            "transition-all duration-300",
            isSearchOpen ? "flex-1" : "hidden md:block md:w-full md:max-w-sm",
          )}
        >
          <Input
            type="text"
            placeholder="Search..."
            className="rounded-full border border-gray-100/10 bg-gray-50/10 focus:border-primary focus:outline-primary"
          />
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Search Toggle - Mobile Only */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </Button>

          {/* Profile and Notifications */}
          <div className="flex items-center gap-4">
            <ProfileDropdown />
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <IoNotifications className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="w-[300px] bg-black">
          {/* Mobile menu content */}
        </SheetContent>
      </Sheet>
    </nav>
  )
}

