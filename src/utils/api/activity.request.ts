import { apiResponse, httpRequest } from '@/utils/http.util'

interface Activity {
  id: string
  username: string
  avatar?: string
  action: string
  timestamp: string
}

export const activityRequests = {
  getActivities: async (setLoading?: (loading: boolean) => void) => {
    try {
      const res = await httpRequest(setLoading).get('/activities')
      return apiResponse(true, 'Activities fetched successfully.', res.data?.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  }
}