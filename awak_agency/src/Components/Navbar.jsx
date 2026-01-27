import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Zap, ArrowRight, Search, Globe, ChevronDown, Command } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Scroll Progress Bar Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Agency', href: '#agency' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* --- Reading Progress Bar --- */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-indigo-500 origin-left z-[110]" style={{ scaleX }} />

      <nav className="fixed top-0 left-0 w-full z-[100] flex justify-center p-4 sm:p-6 pointer-events-none">
        <motion.div
          layout
          className={`
            flex items-center justify-between pointer-events-auto transition-all duration-500
            ${scrolled 
              ? 'w-full max-w-[850px] bg-[#0a0a0c]/70 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)]' 
              : 'w-full max-w-7xl bg-transparent px-2 py-4 border-b border-white/5'
            }
          `}
        >
          {/* --- Left: Logo --- */}
          <motion.div layout className="flex items-center gap-2 cursor-pointer group">
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg group-hover:rotate-[360deg] transition-transform duration-700">
              <Zap size={20} className="text-white fill-current" />
            </div>
            <span className="text-white font-black tracking-tighter text-2xl italic">AWAKE.</span>
          </motion.div>

          {/* --- Center: Desktop Links (Windows Mode) --- */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-white px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-indigo-500 transition-all group-hover:w-1/2 group-hover:left-1/4"></span>
              </motion.a>
            ))}
          </div>

          {/* --- Right: Multi-Features --- */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Search Icon */}
            <button 
              onClick={() => setShowSearch(true)}
              className="p-2 text-gray-400 hover:text-indigo-400 transition-colors hidden sm:block"
            >
              <Search size={18} />
            </button>

            {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-1 text-gray-400 hover:text-white cursor-pointer group">
              <Globe size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">EN</span>
              <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />
            </div>

            {/* Premium CTA */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-500 hover:text-white transition-all"
            >
              Let's Talk <ArrowRight size={14} />
            </motion.button>

            {/* Hamburger (Mobile Only) */}
            <button 
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 text-white bg-white/5 rounded-lg border border-white/10"
            >
              <Menu size={24} />
            </button>
          </div>
        </motion.div>
      </nav>

      {/* --- Search Modal Overlay --- */}
      <AnimatePresence>
        {showSearch && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0a0a0c]/95 z-[200] flex items-center justify-center p-6 backdrop-blur-md"
            onClick={() => setShowSearch(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              className="w-full max-w-2xl bg-[#16161a] border border-white/10 p-8 rounded-3xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <Search className="text-indigo-500" />
                <input type="text" placeholder="Search projects..." className="bg-transparent border-none outline-none text-white text-xl w-full" autoFocus />
                <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded text-[10px] text-gray-500">
                  <Command size={12} /> K
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Branding', 'UI/UX', 'React', 'Motion'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-400 hover:bg-indigo-500 hover:text-white cursor-pointer">#{tag}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Mobile Menu (Side Drawer) --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]" />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-xs bg-[#0a0a0c] z-[160] p-10 border-l border-white/10"
            >
              <div className="flex justify-between items-center mb-16">
                <Zap className="text-indigo-500" />
                <button onClick={() => setIsOpen(false)} className="p-2 text-white"><X size={32} /></button>
              </div>
              <div className="flex flex-col gap-8">
                {links.map((link, i) => (
                  <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-4xl font-black text-white hover:text-indigo-500 uppercase italic transition-colors">
                    {link.name}
                  </a>
                ))}
                <button className="mt-10 bg-indigo-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest">Start A Project</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;