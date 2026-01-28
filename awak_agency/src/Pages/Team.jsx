import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue } from 'framer-motion';
import { 
  Linkedin, Twitter, Sparkles, 
  Users2, ShieldCheck, Heart, Zap, Coffee, ArrowUpRight, Plus
} from 'lucide-react';

// --- ANIMATED TEXT REVEAL ---
const RevealText = ({ text, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className={`relative inline-block overflow-hidden ${className}`}>
      <motion.span
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </span>
  );
};

// --- MAGNETIC TEAM CARD ---
const TeamCard = ({ member, idx }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative w-full perspective-1000"
    >
      <div className="relative aspect-[4/5] sm:aspect-[3/4.5] overflow-hidden rounded-[2.5rem] bg-slate-100 border border-slate-100 shadow-xl group-hover:shadow-blue-500/10 transition-shadow duration-500">
        <motion.img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />
        
        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 sm:p-8">
          <div className="flex gap-3 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <motion.div whileHover={{ scale: 1.2 }} className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white cursor-pointer hover:bg-white/40"><Linkedin size={18} /></motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white cursor-pointer hover:bg-white/40"><Twitter size={18} /></motion.div>
          </div>
          <p className="text-white/80 text-xs sm:text-sm line-clamp-3 leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
            {member.bio}
          </p>
        </div>
      </div>

      {/* Floating Info */}
      <div className="mt-6 px-2 group-hover:translate-x-2 transition-transform duration-500">
        <RevealText text={member.name} className="text-xl sm:text-2xl font-black text-slate-900" />
        <div className="flex items-center gap-2 mt-1">
          <motion.span 
            initial={{ width: 0 }} 
            whileInView={{ width: 16 }} 
            className="h-[2px] bg-blue-600" 
          />
          <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest">{member.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  const teamMembers = [
    { name: "Arjun Vardhan", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800", bio: "15+ years of experience in scaling silicon valley startups." },
    { name: "Sarah Jenkins", role: "CTO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800", bio: "Ex-Google architect, specialist in distributed systems." },
    { name: "Rohan Mehra", role: "Head of Design", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800", bio: "Award-winning designer focused on human-centric interfaces." },
    { name: "Ananya Rao", role: "AI Researcher", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800", bio: "PhD in Neural Networks, leading custom LLM research." }
  ];

  return (
    <div ref={containerRef} className="bg-white overflow-x-hidden selection:bg-blue-600 selection:text-white">
      
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <motion.div 
           animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
           transition={{ duration: 10, repeat: Infinity }}
           className="absolute top-20 left-[10%] w-64 h-64 bg-blue-100/50 rounded-full blur-[100px]" 
        />
        <motion.div 
           animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
           transition={{ duration: 8, repeat: Infinity, delay: 1 }}
           className="absolute bottom-20 right-[10%] w-96 h-96 bg-purple-100/50 rounded-full blur-[120px]" 
        />
      </div>

      {/* --- 1. HERO SECTION --- */}
      <motion.header 
        style={{ y: headerY, opacity: opacityHero, scale: scaleHero }}
        className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-20 pb-12 text-center"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 mb-10 shadow-sm"
        >
          <Sparkles size={14} className="text-blue-600 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">The Awake Collective</span>
        </motion.div>

        <h1 className="text-7xl sm:text-8xl md:text-[12vw] font-black tracking-tighter leading-[0.8] text-slate-900 mb-10 uppercase">
          The <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic font-serif lowercase font-normal">brains.</span>
        </h1>
        
        <p className="max-w-3xl text-slate-500 text-xl sm:text-2xl font-medium leading-relaxed px-4">
          Hum sirf code nahi likhte, hum digital future ke blueprints design karte hain.
        </p>
      </motion.header>

      {/* --- 2. STATS GRID (Staggered Entrance) --- */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 mb-40">
        {[
          { icon: <ShieldCheck />, label: "Secured", val: "100%", color: "bg-blue-50" },
          { icon: <Zap />, label: "Speed", val: "40ms", color: "bg-indigo-50" },
          { icon: <Heart />, label: "Love", val: "99%", color: "bg-rose-50" },
          { icon: <Coffee />, label: "Fuel", val: "∞", color: "bg-orange-50" }
        ].map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            whileHover={{ y: -10, rotate: 2 }}
            className={`${stat.color} p-8 sm:p-12 rounded-[3rem] border border-transparent hover:border-white hover:shadow-2xl transition-all duration-500 cursor-default`}
          >
            <div className="text-slate-900 mb-6 scale-125">{stat.icon}</div>
            <h4 className="text-4xl sm:text-6xl font-black text-slate-900 mb-2 tracking-tighter">{stat.val}</h4>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* --- 3. TEAM GRID --- */}
      <section className="max-w-7xl mx-auto px-6 mb-48">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="space-y-4">
             <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} className="h-1 bg-blue-600" />
             <h2 className="text-6xl sm:text-8xl font-black tracking-tighter text-slate-900 uppercase">Our <br /> Squad.</h2>
          </div>
          <p className="text-slate-400 max-w-xs text-lg font-medium border-l-2 border-slate-100 pl-6 leading-relaxed">
            04 Core Directors leading a global cluster of 150+ talents.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
          {teamMembers.map((member, idx) => (
            <TeamCard key={idx} member={member} idx={idx} />
          ))}
        </div>
      </section>

      {/* --- 4. INFINITE MARQUEE --- */}
      <div className="bg-slate-900 py-20 -rotate-2 scale-110 overflow-hidden mb-56 shadow-2xl relative z-10">
        <motion.div 
          animate={{ x: [0, -1500] }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-24 items-center text-white/90"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-24 items-center">
              <span className="text-5xl font-black uppercase italic tracking-tighter hover:text-blue-500 transition-colors cursor-default">Radical Innovation</span>
              <span className="text-5xl font-light italic font-serif lowercase opacity-30">Scalability</span>
              <span className="text-5xl font-black uppercase italic tracking-tighter hover:text-indigo-500 transition-colors cursor-default">Deep Tech</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- 5. CTA --- */}
      <section className="px-6 mb-32">
        <motion.div 
          whileInView={{ scale: [0.95, 1], rotate: [-1, 0] }}
          className="max-w-7xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[4rem] p-16 sm:p-32 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 opacity-10"
          >
            <Users2 size={400} />
          </motion.div>

          <h2 className="text-6xl sm:text-8xl md:text-[10vw] font-black tracking-tighter leading-none mb-16 uppercase relative z-10">
            Start the <br /> <span className="text-blue-200 italic font-serif lowercase font-light">evolution.</span>
          </h2>
          
          <motion.button 
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 30px rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-blue-600 px-16 py-8 rounded-[2rem] font-black uppercase tracking-widest text-lg transition-all flex items-center gap-4 mx-auto relative z-10"
          >
            Join the squad <ArrowUpRight size={24} />
          </motion.button>
        </motion.div>
      </section>

      <footer className="py-20 text-center border-t border-slate-100 bg-slate-50/30">
        <div className="flex justify-center gap-8 mb-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
           <Zap /> <ShieldCheck /> <Heart /> <Coffee />
        </div>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.8em]">© 2026 The Awake Collective — Digital First.</p>
      </footer>
    </div>
  );
};

export default Team;