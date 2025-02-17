"use client"

import { useState, useEffect } from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ChevronDown, Search, Zap } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { RoleCrystal } from "@/constants/crystal"
import { fetchUsers, getRoleCounts } from "@/data/index"

export type UserRole = "SUPER_ADMIN" | "ADMIN" | "OTHER"

export interface User {
  id: string
  name: string
  username: string
  avatar: string
  role: UserRole
  task: string
  xp: number
  rank: number
}

export function UsersTable() {
  const [data, setData] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [roleCounts, setRoleCounts] = useState({ SUPER_ADMIN: 0, ADMIN: 0, OTHER: 0 })

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await fetchUsers()
        setData(data)
        setRoleCounts(getRoleCounts())
      } catch (error) {
        console.error("Error loading users:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="flex items-center gap-2 min-w-[200px]">
          <Avatar className="h-8 w-8 shrink-0">
            <AvatarImage src={row.original.avatar} alt={row.original.name} />
            <AvatarFallback>{row.original.name[0]}</AvatarFallback>
          </Avatar>
          <span className="font-mono truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "username",
      header: "Username",
      cell: ({ row }) => (
        <span className="font-mono text-gray-400 truncate block min-w-[120px]">{row.original.username}</span>
      ),
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => <RoleCrystal role={row.original.role} />,
    },
    {
      accessorKey: "task",
      header: "Task",
      cell: ({ row }) => <span className="font-mono text-gray-400">{row.original.task}</span>,
    },
    {
      accessorKey: "xp",
      header: "XP",
      cell: ({ row }) => <span className="font-mono text-yellow-500">{row.original.xp.toLocaleString()}</span>,
    },
    {
      accessorKey: "rank",
      header: "Rank",
      cell: ({ row }) => <span className="font-mono text-gray-400">{row.original.rank}</span>,
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="h-7 border-red-500/20 px-3 text-xs text-red-500 hover:bg-red-500/10 hover:text-red-400"
          >
            Ban
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="h-7 border-green-500/20 px-3 text-xs text-green-500 hover:bg-green-500/10 hover:text-green-400"
              >
                More
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-zinc-950 text-white sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="font-mono text-lg">Role Statistics</DialogTitle>
                <DialogDescription>
                  <div className="mt-4 grid gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <RoleCrystal role="SUPER_ADMIN" showCount count={roleCounts.SUPER_ADMIN} />
                        <span className="font-mono text-sm text-gray-400">SUPER ADMIN</span>
                      </div>
                      <span className="font-mono text-sm text-green-500">{roleCounts.SUPER_ADMIN}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <RoleCrystal role="ADMIN" showCount count={roleCounts.ADMIN} />
                        <span className="font-mono text-sm text-gray-400">ADMIN</span>
                      </div>
                      <span className="font-mono text-sm text-green-500">{roleCounts.ADMIN}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <RoleCrystal role="OTHER" showCount count={roleCounts.OTHER} />
                        <span className="font-mono text-sm text-gray-400">OTHERS</span>
                      </div>
                      <span className="font-mono text-sm text-green-500">{roleCounts.OTHER}</span>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      ),
    },
  ]

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-green-500 border-t-transparent"></div>
          <p className="font-mono text-sm text-gray-500">Loading users...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full p-2 sm:p-4">
      {/* Header Stats */}
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <Button variant="outline" className="h-9 gap-2 border-green-500/20">
          <Zap className="h-4 w-4" />
          <span className="font-mono">Leaderboard</span>
        </Button>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <RoleCrystal role="SUPER_ADMIN" showCount count={roleCounts.SUPER_ADMIN} />
            <span className="font-mono text-xs text-gray-500">SUPER ADMIN</span>
          </div>
          <div className="flex items-center gap-2">
            <RoleCrystal role="ADMIN" showCount count={roleCounts.ADMIN} />
            <span className="font-mono text-xs text-gray-500">ADMIN</span>
          </div>
          <div className="flex items-center gap-2">
            <RoleCrystal role="OTHER" showCount count={roleCounts.OTHER} />
            <span className="font-mono text-xs text-gray-500">OTHERS</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full gap-2 border-green-500/20 sm:w-[150px]">
              Options
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[150px] bg-zinc-950">
            <DropdownMenuLabel>Sort By</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Rank</DropdownMenuItem>
            <DropdownMenuItem>XP</DropdownMenuItem>
            <DropdownMenuItem>Name</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Search users..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
            className="w-full border-green-500/20 bg-zinc-950 pl-9 focus-visible:ring-green-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="rounded-lg border border-green-500/20 bg-zinc-950 min-w-[800px]">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} className="font-mono text-xs text-gray-500">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

