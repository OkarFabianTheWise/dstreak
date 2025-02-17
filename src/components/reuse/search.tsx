"use client"

import { Zap } from "lucide-react"
import { Input } from "@/components/ui/input"

export function Search() {
  return (
    <div className="relative">
      <Zap className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#51FF00]" />
      <Input
        type="search"
        placeholder="Search for member"
        className="w-full bg-zinc-900/50 pl-10 text-white placeholder:text-gray-500 focus-visible:ring-[#51FF00] sm:w-[300px]"
      />
    </div>
  )
}

