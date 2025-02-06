import { create } from 'zustand';
import axios from 'axios';

export interface Role {
  id: string;
  user_role: string;
  user_id: string;
  can_approve_tasks: boolean;
  can_mutate_role: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserProfile {
  id: string;
  username: string;
  full_name: string;
  email: string;
  chapter: string;
  discord: string;
  telegram: string;
  github: string;
  twitter: string;
  wallet_address: string;
  skills: string[];
  created_at: string;
  updated_at: string;
  role: Role;
}

export interface UserState {
  userProfile: UserProfile | null;
  loading: boolean;
  error: string | null;
  fetchUserProfile: () => Promise<void>;
}

const apiURL = 'https://dev-streak-server-772acc1b2e9a.herokuapp.com/api';

export const useUserStore = create<UserState>((set) => ({
  userProfile: null,
  loading: false,
  error: null,

  // Fetch user profile data from the API
  fetchUserProfile: async () => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) throw new Error('No access token found');

      const response = await axios.get(`${apiURL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        set({ userProfile: response.data.data, loading: false });
      } else {
        throw new Error(response.data.message);
      }
    } catch (error: any) {
      set({ error: error.message || 'An error occurred', loading: false });
    }
  },
}));
