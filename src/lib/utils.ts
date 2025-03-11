import { ENV } from '@/utils/constants/env.constant'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleOauth = () => {
  const url =
    ENV.VITE_API_URL +
    '/auth/google/callback?callback_url=' +
    window.location.origin +
    '/auth/google/callback'

  window.location.href = url
}
