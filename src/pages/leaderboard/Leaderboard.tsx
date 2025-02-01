"use client";
import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { weeklyRanking, monthlyRanking, type RankingUser } from "../../data";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RecentActivity } from "./RecentActivity";

export function Leaderboard() {
  const [filter, setFilter] = useState<"weekly" | "monthly">("weekly");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const data = filter === "weekly" ? weeklyRanking : monthlyRanking;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

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
    <div className="min-h-screen bg-black p-6 text-white flex flex-col lg:flex-row gap-6 justify-end items-start">
      <div className="w-full lg:px-6 md:border-r border-green-200 space-y-6">
        {/* Your Rank Section */}
        <div className="rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] p-4">
          <p className="mb-2 text-xs text-[#666666]">#Your rank</p>
          <div className="flex items-center justify-between rounded-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-2">
            <div className="flex items-center gap-3">
              <span className="text-lg">1</span>
              <img
                src={data[0].image || "/placeholder.svg"}
                alt={data[0].name}
                className="h-8 w-8 rounded-full"
              />
              <div>
                <p className="font-medium text-[12px]">{data[0].name}</p>
                <p className="text-sm text-[#00ff00] text-[10px]">@{data[0].username}</p>
              </div>
            </div>
            <p className="text-[12px]">{data[0].xps}xp</p>
          </div>
        </div>

        {/* Rankings Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img
              src="/placeholder.svg?height=24&width=24"
              alt=""
              className="h-6 w-6"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-[#00ff00] hover:text-[#00ff00]/80"
                >
                  {filter === "weekly" ? "Weekly" : "Monthly"} Ranking
                  <ChevronDown className="ml-2 h-4 w-4" />
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
            {currentItems.map((user, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-2 transition-colors hover:bg-[#1a1a1a]"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 text-sm">
                    {indexOfFirstItem + index + 1}
                  </span>
                  <img
                    src={user.image || "/placeholder.svg"}
                    alt={user.name}
                    className="h-8 w-8 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-[12px]">{user.name}</p>
                    <p className="text-[10px] text-[#00ff00]">@{user.username}</p>
                  </div>
                </div>
                <p className="text-[12px]">{user.xps}xp</p>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevPage}
              disabled={currentPage === 1}
              className="h-8 w-8 bg-[#0a0a0a] text-[#00ff00]"
            >
              <ChevronLeft className="h-4 w-4" />
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
      <RecentActivity />
    </div>
  );
}
