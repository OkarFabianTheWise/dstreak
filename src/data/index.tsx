import type { Member, User } from '@/types/superadminboard'

// Nigerian states array
export const nigerianStates = [
  'Abia',
  'Adamawa',
  'Akwa Ibom',
  'Anambra',
  'Bauchi',
  'Bayelsa',
  'Benue',
  'Borno',
  'Cross River',
  'Delta',
  'Ebonyi',
  'Edo',
  'Ekiti',
  'Enugu',
  'FCT - Abuja',
  'Gombe',
  'Imo',
  'Jigawa',
  'Kaduna',
  'Kano',
  'Katsina',
  'Kebbi',
  'Kogi',
  'Kwara',
  'Lagos',
  'Nasarawa',
  'Niger',
  'Ogun',
  'Ondo',
  'Osun',
  'Oyo',
  'Plateau',
  'Rivers',
  'Sokoto',
  'Taraba',
  'Yobe',
  'Zamfara',
]

// Users data
export const usersData: User[] = [
  {
    id: '1',
    name: 'Simon Peter',
    username: 'simpet',
    avatar: '/placeholder.svg',
    role: 'OTHER',
    task: 'S2',
    xp: 8230,
    rank: 21,
    state: 'Lagos',
  },
  // ... (rest of the users data)
]

// Members data (derived from users data but with different structure)
export const membersData: Member[] = usersData.map((user) => ({
  id: user.id,
  name: user.name,
  username: user.username,
  avatar: user.avatar,
  state: user.state,
  rank: user.rank,
  isAssigned: false,
}))

// Utility functions
export async function fetchUsers(): Promise<{ data: User[] }> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return { data: usersData }
}

export async function fetchMembers(): Promise<{ data: Member[] }> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return { data: membersData }
}

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

export function getUsersByState(state: string) {
  if (state === 'All') return usersData
  return usersData.filter((user) => user.state === state)
}

export function getMembersByState(state: string) {
  if (state === 'All') return membersData
  return membersData.filter((member) => member.state === state)
}

export function getActiveStates() {
  const states = new Set(usersData.map((user) => user.state))
  return ['All', ...Array.from(states)].sort()
}

// Task-related utility functions
export function assignTask(memberId: string) {
  const memberIndex = membersData.findIndex((m) => m.id === memberId)
  if (memberIndex !== -1) {
    membersData[memberIndex].isAssigned = true
  }
}

export function releaseTask(memberId: string) {
  const memberIndex = membersData.findIndex((m) => m.id === memberId)
  if (memberIndex !== -1) {
    membersData[memberIndex].isAssigned = false
  }
}
