import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { FiChevronDown } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
// import { FaDiscord, FaTelegram, FaGithub, FaTwitter } from "react-icons/fa";
import { bolt, s2 } from "@/assets/image";
// import { nigerianStates } from "@/constants/states";
import { StateSelect } from "../utils/stateSelector";

// Mock signup function
const mockSignupUser = async (
  email: string,
  password: string,
  username: string,
  walletAddress: string,
  state: string,
  socials: {
    discord?: string;
    telegram?: string;
    github?: string;
    twitter?: string;
  },
  skills: string[]
) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!email || !password || !username || !walletAddress) {
    throw new Error("Please fill in all required fields");
  }

  if (!state || !skills.length || !socials) {
    console.log("whatebver");
  }

  return { success: true };
};

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [state, setState] = useState("");
  const [discord, setDiscord] = useState("");
  const [telegram, setTelegram] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const navigate = useNavigate();

  // Validate form inputs and update isClickable
  const validateForm = (
    email: string,
    password: string,
    username: string,
    walletAddress: string,
    state: string
  ) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = password.length >= 6;
    const isValidUsername = username.length >= 3;
    const isValidWallet = walletAddress.trim().length > 0;
    const isValidState = state.trim().length > 0;

    setIsClickable(
      isValidEmail &&
        isValidPassword &&
        isValidUsername &&
        isValidWallet &&
        isValidState
    );
  };

  // Add useEffect to validate form on input changes
  useEffect(() => {
    validateForm(email, password, username, walletAddress, state);
  }, [email, password, username, walletAddress, state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // try {
    //   await mockSignupUser(
    //     email,
    //     password,
    //     username,
    //     walletAddress,
    //     state,
    //     {
    //       discord,
    //       telegram,
    //       github,
    //       twitter,
    //     },
    //     selectedSkills
    //   );
    //   navigate("/signup-success");
    // } catch (error) {
    //   console.error("Signup error:", error);
    //   // Handle error appropriately
    // } finally {
    //   setIsLoading(false);
    // }

    try {
      const response = await fetch(
        "https://dev-streak-server-772acc1b2e9a.herokuapp.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
            walletAddress,
            state,
            socials: {
              discord,
              telegram,
              github,
              twitter,
            },
            skills: selectedSkills,
          }),
        }
      );

      const data = await response.json();
      console.log("data:", data);

      if (!data.success) {
        throw new Error(data.message || "Signup failed");
      }

      // Store auth token
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
      }

      navigate("/leaderboard");
    } catch (error: any) {
      console.log(error);
      alert(error.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  // const arrowVariants = {
  //   initial: { rotate: 0 },
  //   animate: { rotate: 180 },
  // };

  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const skills = [
    "Rust",
    "Go",
    "React",
    "Python",
    "NestJS",
    "NextJS",
    "MySQL",
    "NodeJS",
    "JavaScript",
    "MongoDB",
  ];

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  return (
    <div
      className={`min-h-[65vh] relative text-white flex items-center justify-center mt-20 relative px-4 sm:px-0`}
    >
      <img
        src={bolt}
        className="absolute bottom-20 left-24 w-[100px] opacity-40 hidden sm:block"
      />
      <img src={s2} className="absolute z-[0]" alt="" />
      <motion.div
        className="w-full z-[1] max-w-md rounded-xl shadow-lg bg-transparent"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <motion.div variants={inputVariants} className="space-y-2">
            <div className="relative bg-transparent">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-4 pr-4 py-4 rounded-full border bg-black/80 focus:outline-none focus:ring-2 focus:ring-primary text-center placeholder:text-center"
                placeholder="Full Name"
                required
              />
            </div>
          </motion.div>

          <motion.div variants={inputVariants} className="space-y-2">
            <div className="relative bg-transparent">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-4 pr-4 py-4 rounded-full border bg-black/80 focus:outline-none focus:ring-2 focus:ring-primary text-center placeholder:text-center"
                placeholder="Enter your email"
                required
              />
            </div>
          </motion.div>

          <motion.div variants={inputVariants} className="space-y-2">
            <div className="relative bg-transparent">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-4 pr-4 py-4 rounded-full border bg-black/80 focus:outline-none focus:ring-2 focus:ring-primary text-center placeholder:text-center"
                placeholder="Choose a password"
                required
              />
            </div>
          </motion.div>

          <motion.div variants={inputVariants} className="space-y-2">
            <div className="relative bg-transparent">
              <input
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="w-full pl-4 pr-4 py-4 rounded-full border bg-black/80 focus:outline-none focus:ring-2 focus:ring-primary text-center placeholder:text-center"
                placeholder="Solana Wallet Address"
                required
              />
            </div>
          </motion.div>

          {/* <motion.div variants={inputVariants} className="space-y-2">
            <div className="relative bg-transparent">
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setIsDropdownOpen(false)}
                className="w-full pl-4 pr-4 py-4 rounded-full border border-green-500 bg-black/80 focus:outline-none focus:ring-2 focus:ring-primary appearance-none text-center"
                required
              >
                <option value="">Select your state</option>
                {nigerianStates.map((state) => (
                  <option
                    key={state}
                    value={state}
                    className="hover:bg-[#000000] focus:bg-green-300"
                  >
                    {state}
                  </option>
                ))}
              </select>
              <motion.div
                className="absolute right-4 top-[40%] transform -translate-y-1/2 pointer-events-none"
                initial="initial"
                animate={isDropdownOpen ? "animate" : "initial"}
                variants={arrowVariants}
                transition={{ duration: 0.3 }}
              >
                <FiChevronDown color="green" size={20} />
              </motion.div>
            </div>
          </motion.div> */}
          <div className="w-full max-w-md">
            <StateSelect value={state} onChange={setState} required />
          </div>

          <motion.div
            variants={inputVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
          >
            <div className="relative bg-transparent">
              <input
                type="text"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
                className="w-full pl-3 pr-3 sm:pl-4 sm:pr-4 py-3 sm:py-4 rounded-full border bg-black/80 focus:outline-none focus:ring-2 focus:ring-primary text-center placeholder:text-center text-sm sm:text-base"
                placeholder="Discord"
              />
            </div>
            <div className="relative bg-transparent">
              <input
                type="text"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                className="w-full pl-3 pr-3 sm:pl-4 sm:pr-4 py-3 sm:py-4 rounded-full border bg-black/80 focus:outline-none focus:ring-2 focus:ring-primary text-center placeholder:text-center text-sm sm:text-base"
                placeholder="Telegram"
              />
            </div>
            <div className="relative bg-transparent">
              <input
                type="text"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                className="w-full pl-3 pr-3 sm:pl-4 sm:pr-4 py-3 sm:py-4 rounded-full border bg-black/80 focus:outline-none focus:ring-2 focus:ring-primary text-center placeholder:text-center text-sm sm:text-base"
                placeholder="Github"
              />
            </div>
            <div className="relative bg-transparent">
              <input
                type="text"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                className="w-full pl-3 pr-3 sm:pl-4 sm:pr-4 py-3 sm:py-4 rounded-full border bg-black/80 focus:outline-none focus:ring-2 focus:ring-primary text-center placeholder:text-center text-sm sm:text-base"
                placeholder="Twitter"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
            {skills.map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => toggleSkill(skill)}
                className={`py-2 px-4 text-sm rounded-full border transition-colors duration-200 ${
                  selectedSkills.includes(skill)
                    ? "bg-green-500 border-green-500 text-white"
                    : "bg-transparent  text-gray-300 hover:border-green-500"
                } ${skill === "JavaScript" ? "col-span-2" : ""} ${
                  skill === "MongoDB" ? "col-span-2" : ""
                }`}
                title={skill}
              >
                {skill.length > 10 ? `${skill.slice(0, 7)}...` : skill}
              </button>
            ))}
          </div>

          <motion.div variants={inputVariants}>
            <button
              type="submit"
              disabled={!isClickable || isLoading}
              className={`w-full py-3 sm:py-4 rounded-full ${
                isClickable && !isLoading
                  ? "bg-primary hover:bg-primary/90 text-white"
                  : "bg-transparent cursor-not-allowed text-gray-400"
              } border font-semibold transition-colors duration-200 text-sm sm:text-base`}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </motion.div>

          <p className="mt-4 text-center text-primary font-press-start text-sm sm:text-base">
            OR
          </p>
          <motion.button
            onClick={() => {
              window.location.href = import.meta.env.VITE_OAUTH;
            }}
            className="w-full mt-4 py-2.5 sm:py-4 px-3 sm:px-4 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FcGoogle className="text-xl" />
            Sign up with Google
          </motion.button>

          <div className="mt-4">
            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:text-purple-700">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
