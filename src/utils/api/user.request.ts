import { apiResponse, httpRequest } from '@/utils/http.util';

export const userRequests = {
  getProfile: async (setLoading?: (loading: boolean) => void) => {
    try {
      const res = await httpRequest(setLoading).get('/auth/profile');
      return apiResponse(true, 'Profile fetched successfully.', res.data?.data);
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      );
    }
  },

  updateProfile: async (
    body: {
      _label: string
      value: string
    },
    setLoading?: (loading: boolean) => void
  ) => {
    try {
      const res = await httpRequest(setLoading).patch(`/users`, body)

      return apiResponse(true, 'Logged in success.', res.data?.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  },
  
  deleteProfile: async (setLoading?: (loading: boolean) => void) => {
    try {
      const res = await httpRequest(setLoading).patch(`/users/delete`, body)

      return apiResponse(true, 'Logged in success.', res.data?.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  },
}
