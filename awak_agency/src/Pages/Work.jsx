import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, ExternalLink, Eye, Sparkles, 
  TrendingUp, Users, Zap, Code2, Rocket,
  BrainCircuit, Globe2, ShieldCheck, Cpu
} from 'lucide-react';

const Work = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web App', 'Mobile', 'AI/ML', 'Branding', 'E-commerce'];

  const projects = [
    {
      title: "Nova Dashboard",
      category: "Web App",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      description: "Enterprise-grade analytics suite jo multi-cloud data ko simplify karti hai.",
      tags: ["React", "AWS", "Python"],
      metrics: { growth: "+45%", uptime: "99.9%" },
    },
    {
      title: "Aura Lifestyle",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
      description: "Next-gen shopping platform with virtual try-on and 3D product previews.",
      tags: ["Next.js", "Three.js", "Stripe"],
      metrics: { sales: "2x", conversion: "4.2%" },
    },
    {
      title: "Cortex AI",
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      description: "Generative AI model jo legal documents ko analyze aur summarize karta hai.",
      tags: ["PyTorch", "FastAPI", "OpenAI"],
      metrics: { accuracy: "98%", speed: "0.5s" },
    },
    {
      title: "Zenith Banking",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      description: "Biometric-secured crypto banking solution for global transactions.",
      tags: ["React Native", "Web3", "Solidity"],
      metrics: { security: "Tier-1", users: "50k+" },
    },
    {
      title: "HealthSphere",
      category: "Web App",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      description: "Patient monitoring system for hospitals using IoT device integration.",
      tags: ["Node.js", "Socket.io", "MQTT"],
      metrics: { response: "Real-time", saved: "1k+ hrs" },
    },
    {
      title: "Urban Space",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
      description: "Visual identity design for a sustainable architectural firm.",
      tags: ["Figma", "Branding", "Motion"],
      metrics: { reach: "1.2M", impact: "High" },
    },
    {
      title: "EcoShop Hub",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800",
      description: "Zero-waste lifestyle marketplace with automated subscription engine.",
      tags: ["Shopify", "Tailwind", "Firebase"],
      metrics: { retention: "65%", load: "0.8s" },
    },
    {
      title: "Nexus VR",
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?auto=format&fit=crop&q=80&w=800",
      description: "Immersive VR training platform for industrial safety protocols.",
      tags: ["Unity", "C#", "Oculus SDK"],
      metrics: { safety: "+90%", efficiency: "+40%" },
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-32 pb-20 selection:bg-blue-600 selection:text-white">
      
      {/* --- 1. HERO HEADER --- */}
      <header className="max-w-7xl mx-auto px-6 text-center mb-20 relative">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <div className="flex justify-center items-center gap-2 mb-6 text-blue-600 font-black text-xs tracking-[0.4em] uppercase">
            <Sparkles className="w-4 h-4" /> Best of 2024-2026
          </div>
          <h1 className="text-7xl md:text-[140px] font-black tracking-tighter mb-8 leading-none">
            Selected <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic font-serif lowercase font-light">Artifacts.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Humne top brands ke liye digital products banaye hain jo design-first approach <br className="hidden md:block"/> aur scalability par focus karte hain.
          </p>
        </motion.div>
      </header>

      {/* --- 2. LIVE TRUST MARQUEE (NEW) --- */}
      <div className="py-10 bg-slate-50 border-y border-slate-100 overflow-hidden mb-20">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap items-center text-slate-300"
        >
          {[...Array(5)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-3xl font-black uppercase tracking-tighter flex items-center gap-4">
                <Globe2 className="text-blue-200"/> Global Innovation
              </span>
              <span className="text-3xl font-black uppercase tracking-tighter flex items-center gap-4">
                <ShieldCheck className="text-blue-200"/> Trusted Security
              </span>
              <span className="text-3xl font-black uppercase tracking-tighter flex items-center gap-4">
                <Cpu className="text-blue-200"/> Modern Stack
              </span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* --- 3. FILTER & BENTO GRID --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all
                ${filter === cat ? 'bg-blue-600 text-white shadow-2xl shadow-blue-200' : 'bg-white border border-slate-100 text-slate-400 hover:text-blue-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[3rem] bg-slate-100 mb-8 border border-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                  <img src={project.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                    <button className="bg-white text-blue-600 p-5 rounded-full hover:scale-110 transition-transform shadow-xl"><Eye size={24} /></button>
                    <button className="bg-white text-blue-600 p-5 rounded-full hover:scale-110 transition-transform shadow-xl"><ExternalLink size={24} /></button>
                  </div>
                  <div className="absolute top-8 left-8">
                    <span className="bg-white/95 backdrop-blur px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">{project.category}</span>
                  </div>
                </div>

                <div className="px-4 text-center">
                  <div className="flex justify-center gap-2 mb-4">
                    {project.tags.map(t => <span key={t} className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">{t}</span>)}
                  </div>
                  <h3 className="text-4xl font-black mb-4 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8 max-w-lg mx-auto">{project.description}</p>
                  
                  <div className="flex justify-center gap-10 border-t border-slate-100 pt-8">
                    {Object.entries(project.metrics).map(([key, val]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-black">{val}</div>
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* --- 4. DATA SECTION: RESULTS & GROWTH (NEW) --- */}
      <section className="py-32 bg-slate-900 text-white rounded-[5rem] mx-4 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
              Data Driven <br /> <span className="text-blue-500">Success.</span>
            </h2>
            <p className="text-slate-400 text-xl mb-12">
              Hamare projects sirf sundar nahi hain, wo business goals achieve karne ke liye optimize kiye gaye hain.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { l: "Users Reached", v: "1.2M+", i: <Users className="text-blue-500"/> },
                { l: "Lines Written", v: "5M+", i: <Code2 className="text-blue-500"/> },
                { l: "Growth Rate", v: "250%", i: <TrendingUp className="text-blue-500"/> },
                { l: "Avg Performance", v: "98/100", i: <Zap className="text-blue-500"/> }
              ].map((s, idx) => (
                <div key={idx} className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                  <div className="mb-4">{s.i}</div>
                  <div className="text-4xl font-black mb-1">{s.v}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800" 
              className="rounded-[3rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              alt="Data Analytics"
            />
          </div>
        </div>
      </section>

      {/* --- 5. FOOTER CTA --- */}
      <section className="py-40 px-6 text-center">
        <motion.div 
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-blue-600 text-white p-16 md:p-32 rounded-[4rem] relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(37,99,235,0.4)]">
            <Rocket className="mx-auto mb-10 text-white animate-bounce" size={60} />
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-none">
              Ready to <br /> Go Live?
            </h2>
            <button className="bg-white text-blue-600 px-16 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all transform hover:scale-105">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Work;