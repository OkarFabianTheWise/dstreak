import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { bolt, s2 } from "@/assets/image";

// Mock authentication function
const mockLoginUser = async (email: string, password: string) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  if (!email || !password) {
    return { success: false, message: "Please fill in all fields" };
  }
  
  return { success: true };
};

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const navigate = useNavigate();

  // Validate form inputs and update isClickable
  const validateForm = (email: string, password: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = password.length >= 6;
    setIsClickable(isValidEmail && isValidPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await mockLoginUser(email, password);
      if (!result.success) {
        throw new Error(result.message);
      }

      localStorage.setItem("email", email);
      navigate("/leaderboard");
    } catch (error: any) {
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
        staggerChildren: 0.1
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className={`h-[65vh] relative text-white flex items-center justify-center mt-20 relative px-4 sm:px-0`}>
      <img src={s2} className="absolute z-[0]" alt="" />
      <img src={bolt} className="absolute bottom-20 left-24 w-[100px] opacity-40 hidden sm:block"/>
      <motion.div
        className="w-full z-[1] max-w-md p-4 sm:p-8 rounded-xl shadow-lg bg-transparent border-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <h2 className="text-3xl font-bold mb-6 text-center">Login</h2> */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <motion.div variants={inputVariants} className="space-y-2">
            {/* <label className="block text-sm font-medium">Email</label> */}
            <div className="relative bg-transparent">
              <FiMail color="#8B5CF6" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateForm(e.target.value, password);
                }}
                className="w-full pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border bg-black/80 focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                placeholder="Enter your email"
                required
              />
            </div>
          </motion.div>

          <motion.div variants={inputVariants} className="space-y-2">
            {/* <label className="block text-sm font-medium">Password</label> */}
            <div className="relative">
              <FiLock color="#8B5CF6" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validateForm(email, e.target.value);
                }}
                className="w-full pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border bg-black/80 focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                placeholder="Enter your password"
                required
              />
            </div>
          </motion.div>

          <motion.button
            type="submit"
            className={`${isClickable ? "bg-primary hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" : "bg-black/80 text-gray-600 cursor-not-allowed"} w-full py-2.5 sm:py-3 px-3 sm:px-4 border font-semibold rounded-lg font-medium text-sm sm:text-base`}
            whileHover={{ scale: isClickable ? 1.02 : 1 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading || !isClickable}
          >
            {isLoading ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        <p className="mt-4 text-center text-sm sm:text-base">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary hover:text-heading font-medium">
            Sign up
          </Link>
        </p>

      <p className="mt-4 text-center text-primary font-press-start text-sm sm:text-base">OR</p>
      <motion.button
        onClick={() => {/* TODO: Implement Google sign in */}}
        className="w-full mt-4 py-2.5 sm:py-3 px-3 sm:px-4 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <FcGoogle className="text-xl" />
        Sign in with Google
      </motion.button>
      </motion.div>
    </div>
  );
};

export default Login;