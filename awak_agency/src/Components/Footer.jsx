import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Twitter, Instagram, 
  Mail, Phone, MapPin, ArrowUpRight, 
  Zap, ShieldCheck, Globe, Sparkles 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Squad', href: '/team' },
      { name: 'Careers', href: '#' },
      { name: 'News', href: '#' }
    ],
    Services: [
      { name: 'UI/UX Design', href: '#' },
      { name: 'Development', href: '#' },
      { name: 'AI Research', href: '#' },
      { name: 'Marketing', href: '#' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Twitter size={18} />, href: '#', color: 'hover:text-sky-400' },
    { icon: <Linkedin size={18} />, href: '#', color: 'hover:text-blue-600' },
    { icon: <Instagram size={18} />, href: '#', color: 'hover:text-pink-500' },
    { icon: <Github size={18} />, href: '#', color: 'hover:text-slate-900' }
  ];

  return (
    <footer className="relative bg-white pt-24 pb-12 overflow-hidden border-t border-slate-100">
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-50/50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* --- 1. BRAND SECTION (4 Cols) --- */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="p-2 bg-slate-900 rounded-xl group-hover:bg-blue-600 transition-colors duration-500">
                <Zap className="text-white fill-white" size={20} />
              </div>
              <span className="text-xl font-black uppercase tracking-tighter text-slate-900">
                Awake<span className="text-blue-600">.</span>
              </span>
            </motion.div>
            
            <p className="text-slate-500 font-medium leading-relaxed max-w-sm">
              Hum digital future ke architects hain. Global scale par high-performance products design aur deploy karte hain.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  className={`p-3 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* --- 2. DYNAMIC LINKS (6 Cols) --- */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-12">
            {Object.entries(footerLinks).map(([category, links], i) => (
              <div key={i} className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                  {category}
                </h4>
                <ul className="space-y-4">
                  {links.map((link, j) => (
                    <li key={j}>
                      <a 
                        href={link.href} 
                        className="text-slate-600 font-bold text-sm hover:text-blue-600 hover:translate-x-1 transition-all inline-flex items-center gap-1 group"
                      >
                        {link.name}
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* --- 3. NEWSLETTER/CONTACT (2 Cols) --- */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              Contact
            </h4>
            <div className="space-y-4">
              <a href="mailto:hello@awake.agency" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                <Mail size={16} />
                <span className="text-xs font-bold">hello@awake.agency</span>
              </a>
              <div className="flex items-center gap-3 text-slate-600">
                <MapPin size={16} />
                <span className="text-xs font-bold">Mumbai / Remote</span>
              </div>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-3xl bg-blue-50 border border-blue-100 group cursor-pointer"
            >
              <p className="text-[10px] font-black uppercase text-blue-600 mb-1">Status</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="text-xs font-bold text-slate-900">Systems Operational</p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <span className="flex items-center gap-2 italic font-serif lowercase font-light text-slate-900 text-lg">
              the awake collective.
            </span>
            <span>© {currentYear}</span>
          </div>

          <div className="flex gap-8">
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck size={14} />
              <span className="text-[9px] font-bold uppercase tracking-widest">Enterprise Grade</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Globe size={14} />
              <span className="text-[9px] font-bold uppercase tracking-widest">Global Sync</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;