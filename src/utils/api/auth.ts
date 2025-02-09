import { NavigateFunction } from 'react-router-dom';
import { create } from 'zustand';

// const endpoint = import.meta.env.VITE_ENDPOINT_URL as string;
const endpoint = 'https://dev-streak-server-772acc1b2e9a.herokuapp.com/api';

interface SignupData {
  full_name: string;
  username: string;
  email: string;
  password: string;
  wallet_address: string;
  state: string;
  socials: {
    discord: string;
    telegram: string;
    github: string;
    twitter: string;
  };
  skills: string[];
}

// Types for auth response
interface AuthResponse {
  success: boolean;
  message?: string;
  data?: {
    user?: any;
    token?: string;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  isLoggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
}

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
  // xps: number;
  // total_tasks: number;
}

export interface UserState {
  userProfile: UserProfile | null;
  loading: boolean;
  error: string | null;
  fetchUserProfile: () => Promise<void>;
}

// route called when user signs up
export const handleSignup = async (
  signupData: SignupData,
  setIsLoading: (isLoading: boolean) => void,
  setErrorMessage: (message: string) => void,
  navigate: NavigateFunction
) => {
  setIsLoading(true);
  setErrorMessage("");

  try {
    const response = await fetch(
      `${endpoint}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      }
    );

    const data = await response.json();

    if (!data.success) {
      if (data.errors && data.errors.length > 0) {
        setErrorMessage(data.errors[0].message);
      } else {
        setErrorMessage(data.message || "Signup failed");
      }
      return false;
    }

    if (data.data?.token) {
      // localStorage.removeItem("accessToken");
      localStorage.setItem("accessToken", data.data.token);
      // console.log(data.data.user.id);
      localStorage.setItem("userId", data.data.user.id); // Add this line
      
    }

    // Set login state using useAuthStore
    useAuthStore.getState().setLoggedIn(true);

    navigate("/");
    return true;
  } catch (error: any) {
    setErrorMessage("Failed to signup. Please try again.");
    return false;
  } finally {
    setIsLoading(false);
  }
};

// route called when user logs in
export const handleLogin = async (
  email: string,
  password: string,
  setIsLoading: (isLoading: boolean) => void,
  setErrorMessage: (message: string) => void,
  setIsAlertOpen: (isAlertOpen: boolean) => void,
  navigate: NavigateFunction
): Promise<boolean> => {
  setIsLoading(true);
  setErrorMessage("");

  try {
    const response = await fetch(
      `${endpoint}/auth/login/email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    // Check response status
    if (!response.ok) {
      const errorResponse = await response.json();
      if(errorResponse.statusCode === 400) {
        setErrorMessage("Wrong password or email. Please try again.");
        setIsAlertOpen(true);
        return false
      }
      

      setErrorMessage("Wrong password or email. Please try again.");
      setIsAlertOpen(true);
      return false;
    }

    const responseData: AuthResponse = await response.json();

    // if (!responseData.success) {
    //   setErrorMessage(responseData.message || "Login failed");
    //   setIsAlertOpen(true);
    //   return false;
    // }

    // Store auth token and update auth state
    if (responseData.data?.token) {
      localStorage.setItem("accessToken", responseData.data.token);
      // console.log(responseData.data.user.id);
      localStorage.setItem("userId", responseData.data.user.id); // Add this line
      
      // Set login state using useAuthStore
      useAuthStore.getState().setLoggedIn(true);
      
      // If user data is available, update the user state
      if (responseData.data.user) {
        useAuthStore.getState().login({
          id: responseData.data.user.id,
          name: responseData.data.user.full_name,
          email: responseData.data.user.email,
          profileImage: responseData.data.user.profile_image
        });
      }
    }

    navigate("/");
    return true;
  } catch (error: any) {
    console.error(error.message);
    setErrorMessage("Failed to login. Please check internet connection.");
    setIsAlertOpen(true);
    return false;
  } finally {
    setIsLoading(false);
  }
};

export const handleProfileUpdate = async (
  _label: string,
  value: string,
  setErrorMessage: (message: string) => void,
  setIsAlertOpen: (isAlertOpen: boolean) => void,
  setIsSuccess: (isSuccess: boolean) => void
) => {
  try {
    // Retrieve the authentication token from wherever it's stored (e.g., localStorage)
    const token = localStorage.getItem("accessToken");

    const response = await fetch(
      `${endpoint}/users`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ _label: value }),
      }
    );

    const data = await response.json();
    if (!data.success) {
      setErrorMessage(data.message || "Update failed");
      setIsAlertOpen(true);
    }

    setIsSuccess(true);
  } catch (error: any) {
    setErrorMessage("Failed to update profile. Please try again.");
    setIsAlertOpen(true);
  }
};

// route called when user wants to delete account
export const handleDeleteAccount = async (
  setErrorMessage: (message: string) => void,
  setIsAlertOpen: (isAlertOpen: boolean) => void,
  setIsSuccess: (isSuccess: boolean) => void
) => {
  try {
    const response = await fetch(
      `${endpoint}/users/delete`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (data.success) {
      setIsSuccess(true);
      setIsAlertOpen(true);
    } else {
      setErrorMessage(data.message || "Failed to delete account.");
      setIsAlertOpen(true);
    }
  } catch (error: any) {
    setErrorMessage("An error occurred while deleting your account.");
    setIsAlertOpen(true);
  }
};

export const useUserStore = create<UserState>((set) => ({
  userProfile: null,
  loading: false,
  error: null,

  // Fetch user profile data from the API using fetch
  fetchUserProfile: async () => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem('accessToken');

      if (!token) throw new Error('No access token found');

      const response = await fetch(`${endpoint}/auth/profile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
    
      if (data.success) {
        set({ userProfile: data.data, loading: false });
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      set({ error: error.message || 'An error occurred', loading: false });
    }
  },
}));

export const initializeAuth = () => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    useAuthStore.getState().setLoggedIn(true);
  } else {
    useAuthStore.getState().setLoggedIn(false);
  }
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false, // Initialize as false
  login: (user: User) => {
    set({ 
      user,
      isAuthenticated: true,
      isLoggedIn: true 
    });
  },
  logout: () => {
    localStorage.removeItem('accessToken'); // Clear token on logout
    set({ 
      user: null,
      isAuthenticated: false,
      isLoggedIn: false
    });
  },
  isLoggedIn: false,
  setLoggedIn: (loggedIn: boolean) => set({ 
    isLoggedIn: loggedIn,
    isAuthenticated: loggedIn // Sync both states
  }),
}));