// import { FetchLeaderboardParams, LeaderboardResponse } from '@/interfaces'

// const endpoint = import.meta.env.VITE_API_URL as string

// export const fetchLeaderboard = async (
//   { page = 1, limit = 100, duration = 'weekly' }: FetchLeaderboardParams,
//   setErrorMessage: (message: string) => void
// ): Promise<LeaderboardResponse | any> => {
//   try {
//     const token = localStorage.getItem('accessToken')
//     console.log('token:', token)

//     const response = await fetch(
//       `${endpoint}/leaderboard?page=${page}&limit=${limit}&duration=${duration}`,
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           ...(token && { Authorization: `Bearer ${token}` }),
//         },
//       }
//     )

//     const data: LeaderboardResponse = await response.json()
//     console.log(data)

//     if (!data.success) {
//       setErrorMessage(data.message || 'Failed to fetch leaderboard')
//     }

//     return data
//   } catch (error: any) {
//     setErrorMessage(
//       error.message || 'An error occurred while fetching the leaderboard'
//     )
//   }
// }

import { FetchLeaderboardParams, LeaderboardResponse } from '@/interfaces'
import { apiResponse, httpRequest } from '@/utils/http.util'

export const leaderboardRequests = {
  fetchLeaderboard: async (
    params: FetchLeaderboardParams,
    setLoading?: (loading: boolean) => void
  ) => {
    try {
      const res = await httpRequest(setLoading).get('/leaderboard', {
        params: {
          page: params.page || 1,
          limit: params.limit || 100,
          duration: params.duration || 'weekly'
        }
      })

      return apiResponse(true, 'Leaderboard fetched successfully.', res.data?.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  }
}