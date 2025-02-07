import { NavigateFunction } from 'react-router-dom';
// const endpoint = import.meta.env.VITE_API_ENDPOINT as string;
const endpoint = 'https://dev-streak-server-772acc1b2e9a.herokuapp.com/api';

interface SignupData {
  full_name: string;
  username: string;
  email: string;
  password: string;
  walletAddress: string;
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
      `${endpoint}/api/auth/register`,
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
      localStorage.removeItem("accessToken");
      localStorage.setItem("accessToken", data.data.token);
    }

    navigate("/leaderboard");
    return true;
  } catch (error: any) {
    console.error(error);
    setErrorMessage(error.message || "An error occurred. Please try again.");
    return false;
  } finally {
    setIsLoading(false);
  }
};

export const handleLogin = async (
  email: string,
  password: string,
  setIsLoading: (isLoading: boolean) => void,
  setErrorMessage: (message: string) => void,
  setIsAlertOpen: (isAlertOpen: boolean) => void,
  navigate: NavigateFunction
) => {
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

    const responseData: AuthResponse = await response.json();

    if (!responseData.success) {
      throw new Error(responseData.message || "Login failed");
    }

    // console.log("responseToken", responseData.data?.token);

    // Store auth token
    if (responseData.data?.token) {
      localStorage.removeItem("accessToken");
      localStorage.setItem("accessToken", responseData.data.token);
    }

    navigate("/leaderboard");
  } catch (error: any) {
    setErrorMessage(error.message || "An error occurred. Please try again.");
    setIsAlertOpen(true);
  } finally {
    setIsLoading(false);
  }
};