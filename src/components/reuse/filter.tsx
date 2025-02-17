"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function StateFilter() {
  return (
    <Select defaultValue="all">
      <SelectTrigger className="w-[180px] bg-zinc-900/50 text-white focus:ring-[#51FF00]">
        <SelectValue placeholder="State" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="lagos">Lagos</SelectItem>
        <SelectItem value="abuja">Abuja</SelectItem>
        <SelectItem value="kaduna">Kaduna</SelectItem>
        <SelectItem value="enugu">Enugu</SelectItem>
        <SelectItem value="anambra">Anambra</SelectItem>
      </SelectContent>
    </Select>
  )
}

