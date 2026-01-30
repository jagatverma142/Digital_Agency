import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Lock, Eye, EyeOff, Loader2, AlertCircle, Github, Chrome } from 'lucide-react';
import { div } from 'framer-motion/client';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (formData.email !== 'user@example.com') {
        setError('Invalid credentials. Try user@example.com');
      } else {
        console.log('Login successful');
      }
    }, 2000);
  };

  return (
    <div className=" py-25">

      
    <div className="min-h-screen flex items-center justify-center bg-gray-950 py-25 px-4 relative overflow-hidden">
      
      {/* --- Dynamic Animated Background --- */}
      <div className="absolute py-100 inset-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-md w-full bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] shadow-2xl relative z-10 overflow-hidden"
      >
        {/* Shine effect on Card Header */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

        {/* Header Section */}
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-gray-300 tracking-tight drop-shadow-lg"
          >
            Welcome Back
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-gray-400 text-sm"
          >
            Enter your details to access your workspace.
          </motion.p>
        </div>

        {/* Form Section */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                className="flex items-center gap-2 text-red-300 bg-red-500/10 border border-red-500/20 p-3 rounded-xl text-sm backdrop-blur-md"
              >
                <AlertCircle size={16} />
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-4">
            {/* Email Field */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full pl-12 pr-4 py-4 bg-gray-900/40 border border-gray-700/50 text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 focus:bg-gray-900/60 transition-all duration-300 hover:border-gray-600"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password Field */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="block w-full pl-12 pr-12 py-4 bg-gray-900/40 border border-gray-700/50 text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 focus:bg-gray-900/60 transition-all duration-300 hover:border-gray-600"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center cursor-pointer group">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded bg-gray-700/50 cursor-pointer"
              />
              <span className="ml-2 text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
            </label>
            <a href="#" className="font-medium text-purple-400 hover:text-purple-300 transition-colors hover:underline decoration-purple-400/30 underline-offset-4">
              Forgot password?
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="group relative w-full flex justify-center items-center py-4 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-gray-900 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/30 overflow-hidden"
          >
            {/* Shimmer Effect */}
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            
            {isLoading ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              <>
                LOGIN
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </motion.button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700/50"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#13141c] text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <motion.button
              whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.1)" }}
              type="button"
              className="flex items-center justify-center py-3 px-4 border border-gray-700 rounded-xl bg-gray-800/30 text-white transition-all hover:border-gray-500"
            >
              <Chrome className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Google</span>
            </motion.button>
            <motion.button
              whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.1)" }}
              type="button"
              className="flex items-center justify-center py-3 px-4 border border-gray-700 rounded-xl bg-gray-800/30 text-white transition-all hover:border-gray-500"
            >
              <Github className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">GitHub</span>
            </motion.button>
          </div>

        </form>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-white hover:text-purple-400 transition-colors">
              Join Awake Now
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Tailwind Custom Animation Style (Add this to global css or tailwind config if needed, otherwise it works via style tag below) */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(0%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
    </div>
  );
};

export default Login;