import type { User } from "./users-table"

export const usersData: User[] = [
  {
    id: "1",
    name: "Simon Peter",
    username: "simpet",
    avatar: "/placeholder.svg",
    role: "OTHER",
    task: "S2",
    xp: 8230,
    rank: 21,
  },
  {
    id: "2",
    name: "Sandra Best Oxford",
    username: "sandracodeX",
    avatar: "/placeholder.svg",
    role: "SUPER_ADMIN",
    task: "S1",
    xp: 15420,
    rank: 5,
  },
  {
    id: "3",
    name: "Alex Quantum",
    username: "quantumdev",
    avatar: "/placeholder.svg",
    role: "ADMIN",
    task: "S3",
    xp: 12340,
    rank: 8,
  },
  {
    id: "4",
    name: "Nina Cyber",
    username: "cyberninj4",
    avatar: "/placeholder.svg",
    role: "OTHER",
    task: "S2",
    xp: 6780,
    rank: 35,
  },
  {
    id: "5",
    name: "Max Power",
    username: "maxp0w3r",
    avatar: "/placeholder.svg",
    role: "ADMIN",
    task: "S4",
    xp: 9870,
    rank: 15,
  },
  {
    id: "6",
    name: "Luna Eclipse",
    username: "lunar_dev",
    avatar: "/placeholder.svg",
    role: "SUPER_ADMIN",
    task: "S1",
    xp: 18650,
    rank: 2,
  },
  {
    id: "7",
    name: "Zephyr Wind",
    username: "windcoder",
    avatar: "/placeholder.svg",
    role: "OTHER",
    task: "S2",
    xp: 4320,
    rank: 89,
  },
  {
    id: "8",
    name: "Rex Digital",
    username: "rex_bytes",
    avatar: "/placeholder.svg",
    role: "ADMIN",
    task: "S3",
    xp: 11230,
    rank: 12,
  },
  {
    id: "9",
    name: "Echo Stream",
    username: "stream_echo",
    avatar: "/placeholder.svg",
    role: "OTHER",
    task: "S2",
    xp: 5670,
    rank: 45,
  },
  {
    id: "10",
    name: "Volt Spark",
    username: "sparkvolt",
    avatar: "/placeholder.svg",
    role: "SUPER_ADMIN",
    task: "S1",
    xp: 16890,
    rank: 3,
  },
  {
    id: "11",
    name: "Nova Blast",
    username: "blastcode",
    avatar: "/placeholder.svg",
    role: "OTHER",
    task: "S2",
    xp: 7890,
    rank: 25,
  },
  {
    id: "12",
    name: "Pixel Perfect",
    username: "perf_pixel",
    avatar: "/placeholder.svg",
    role: "ADMIN",
    task: "S4",
    xp: 10450,
    rank: 14,
  },
  {
    id: "13",
    name: "Data Stream",
    username: "stream_data",
    avatar: "/placeholder.svg",
    role: "OTHER",
    task: "S2",
    xp: 6540,
    rank: 38,
  },
  {
    id: "14",
    name: "Crypto Knight",
    username: "knight_crypto",
    avatar: "/placeholder.svg",
    role: "ADMIN",
    task: "S3",
    xp: 13670,
    rank: 7,
  },
  {
    id: "15",
    name: "Binary Star",
    username: "starbin",
    avatar: "/placeholder.svg",
    role: "OTHER",
    task: "S2",
    xp: 5430,
    rank: 52,
  },
]

// Simulating an API endpoint
export async function fetchUsers(): Promise<{ data: User[] }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return { data: usersData }
}

// Get role counts
export function getRoleCounts() {
  const counts = {
    SUPER_ADMIN: 0,
    ADMIN: 0,
    OTHER: 0,
  }

  usersData.forEach((user) => {
    counts[user.role]++
  })

  return counts
}

