import { ApiResponse } from '@/interfaces'
import axios, { AxiosRequestHeaders, type AxiosInstance } from 'axios'
import { COOKIE_TOKEN_KEY } from './constants/app.constant'
import { ENV } from './constants/env.constant'
import CookiesService from './cookie.util'

export const apiResponse = <D = any>(
  success: boolean,
  message: string,
  data?: D
): ApiResponse<D> => {
  return {
    success,
    message,
    data,
  }
}

export const httpRequest = (setLoading?: (loading: boolean) => void) => {
  // Here we set the base URL for all requests made to the api
  const api: AxiosInstance = axios.create({
    baseURL: ENV.VITE_API_URL,
  })

  // We set an interceptor for each request to
  // include Bearer token to the request if user is logged in
  api.interceptors.request.use(async (config) => {
    // set loading true on request if isLoading is not null
    setLoading?.(true)

    const token = CookiesService.getter(COOKIE_TOKEN_KEY) // retrieve the token
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      } as AxiosRequestHeaders
    }

    return config
  })

  // This runs before any response is return
  api.interceptors.response.use(
    (response) => {
      // set loading false if isLoading is not null
      setLoading?.(false)

      return response
    },
    (error) => {
      // set loading false if isLoading is not null
      setLoading?.(false)

      // throw error
      return Promise.reject(error)
    }
  )

  return api
}
