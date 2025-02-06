import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { FiChevronDown } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
// import { FaDiscord, FaTelegram, FaGithub, FaTwitter } from "react-icons/fa";
import { bolt, s2 } from "@/assets/image";
import { StateSelect } from "../utils/stateSelector";
import { handleSignup } from "../utils/api/auth";

const Signup: React.FC = () => {
  const [full_name, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [state, setState] = useState("");
  const [discord, setDiscord] = useState("");
  const [telegram, setTelegram] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // Validate form inputs and update isClickable
  const validateForm = (
    full_name: string,
    username: string,
    email: string,
    password: string,
    walletAddress: string,
    state: string
  ) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-=/\\|])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\-=/\\|]{8,}$/;
    const usernameRegex = /^[a-z]{3,}$/; // Only lowercase letters, at least 3 characters
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = passwordRegex.test(password);
    const isValidUsername = usernameRegex.test(username);
    const isValidfull_name = full_name.length >= 3;
    const isValidWallet = walletAddress.trim().length > 0;
    const isValidState = state.trim().length > 0;

    setIsClickable(
      isValidfull_name &&
        isValidUsername &&
        isValidEmail &&
        isValidPassword &&
        isValidWallet &&
        isValidState
    );

    if (!isValidPassword) {
      setErrorMessage(
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
      );
    } else {
      setErrorMessage("");
    }
  };

  // Add useEffect to validate form on input changes
  useEffect(() => {
    validateForm(full_name, username, email, password, walletAddress, state);
  }, [full_name, username, email, password, , walletAddress, state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const signupData = {
      full_name,
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
    };

    await handleSignup(signupData, setIsLoading, setErrorMessage, navigate);
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
                value={full_name}
                onChange={(e) => setFullname(e.target.value)}
                className="w-full pl-4 pr-4 py-4 rounded-full border bg-black/80 focus:outline-none focus:ring-2 focus:ring-primary text-center placeholder:text-center"
                placeholder="Full Name"
                required
              />
            </div>
          </motion.div>

          <motion.div variants={inputVariants} className="space-y-2">
            <div className="relative bg-transparent">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-4 pr-4 py-4 rounded-full border bg-black/80 focus:outline-none focus:ring-2 focus:ring-primary text-center placeholder:text-center"
                placeholder="Enter username"
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
          {errorMessage && (
            <div className="text-red-500 text-sm text-center">
              {errorMessage}
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
