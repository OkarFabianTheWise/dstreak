import React, { createContext, useContext, useState, useCallback } from "react";
import { userRequests } from "@/utils/api/user.request";

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

interface UserContextType {
  userProfile: UserProfile | null;
  loading: boolean;
  error: string | null;
  fetchUserProfile: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUserProfile = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { success, message, data } = await userRequests.getProfile();

      if (!success) {
        throw new Error(message);
      }

      setUserProfile(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch profile");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ userProfile, loading, error, fetchUserProfile }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
