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

// route called when user logs in
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
      `https://dev-streak-server-772acc1b2e9a.herokuapp.com/api/auth/login/email`,
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
      setErrorMessage(responseData.message || "Login failed");
      setIsAlertOpen(true);
    }

    // console.log("responseToken", responseData.data?.token);

    // Store auth token
    if (responseData.data?.token) {
      console.log("token", responseData.data.token);
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
    console.log(data);
    if (!data.success) {
      setErrorMessage(data.message || "Update failed");
      setIsAlertOpen(true);
    }

    setIsSuccess(true);
  } catch (error: any) {
    setErrorMessage(error.message || "An error occurred. Please try again.");
    setIsAlertOpen(true);
  }
};

// route called when user wants to delete account
export const handleDeleteAccount = async (
  setErrorMessage: (message: string) => void,
  setIsAlertOpen: (isAlertOpen: boolean) => void,
  setIsSuccess: (isSuccess: boolean) => void
) => {
 {
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
      setErrorMessage(error.message);
      setIsAlertOpen(true);
    }
  }
};