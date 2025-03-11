import { FetchLeaderboardParams } from '@/interfaces'
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