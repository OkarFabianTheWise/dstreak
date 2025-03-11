import { useAuth } from '@/contexts/AuthContext'
import { authRequests } from '@/utils/api/auth.request'
import { COOKIE_TOKEN_KEY } from '@/utils/constants/app.constant'
import CookiesService from '@/utils/cookie.util'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const GoogleCallback = () => {
  const authContext = useAuth()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleGoogleCallback = async () => {
      // Get all required parameters from the URL
      const code = searchParams.get('code') || ''
      const scope = searchParams.get('scope') || ''
      const authuser = searchParams.get('authuser') || '0'
      const prompt = searchParams.get('prompt') || 'consent'

      if (!code) {
        setError('No authorization code received')
        return
      }

      const { message, success, data } = await authRequests.oauthCallback({
        code,
        scope,
        authuser,
        prompt,
      })

      if (!success) return setError('Failed to process Google authentication')

      await CookiesService.setter(COOKIE_TOKEN_KEY, data?.token || '')
      authContext.login(data?.user)

      navigate('/')
    }

    handleGoogleCallback()
  }, [searchParams, navigate])

  if (error) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-black text-white'>
        <div className='bg-[#151515] p-6 rounded-lg shadow-xl'>
          <h2 className='text-xl text-red-500 mb-4'>Authentication Error</h2>
          <p className='text-gray-300'>{error}</p>
          <button
            onClick={() => navigate('/login')}
            className='mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80'
          >
            Return to Login
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-black'>
      <div className='bg-[#151515] p-6 rounded-lg shadow-xl'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto'></div>
        <p className='text-white mt-4'>Authenticating with Google...</p>
      </div>
    </div>
  )
}

export default GoogleCallback
