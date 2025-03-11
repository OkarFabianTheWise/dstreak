export interface SignupData {
  full_name: string
  username: string
  email: string
  password: string
  wallet_address: string
  state: string
  socials: {
    discord: string
    telegram: string
    github: string
    twitter: string
  }
  skills: string[]
}

// Types for auth response
export interface AuthResponse {
  success: boolean
  message?: string
  data?: {
    user?: any
    token?: string
  }
}

export interface User {
  id: string
  name: string
  email: string
  profileImage?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
  isLoggedIn: boolean
  setLoggedIn: (loggedIn: boolean) => void
}

export interface Role {
  id: string
  user_role: string
  user_id: string
  can_approve_tasks: boolean
  can_mutate_role: boolean
  created_at: string
  updated_at: string
}

export interface UserProfile {
  id: string
  username: string
  full_name: string
  email: string
  chapter: string
  discord: string
  telegram: string
  github: string
  twitter: string
  wallet_address: string
  skills: string[]
  created_at: string
  updated_at: string
  role: Role
  // xps: number;
  // total_tasks: number;
}

export interface UserState {
  userProfile: UserProfile | null
  loading: boolean
  error: string | null
  fetchUserProfile: () => Promise<void>
}
