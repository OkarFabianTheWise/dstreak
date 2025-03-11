export interface LeaderboardEntry {
  id: string
  full_name: string | null
  username: string
  total_points: number
  rank: number
}

export interface LeaderboardResponse {
  success: boolean
  message: string
  data: {
    data: LeaderboardEntry[]
    page: number
    limit: number
    total: number
    total_pages: number
  }
}

export interface FetchLeaderboardParams {
  page?: number
  limit?: number
  duration: 'daily' | 'weekly' | 'monthly' | 'all-time'
}
