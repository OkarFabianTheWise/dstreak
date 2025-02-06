import { NavigateFunction } from 'react-router-dom';

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
      "https://dev-streak-server-772acc1b2e9a.herokuapp.com/api/auth/register",
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