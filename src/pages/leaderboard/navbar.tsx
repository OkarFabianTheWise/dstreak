"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { PersonStanding } from "lucide-react";
import { IoNotifications } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BoardNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentView, setCurrentView] = useState<
    "leaderboard" | "tasks-screen"
  >("leaderboard");

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
    <div className="w-full flex flex-row justify-end items-center p-4 text-white">
      <ul className="flex flex-row space-x-6 mr-[35%]">
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
      <ul className="flex flex-row space-x-4 items-center">
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>
                  <PersonStanding className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-black">
              <DropdownMenuItem
                className="cursor-pointer flex items-center"
                onClick={() => navigate("/profile")}
              >
                <PersonStanding className="mr-2 h-4 w-4" />
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
          <IoNotifications size={24} />
        </li>
      </ul>
    </div>
  );
};

export default BoardNavbar;
