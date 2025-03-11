import { UserProfile } from './user.interface'

export interface AuthContextProps {
  isLoggedIn: boolean
  user: UserProfile | null
  login: (userData: UserProfile) => void
  logout: () => void
  setUser: (user: UserProfile) => void
  // ip_info: IpInfoContextInterface
}
