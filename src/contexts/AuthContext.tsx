'use client'

import { useToast } from '@/hooks/use-toast'
import { ReactChildrenProps, UserProfile } from '@/interfaces'
import { AuthContextProps } from '@/interfaces/context.interface'
import { authRequests } from '@/utils/api/auth.request'
import {
  COOKIE_TOKEN_KEY,
  COOKIE_USER_DATA_KEY,
} from '@/utils/constants/app.constant'
import CookiesService from '@/utils/cookie.util'
import { Suspense, createContext, useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

const initialAuthState: AuthContextProps = {
  isLoggedIn: false,
  user: null,
  login: () => null,
  logout: () => null,
  setUser: (user: any) => null,
}

//? declaration of auth context
export const AuthContext = createContext<AuthContextProps>(initialAuthState)

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthContextContainer = ({ children }: ReactChildrenProps) => {
  const { toast } = useToast()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const pathname = useLocation().pathname

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!CookiesService.getter(COOKIE_TOKEN_KEY) || !!searchParams.get('token')
  ) //? isLoggedIn state

  const [user, setUser] = useState<UserProfile | null>(
    CookiesService.getter(COOKIE_USER_DATA_KEY)
  ) //? user state

  //? function to log a user out
  const logout = () => {
    CookiesService.remover(COOKIE_TOKEN_KEY)
    CookiesService.remover(COOKIE_USER_DATA_KEY)
    setIsLoggedIn(false)
    setUser(null)
    navigate('/login', { replace: true })
  }

  // ? function to set user to cookie and state
  const handleSetUser = (passedUser: any) => {
    const newUser = { ...user, ...passedUser }
    CookiesService.setter(COOKIE_USER_DATA_KEY, newUser)
    setUser(newUser)
  }

  //? function to log a user in
  const login = (userData: UserProfile) => {
    setIsLoggedIn(true)
    handleSetUser(userData)
  }

  const fetchProfile = async () => {
    const bearerToken: string = CookiesService.getter(COOKIE_TOKEN_KEY) || ''
    if (!bearerToken) return

    const { data, message, success } = await authRequests.profile()
    if (success) {
      handleSetUser(data)
    } else {
      if (
        message === 'Missing or malformed JWT' ||
        message === 'signature is invalid' ||
        message === 'invalid token provided' ||
        message === 'invalid or expired session'
      ) {
        toast({
          title: 'Uh oh! Session expired.',
          description: 'There was a problem with your request.',
        })
      } else {
        toast({
          title: 'Error',
          description: message || 'Error Occurred',
        })
      }
    }
  }

  useEffect(() => {
    const excludePath = ['/login', '/signup', '/home', '/auth/google/callback']
    const noGuestPath = ['/login', '/signup', '/auth/google/callback']
    if (!excludePath.includes(pathname)) {
      if (!isLoggedIn) navigate(`/login?callback=${pathname}`)
    }

    if (noGuestPath.includes(pathname) && isLoggedIn) {
      navigate('/dashboard')
    }
  }, [pathname])

  useEffect(() => {
    fetchProfile()
  }, [])

  //? declaring value that will be passed down the app through the AuthContext's provider.
  const authContextValue: AuthContextProps = {
    isLoggedIn,
    user,
    login,
    logout,
    setUser: handleSetUser,
  }

  return (
    <Suspense>
      <AuthContext.Provider value={authContextValue}>
        {children}
      </AuthContext.Provider>
    </Suspense>
  )
}
