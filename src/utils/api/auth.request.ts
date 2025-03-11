import { SignupData } from '@/interfaces'
import { apiResponse, httpRequest } from '@/utils/http.util'

export const authRequests = {
  oauthCallback: async (
    params: {
      code: string
      scope: string
      authuser: string
      prompt: string
    },
    setLoading?: (loading: boolean) => void
  ) => {
    try {
      const res = await httpRequest(setLoading).get(`/auth/google/callback`, {
        params,
      })

      return apiResponse(true, 'Logged in success.', res.data?.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  },
  login: async (
    body: {
      email: string
      password: string
    },
    setLoading?: (loading: boolean) => void
  ) => {
    try {
      const res = await httpRequest(setLoading).post(`/auth/login/email`, body)

      return apiResponse(true, 'Logged in success.', res.data?.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  },
  signUp: async (body: SignupData, setLoading?: (loading: boolean) => void) => {
    try {
      const res = await httpRequest(setLoading).post(`/auth/register`, body)

      return apiResponse(true, 'Logged in success.', res.data?.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  },
  profile: async (setLoading?: (loading: boolean) => void) => {
    try {
      const res = await httpRequest(setLoading).get(`/auth/profile`)

      return apiResponse(true, 'Profile fetched successfully.', res.data?.data)
    } catch (err: any) {
      return apiResponse(
        false,
        err?.response?.data?.message || err?.message || 'Error occurred.',
        err
      )
    }
  },
}
