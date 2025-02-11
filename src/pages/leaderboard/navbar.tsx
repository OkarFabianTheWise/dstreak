"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Menu as MenuIcon, PersonStanding } from "lucide-react"; // Changed this line
import { IoNotifications } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { demoProfilePics } from "@/assets/image";

const BoardNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<
    "leaderboard" | "tasks-screen"
  >("leaderboard");

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Sync the currentView state with the actual route
  useEffect(() => {
    if (location.pathname === "/tasks-screen") {
      setCurrentView("tasks-screen");
    } else if (location.pathname === "/leaderboard") {
      setCurrentView("leaderboard");
    }
  }, [location.pathname]);

  const handleNavigation = (view: "leaderboard" | "tasks-screen") => {
    setCurrentView(view);
    navigate(view === "leaderboard" ? "/leaderboard" : "/tasks-screen");
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/leaderboard");
  };

  return (
    <nav className="w-full relative">
      {/* Main navbar container */}
      <div className="flex justify-between items-center p-3 sm:p-4 text-white">
        {/* Mobile menu button */}
        <button
          className="sm:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>

        {/* Navigation links - hidden on mobile, visible on larger screens */}
        <ul className="hidden sm:flex flex-row space-x-6 flex-1 justify-center">
          <li>
            <button
              onClick={() => handleNavigation("leaderboard")}
              className={`text-primary cursor-pointer hover:underline ${
                currentView === "leaderboard" ? "underline font-medium" : ""
              }`}
            >
              Leaderboard
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("tasks-screen")}
              className={`text-primary cursor-pointer hover:underline ${
                currentView === "tasks-screen" ? "underline font-medium" : ""
              }`}
            >
              Tasks
            </button>
          </li>
        </ul>

        {/* Right side icons */}
        <ul className="flex flex-row space-x-2 sm:space-x-4 items-center">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer">
                  <img
                    src={demoProfilePics}
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  <AvatarFallback>
                    <PersonStanding className="h-3 w-3 sm:h-4 sm:w-4" />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 sm:w-56 bg-black"
              >
                <DropdownMenuItem
                  className="cursor-pointer flex items-center"
                  onClick={() => navigate("/profile")}
                >
                  <img
                    src={demoProfilePics}
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer flex items-center"
                  onClick={() => navigate("/settings/profile")}
                >
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
                <DropdownMenuItem
                  className="cursor-pointer text-destructive flex items-center"
                  onClick={() => logout()}
                >
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
          </li>
          <li>
            <IoNotifications className="h-5 w-5 sm:h-6 sm:w-6" />
          </li>
        </ul>
      </div>

      {/* Mobile menu - visible only on mobile when open */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute w-full bg-[#151515] z-50 border-t border-primary/20">
          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <button
                onClick={() => {
                  handleNavigation("leaderboard");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-primary cursor-pointer hover:underline ${
                  currentView === "leaderboard" ? "underline font-medium" : ""
                }`}
              >
                Leaderboard
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleNavigation("tasks-screen");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-primary cursor-pointer hover:underline ${
                  currentView === "tasks-screen" ? "underline font-medium" : ""
                }`}
              >
                Tasks
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default BoardNavbar;
