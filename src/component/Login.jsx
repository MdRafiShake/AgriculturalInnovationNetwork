import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { loginLogUpWithEmailAndPassword } from "../LoginLogic/emalAndPass";
import { googleProvider } from "../LoginLogic/SingInWithProvider/googleProvider";

const Login = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, scale: 0.9, y: -50 },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const [isSignUp, setIsSignUp] = useState(false);
  const [isShowingPassword, setIsShowingPassword] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (!data.email || !data.password) {
      console.log("Email and password are required");
      return;
    }

    try {
      const user = await loginLogUpWithEmailAndPassword(
        data.email,
        data.password,
        isSignUp
      );
      console.log("User authenticated:", user);
    } catch (error) {
      console.error("Authentication error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lime-100 to-lime-300 p-2">
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl grid gap-4 sm:gap-5"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 text-center sm:text-left"
          >
            <motion.img
              src="./public/ain-logo-01.png"
              width={50}
              alt="logo"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 drop-shadow-md">
              {isSignUp ? "Create Account" : "Login to Your Account"}
            </h2>
          </motion.div>

          {/* Form Fields */}
          <AnimatePresence mode="wait">
            {isSignUp && (
              <>
                <motion.input
                  key="username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="input w-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-lime-400 text-gray-700 px-3 py-2 rounded-lg outline-none shadow-sm"
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                />
                <motion.div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                  <p className="text-gray-400 w-full sm:w-20 pl-1 sm:pl-2">I am a</p>
                  <select
                    defaultValue="se"
                    className="select w-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-lime-400 text-gray-500 px-3 py-2 rounded-lg outline-none shadow-sm"
                  >
                    <option value="se" disabled>
                      Select One
                    </option>
                    <option value="farmer">Farmer</option>
                    <option>Officer</option>
                    <option>Consumer</option>
                  </select>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          <motion.input
            type="email"
            name="email"
            placeholder="Email"
            className="input w-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-lime-400 text-gray-700 px-3 py-2 rounded-lg outline-none shadow-sm"
            variants={inputVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Password */}
          <motion.div
            className="relative w-full"
            variants={inputVariants}
            initial="hidden"
            animate="visible"
          >
            <input
              type={isShowingPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-lime-400 text-gray-700 px-3 py-2 rounded-lg outline-none shadow-sm pr-10"
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
              onClick={() => setIsShowingPassword(!isShowingPassword)}
            >
              {isShowingPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </span>
          </motion.div>

          {/* Switch Mode */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-600 text-center text-sm sm:text-base"
          >
            {isSignUp ? "Already have an account?" : "Don’t have an account?"}
            <span
              onClick={() => setIsSignUp(!isSignUp)}
              className="ml-1 sm:ml-2 text-lime-700 font-bold hover:text-gray-900 hover:underline cursor-pointer transition-colors"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </motion.p>

          {/* Buttons */}
          <motion.button
            whileHover={{ scale: 1.08, backgroundColor: "#6B8E23" }}
            whileTap={{ scale: 0.95 }}
            className="btn w-full bg-[#556B2F] border-none text-white font-bold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </motion.button>

          <p className="text-gray-900 text-center text-sm sm:text-base">or,</p>

          {/* Google */}
          <motion.div
            onClick={() => googleProvider()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition cursor-pointer"
          >
            <FcGoogle size={20} />
            Sign in with Google
          </motion.div>
        </motion.div>
      </form>
    </div>
  );
};

export default Login;
