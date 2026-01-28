import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { 
  Github, Linkedin, Twitter, Sparkles, 
  Cpu, Rocket, Palette, Globe, Mail, Users2, ChevronRight,
  ShieldCheck, Heart, Zap, Coffee, Binary, Briefcase,
  Trophy, MapPin, Star, Laptop, ArrowUpRight
} from 'lucide-react';

const Team = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax & Spring Animations
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleHero = useSpring(useTransform(scrollYProgress, [0, 0.2], [1, 0.9]), { stiffness: 100, damping: 30 });

  const teamMembers = [
    { name: "Arjun Vardhan", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800", bio: "15+ years scaling Silicon Valley giants to global success.", expertise: ["Strategy", "VC"] },
    { name: "Sarah Jenkins", role: "CTO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800", bio: "Ex-Google architect, specialist in high-scale cloud infra.", expertise: ["Node.js", "K8s"] },
    { name: "Rohan Mehra", role: "Head of Design", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800", bio: "Award-winning designer focused on emotional interfaces.", expertise: ["UI/UX", "Motion"] },
    { name: "Ananya Rao", role: "Lead AI Researcher", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800", bio: "PhD in Neural Networks, leading our custom LLM research.", expertise: ["Python", "NLP"] },
    { name: "Marcus Thorne", role: "VP Engineering", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800", bio: "Managing distributed engineering clusters across 3 continents.", expertise: ["Agile", "DevOps"] },
    { name: "Elena Rodriguez", role: "Product Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800", bio: "Turning abstract visions into high-impact digital products.", expertise: ["Roadmap", "UX"] },
    { name: "David Chen", role: "Growth Architect", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800", bio: "Helped 50+ clients reach $100M+ ARR through data performance.", expertise: ["Data", "Ads"] },
    { name: "Lila Voss", role: "Head of Branding", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800", bio: "Crafting iconic identities for the noisy digital era.", expertise: ["Story", "Brand"] },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0f172a] pt-24 md:pt-40 pb-20 selection:bg-blue-600 selection:text-white overflow-x-hidden font-sans">
      
      {/* --- PARALLAX BACKGROUND ORBS --- */}
      <motion.div style={{ y: yRange }} className="fixed inset-0 pointer-events-none -z-10 opacity-40">
        <div className="absolute top-[5%] left-[-10%] w-[50vw] h-[50vw] bg-blue-100 rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] bg-indigo-50 rounded-full blur-[140px]" />
      </motion.div>

      {/* --- 1. HERO SECTION --- */}
      <header className="max-w-7xl mx-auto px-6 text-center mb-40">
        <motion.div style={{ scale: scaleHero, opacity: opacityHero }}>
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900 text-white mb-10 shadow-2xl font-bold text-[10px] uppercase tracking-[0.5em]">
            <Sparkles size={14} className="text-blue-400" />
            Join the Awake Vanguard
          </div>
          <h1 className="text-7xl sm:text-9xl md:text-[180px] font-black tracking-[-0.05em] leading-[0.8] mb-12">
            The <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600 italic font-serif lowercase font-light">collective.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-400 max-w-5xl mx-auto leading-relaxed font-medium">
            Building interfaces for the <span className="text-[#0f172a] font-bold border-b-4 border-blue-600">post-AI era</span>. We deliver digital sovereignty through code and design.
          </p>
        </motion.div>
      </header>

      {/* --- 2. TECHNICAL RADAR SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Next.js 15", "PyTorch", "Kubernetes", "Three.js", "Rust", "Solidity", "Tailwind", "Framer"].map((tech, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="px-8 py-12 border border-slate-100 rounded-[3rem] bg-slate-50/50 flex flex-col items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-500 group"
            >
              <Binary size={24} className="mb-4 text-blue-600 group-hover:text-white transition-colors" />
              <span className="font-black uppercase tracking-widest text-[11px]">{tech}</span>
            </motion.div>
          ))}
        </div>
      </section>

     

      {/* --- 4. GLOBAL IMPACT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-56">
        <div className="bg-[#0f172a] text-white rounded-[5rem] p-16 md:p-32 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="grid md:grid-cols-2 gap-20 relative z-10 items-center">
                <div>
                    <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-none">Global <br /> <span className="text-blue-500">Impact.</span></h3>
                    <div className="space-y-10">
                        {[
                            { city: "San Francisco", zone: "Strategy HQ" },
                            { city: "London", zone: "Design Cluster" },
                            { city: "Bangalore", zone: "AI Research" },
                            { city: "Berlin", zone: "Web3 Lab" }
                        ].map((loc, i) => (
                            <div key={i} className="flex items-center gap-6 group">
                                <div className="w-4 h-4 rounded-full bg-blue-600 group-hover:scale-150 transition-transform" />
                                <div>
                                    <h5 className="text-2xl font-black uppercase tracking-tight">{loc.city}</h5>
                                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">{loc.zone}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <Globe size={300} className="text-blue-600/20 absolute -top-20 -right-20 animate-[spin_60s_linear_infinite]" />
                    <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-3xl">
                        <Trophy className="text-blue-500 mb-6" size={48} />
                        <p className="text-3xl font-bold tracking-tight mb-6 italic">"The most forward-thinking agency cluster in the industry."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-slate-800" />
                            <div>
                                <p className="font-black uppercase tracking-widest text-[10px]">Sterling Mark</p>
                                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">VP @ NextGen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- 5. CTA CAREERS --- */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="bg-blue-600 text-white rounded-[4rem] md:rounded-[6rem] p-16 md:p-32 text-center relative overflow-hidden group shadow-2xl shadow-blue-200">
           <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-indigo-900" />
           <h2 className="text-6xl md:text-[150px] font-black uppercase tracking-tighter mb-12 leading-[0.8] relative z-10">
             Build the <br /> <span className="text-blue-100 italic font-serif lowercase font-light">future.</span>
           </h2>
           <div className="flex flex-wrap justify-center gap-6 mb-16 relative z-10">
                {["Senior AI Developer", "Product Designer", "Cloud Architect"].map((job, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-md px-10 py-6 rounded-[2rem] border border-white/20 flex items-center gap-4 group/item cursor-pointer hover:bg-white/20 transition-all">
                        <span className="font-black uppercase tracking-widest text-[10px]">{job}</span>
                        <ArrowUpRight size={16} className="text-blue-200 group-hover/item:translate-x-2 transition-transform" />
                    </div>
                ))}
           </div>
           <button className="bg-white text-blue-600 px-20 py-8 rounded-[2rem] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all transform hover:scale-105 shadow-2xl relative z-10">
             Explore 15+ Openings
           </button>
        </div>
      </section>

      {/* --- 6. FULL FOOTER --- */}
      <footer className="mt-40 py-24 border-t border-slate-100 bg-slate-50/30">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-20">
            <div className="col-span-2">
                <div className="text-3xl font-black tracking-tighter mb-8 italic">AWAKE.</div>
                <p className="text-slate-400 font-medium max-w-sm mb-10">Building digital artifacts that transcend time. Join the collective mind.</p>
                <div className="flex gap-6">
                    <Linkedin size={20} className="text-slate-300 hover:text-blue-600 cursor-pointer transition-colors" />
                    <Twitter size={20} className="text-slate-300 hover:text-blue-600 cursor-pointer transition-colors" />
                </div>
            </div>
            <div>
                <h5 className="font-black uppercase tracking-[0.3em] text-[10px] mb-8 text-slate-300">Company</h5>
                <div className="flex flex-col gap-4 text-sm font-bold">
                    <a href="#" className="hover:text-blue-600 transition-colors">About Us</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">Careers</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
                </div>
            </div>
            <div>
                <h5 className="font-black uppercase tracking-[0.3em] text-[10px] mb-8 text-slate-300">Legal</h5>
                <div className="flex flex-col gap-4 text-sm font-bold">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default Team;