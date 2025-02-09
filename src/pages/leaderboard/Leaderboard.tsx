"use client";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AlertModal from "../../components/ui/api-error-alert";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RecentActivity } from "./RecentActivity";
import { fetchLeaderboard } from "../../utils/api/leaderboard";

// Define the type for leaderboard user data
interface LeaderboardUser {
  id: string;
  full_name: string | null;
  username: string;
  total_points: number;
  rank: number;
}

export function Leaderboard() {
  const [filter, setFilter] = useState<"weekly" | "monthly">("weekly");
  const [currentPage, setCurrentPage] = useState(1);
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([]);
  const [loggedInUser, setLoggedInUser] = useState<LeaderboardUser | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const loadLeaderboard = async () => {
    setIsLoading(true);
    try {
      const response = await fetchLeaderboard(
        {
          duration: filter, // Use the filter state instead of hardcoded "weekly"
          page: currentPage, // Use the current page
          limit: itemsPerPage, // Use itemsPerPage instead of hardcoded 100
        },
        setErrorMessage
      );
      setLeaderboardData(response.data.data);
      // console.log(response.data.data);

      // Find logged in user's position
      const userId = localStorage.getItem("userId");
      if (userId) {
        const loggedInUserData = response.data.data.find(
          (user: LeaderboardUser) => user.id === userId
        );
        if (loggedInUserData) {
          setLoggedInUser(loggedInUserData);
        } else if (response.data.currentUser) {
          // Fallback to currentUser if provided by API
          setLoggedInUser(response.data.currentUser);
        }
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const itemsPerPage = 100; // Use itemsPerPage instead of hardcoded 100
  // Fetch leaderboard data and logged-in user data
  useEffect(() => {
    loadLeaderboard();
  }, []);

  const totalPages = Math.ceil(leaderboardData.length / itemsPerPage);

  // Change page
  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 text-white flex flex-col lg:flex-row gap-4 sm:gap-6">
      {/* Main content area */}
      <div className="w-full lg:w-3/4 space-y-4 sm:space-y-6">
        {/* Logged in user's name */}
        {loggedInUser && (
          <h2 className="text-lg sm:text-xl font-semibold text-[#00ff00] px-2">
            Welcome, {loggedInUser.full_name || loggedInUser.username}
          </h2>
        )}

        {/* Your Rank Section (only show if user is logged in) */}
        {loggedInUser && (
          <div className="rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] p-3 sm:p-4">
            <p className="mb-2 text-xs sm:text-sm text-[#666666]">#Your rank</p>
            <div className="flex items-center justify-between rounded-full border border-[#1a1a1a] bg-[#0a0a0a] px-3 sm:px-4 py-2">
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <span className="text-base sm:text-lg shrink-0">
                  {loggedInUser.rank}
                </span>
                <img
                  src="/placeholder.svg"
                  alt={loggedInUser.full_name || loggedInUser.username}
                  className="h-6 w-6 sm:h-8 sm:w-8 rounded-full shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-medium text-xs sm:text-sm truncate">
                    {loggedInUser.full_name || loggedInUser.username}
                  </p>
                  <p className="text-[10px] sm:text-xs text-[#00ff00] truncate">
                    @{loggedInUser.username}
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm ml-2 shrink-0">
                {loggedInUser.total_points || 0}xp
              </p>
            </div>
          </div>
        )}

        {/* Rankings Section */}
        <div className="space-y-3 sm:space-y-4">
          {/* Filter dropdown */}
          <div className="flex items-center gap-2 px-2">
            <img
              src="/placeholder.svg?height=24&width=24"
              alt=""
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-[#00ff00] hover:text-[#00ff00]/80 text-sm sm:text-base"
                >
                  {filter === "weekly" ? "Weekly" : "Monthly"} Ranking
                  <ChevronDown className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#0a0a0a] text-white">
                <DropdownMenuItem
                  onClick={() => {
                    setFilter("weekly");
                    setCurrentPage(1);
                  }}
                >
                  Weekly Ranking
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setFilter("monthly");
                    setCurrentPage(1);
                  }}
                >
                  Monthly Ranking
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Ranking List */}
          <div className="space-y-2">
            {isLoading ? (
              <p className="text-center py-4">Loading...</p>
            ) : (
              leaderboardData.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between rounded-full border border-[#1a1a1a] bg-[#0a0a0a] px-3 sm:px-4 py-2 transition-colors hover:bg-[#1a1a1a]"
                >
                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <span className="w-5 sm:w-6 text-xs sm:text-sm shrink-0">
                      {user.rank}
                    </span>
                    <img
                      src="/placeholder.svg"
                      alt={user.full_name || user.username}
                      className="h-6 w-6 sm:h-8 sm:w-8 rounded-full shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-medium text-xs sm:text-sm truncate">
                        {user.full_name || user.username}
                      </p>
                      <p className="text-[10px] sm:text-xs text-[#00ff00] truncate">
                        @{user.username}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm ml-2 shrink-0">
                    {user.total_points || 0}xp
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-1 sm:gap-2 pt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevPage}
              disabled={currentPage === 1}
              className="h-6 w-6 sm:h-8 sm:w-8 bg-[#0a0a0a] text-[#00ff00]"
            >
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            {getPageNumbers().map((number) => (
              <Button
                key={number}
                variant={currentPage === number ? "default" : "outline"}
                size="icon"
                onClick={() => goToPage(number)}
                className={`h-8 w-8 ${
                  currentPage === number
                    ? "bg-[#00ff00] text-black hover:bg-[#00ff00]/90"
                    : "bg-[#0a0a0a] text-[#00ff00]"
                }`}
              >
                {number}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="h-8 w-8 bg-[#0a0a0a] text-[#00ff00]"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Recent Activity Sidebar */}
      <div className="w-full lg:w-1/4">
        <RecentActivity />
      </div>

      <AlertModal
        message={errorMessage}
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
      />
    </div>
  );
}
