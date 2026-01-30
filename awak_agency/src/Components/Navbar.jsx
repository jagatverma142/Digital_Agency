import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Services', path: '/Services' },
    { name: 'Work', path: '/Work' },
    { name: 'Team', path: '/Team' },
    { name: 'Pricing', path: '/Pricing' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[100] px-4 sm:px-8 py-6">
      <motion.nav 
        animate={{
          y: isScrolled ? 0 : 0,
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
          borderRadius: isScrolled ? "100px" : "0px",
          padding: isScrolled ? "10px 24px" : "0px 0px",
          border: isScrolled ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(255, 255, 255, 0)"
        }}
        // ADDED: relative and z-50 to ensure the header stays ABOVE the mobile menu overlay
        className="relative z-50 max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 ease-in-out"
      >
        {/* --- Logo --- */}
        <Link to="/" className="relative group flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
          <motion.div 
            whileHover={{ rotate: 180 }}
            className="w-9 h-9 bg-black flex items-center justify-center rounded-xl shadow-xl"
          >
            <Sparkles className="text-white w-5 h-5" />
          </motion.div>
          <span className="text-xl sm:text-2xl font-black tracking-[ -0.05em] text-black">
            AWAKE<span className="text-blue-600 italic">!</span>
          </span>
        </Link>

        {/* --- Floating Desktop Menu --- */}
        <div className="hidden md:flex items-center bg-black/5 rounded-full px-2 py-1 border border-black/5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`relative px-4 lg:px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive ? 'text-white' : 'text-gray-500 hover:text-black'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute inset-0 bg-black rounded-full -z-10 shadow-lg shadow-black/20" 
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* --- Call to Action & Mobile Toggle --- */}
        <div className="flex items-center gap-3">
          <Link to="/login" className="hidden lg:block text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors mr-4">
            Login
          </Link>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden sm:block">
            <Link 
              to="/signup" 
              className="relative overflow-hidden group bg-black text-white px-6 sm:px-8 py-3 rounded-full text-xs font-bold uppercase tracking-[0.1em] flex items-center gap-2 border border-black shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
            >
              <span className="relative z-10">Join Now</span>
              <ArrowUpRight className ="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden w-11 h-11 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-50"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* --- Fullscreen Overlay Mobile Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // FIX: Changed z-index from -1 to 40. Now it sits ON TOP of content but BELOW the nav bar buttons (z-50)
            className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[40] flex flex-col items-center justify-center md:hidden"
          >
            <motion.div 
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-8 p-4 text-center"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-4xl sm:text-5xl font-black text-white/50 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants} className="flex flex-col gap-4 mt-8 w-full">
                <Link 
                    to="/login" 
                    onClick={() => setIsOpen(false)}
                    className="text-white text-lg font-bold py-2"
                >
                    Sign In
                </Link>
                <Link 
                    to="/signup" 
                    onClick={() => setIsOpen(false)}
                    className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm"
                >
                    Join Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;