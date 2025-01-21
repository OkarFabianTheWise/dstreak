import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { bolt, s2 } from "@/assets/image";

const SignupSuccess: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <img src={bolt} className="absolute bottom-40 left-24 w-[100px] opacity-40"/>
      <img src={s2} className="absolute z-[0]" alt="" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full mx-4 p-8 z-[1] rounded-2xl bg-black/80 border text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <img src={bolt} className="text-green-500 w-20 h-20" />
        </motion.div>
        
        <h1 className="text-2xl font-bold font-press-start mb-4 text-accent">You've succesfully joined the waiting list</h1>
        <div className="space-y-4">
          {/* <Link
            to="/login"
            className="block w-full py-3 px-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200"
          >
            Login to Your Account
          </Link> */}
          
          <Link
            to="/"
            className="block w-full py-3 px-4 border border-green-500 text-green-500 rounded-full hover:bg-green-500/10 transition-colors duration-200"
          >
            Go to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupSuccess;
