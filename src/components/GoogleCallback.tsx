import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // const handleGoogleCallback = async () => {
    //   const urlParams = new URLSearchParams(window.location.search);
    //   const code = urlParams.get("code");

    //   console.log("params", urlParams);
    //   //dev-streak-server-772acc1b2e9a.herokuapp.com/api
    //   https: if (code) {
    //     try {
    //       const response = await fetch(
    //         `https://dev-streak-server-772acc1b2e9a.herokuapp.com/api/auth/google/success`,
    //         {
    //           method: "POST",
    //           credentials: "include",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //           body: JSON.stringify({ code }),
    //         }
    //       );

    //       // if (!response.ok) {
    //       //   throw new Error("Authentication failed");
    //       // }

    //       const data = await response.json();
    //       console.log(response);

    //       if (data.token) {
    //         localStorage.setItem("token", data.token);
    //       }

    //       // Navigate to the desired page after successful login
    //       navigate("/");
    //     } catch (error) {
    //       console.error("Authentication error:", error);
    //       navigate("/login?error=authentication_failed");
    //     }
    //   } else {
    //     navigate("/login?error=no_code");
    //   }
    // };

    const handleGoogleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      const scope = urlParams.get("scope");
      const authuser = urlParams.get("authuser");
      const prompt = urlParams.get("prompt");

      console.log("authuser", authuser);
      console.log("prompt", prompt);

      if (code) {
        try {
          const response = await fetch(
            `https://dev-streak-server-772acc1b2e9a.herokuapp.com/api/auth/google/callback?code=${encodeURIComponent(
              code
            )}&scope=${encodeURIComponent(
              scope || ""
            )}&authuser=${encodeURIComponent(
              authuser || ""
            )}&prompt=${encodeURIComponent(prompt || "")}`,
            {
              method: "GET",
              credentials: "include",
            }
          );

          // if (!response.ok) {
          //   throw new Error("Authentication failed");
          // }

          const data = await response.json();
          console.log(response);

          if (data.token) {
            localStorage.setItem("token", data.token);
          }

          // Navigate to the desired page after successful login
          navigate("/");
        } catch (error) {
          console.error("Authentication error:", error);
          navigate("/login?error=authentication_failed");
        }
      } else {
        navigate("/login?error=no_code");
      }
    };

    handleGoogleCallback();
  }, [navigate]);

  // Show a loading state while processing
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Completing sign in...</p>
      </div>
    </div>
  );
};

export default GoogleCallback;
