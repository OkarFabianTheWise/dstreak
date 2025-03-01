import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthStore } from "@/utils/api/auth";
// import { endpoint } from "@/utils/api/auth"; // Fix import path

const GoogleCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleGoogleCallback = async () => {
      // Get all required parameters from the URL
      const code = searchParams.get("code");
      const scope = searchParams.get("scope");
      const authuser = searchParams.get("authuser");
      const prompt = searchParams.get("prompt");

      if (!code) {
        setError("No authorization code received");
        return;
      }

      try {
        const response = await fetch(
          `/api/auth/google/callback?code=${code}${
            scope ? `&scope=${scope}` : ""
          }${authuser ? `&authuser=${authuser}` : ""}${
            prompt ? `&prompt=${prompt}` : ""
          }`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            // mode: "cors" is not needed when using a proxy
          }
        );

        const data = await response.json();
        console.log("Google callback data:", data);

        if (data.success) {
          // Store the token
          localStorage.setItem("accessToken", data.data.token);
          localStorage.setItem("userId", data.data.user.id);

          // Update auth state
          useAuthStore.getState().setLoggedIn(true);
          useAuthStore.getState().login({
            id: data.data.user.id,
            name: data.data.user.full_name,
            email: data.data.user.email,
            profileImage: data.data.user.profile_image,
          });

          // Redirect to home or previous page
          navigate("/");
        } else {
          setError(data.message || "Failed to authenticate with Google");
        }
      } catch (err) {
        console.error("Google callback error:", err);
        setError("Failed to process Google authentication");
      }
    };

    handleGoogleCallback();
  }, [searchParams, navigate]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="bg-[#151515] p-6 rounded-lg shadow-xl">
          <h2 className="text-xl text-red-500 mb-4">Authentication Error</h2>
          <p className="text-gray-300">{error}</p>
          <button
            onClick={() => navigate("/login")}
            className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80"
          >
            Return to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-[#151515] p-6 rounded-lg shadow-xl">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
        <p className="text-white mt-4">Authenticating with Google...</p>
      </div>
    </div>
  );
};

export default GoogleCallback;
