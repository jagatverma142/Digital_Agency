import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { 
  Check, Sparkles, Zap, Rocket, 
  Crown, Globe, ArrowRight, ShieldCheck,
  Star, ChevronDown, HelpCircle, ArrowUpRight
} from 'lucide-react';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }
};

// --- SUB-COMPONENT: ACCORDION FOR FAQ ---
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      layout
      className={`border-b border-slate-100 py-6 transition-all ${isOpen ? 'bg-slate-50/50 px-6 rounded-2xl' : ''}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-800'}`}>
          {question}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className={isOpen ? "text-blue-600" : "text-slate-400"} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-slate-500 leading-relaxed font-medium">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- SUB-COMPONENT: MAGNETIC PRICING CARD ---
const PricingCard = ({ plan, isYearly, idx }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <motion.div
      {...fadeInUp}
      transition={{ delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-full perspective-1000"
    >
      <div className={`relative h-full p-10 rounded-[3.5rem] border transition-all duration-700 ${
        plan.featured 
        ? "bg-slate-900 text-white border-slate-800 shadow-[0_30px_60px_-15px_rgba(37,99,235,0.2)] scale-105" 
        : "bg-white text-slate-900 border-slate-100 hover:shadow-2xl shadow-sm"
      }`}>
        
        {plan.featured && (
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-xl"
          >
            Most Popular
          </motion.div>
        )}

        <div className="mb-10" style={{ transform: "translateZ(50px)" }}>
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${plan.featured ? "bg-blue-600" : "bg-blue-50 text-blue-600"}`}>
            {plan.icon}
          </div>
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-3">{plan.name}</h3>
          <p className={`text-xs mb-8 font-bold tracking-wide leading-relaxed ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>
            {plan.desc}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-black tracking-tighter transition-all duration-500">
              ${price}
            </span>
            <span className="text-sm font-bold uppercase tracking-widest opacity-40">
              {isYearly ? '/year' : '/mo'}
            </span>
          </div>
        </div>

        <ul className="space-y-5 mb-12" style={{ transform: "translateZ(30px)" }}>
          {plan.features.map((feature, i) => (
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 + i * 0.05 }}
              key={i} 
              className="flex items-center gap-4 text-sm font-bold"
            >
              <div className={`flex-shrink-0 p-1 rounded-full ${plan.featured ? "bg-blue-500/20 text-blue-400" : "bg-blue-50 text-blue-600"}`}>
                <Check size={14} strokeWidth={4} />
              </div>
              <span className={plan.featured ? "text-slate-300" : "text-slate-600"}>{feature}</span>
            </motion.li>
          ))}
        </ul>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] text-[10px] transition-all flex items-center justify-center gap-3 group/btn ${
          plan.featured 
          ? "bg-white text-slate-900 hover:bg-blue-600 hover:text-white shadow-lg" 
          : "bg-slate-900 text-white hover:bg-blue-600 shadow-xl"
        }`}>
          Start Journey
          <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const plans = [
    {
      name: "Starter",
      desc: "Perfect for freelancers & small side projects.",
      monthlyPrice: 0,
      yearlyPrice: 0,
      icon: <Zap size={28} />,
      features: ["Basic Analytics", "Single Workspace", "Community Support", "5 Projects", "Standard Speed", "Weekly Backups"],
      featured: false
    },
    {
      name: "Professional",
      desc: "Ideal for growing startups & specialized teams.",
      monthlyPrice: 49,
      yearlyPrice: 490,
      icon: <Rocket size={28} />,
      features: ["Custom Domain", "Priority Support", "Unlimited Projects", "API Access", "Advanced Metrics", "Daily Backups", "Team Collaboration"],
      featured: true
    },
    {
      name: "Enterprise",
      desc: "Built for massive scale & heavy regulation.",
      monthlyPrice: 99,
      yearlyPrice: 990,
      icon: <Crown size={28} />,
      features: ["Custom Security", "Dedicated Server", "24/7 Human Support", "White-labeling", "Global CDN", "SSO & SAML", "Compliance Packs"],
      featured: false
    }
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 pt-32 pb-20 selection:bg-blue-600 selection:text-white overflow-x-hidden font-sans">
      
      {/* --- ANIMATED MESH BACKGROUND --- */}
      <motion.div style={{ y: yRange }} className="fixed inset-0 pointer-events-none -z-10 opacity-70">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[150px]" />
      </motion.div>

      {/* --- 1. HERO SECTION --- */}
      <header className="max-w-7xl mx-auto px-6 text-center mb-40">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900 text-white mb-10 border border-slate-800 shadow-2xl">
            <Sparkles size={14} className="text-blue-400 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Investment Roadmap</span>
          </div>
          <h1 className="text-7xl sm:text-9xl md:text-[13vw] font-black tracking-tighter leading-[0.85] mb-12 uppercase">
            Built for <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic font-serif lowercase font-light">scale.</span>
          </h1>
          
          <div className="relative flex items-center justify-center gap-6 mt-16 bg-slate-100/50 backdrop-blur-md w-fit mx-auto p-3 rounded-[2.5rem] border border-slate-200 shadow-inner">
            <motion.div 
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`absolute h-[70%] w-[45%] bg-white rounded-[1.8rem] shadow-xl z-0 ${isYearly ? 'left-[52%]' : 'left-[3%]'}`}
            />
            <button 
              onClick={() => setIsYearly(false)}
              className={`relative z-10 px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-colors duration-500 ${!isYearly ? 'text-blue-600' : 'text-slate-500'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`relative z-10 px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-colors duration-500 ${isYearly ? 'text-blue-600' : 'text-slate-500'}`}
            >
              Yearly
              <span className="absolute -top-1 -right-4 bg-green-500 text-white text-[8px] px-3 py-1 rounded-full font-black shadow-lg animate-bounce">
                -20%
              </span>
            </button>
          </div>
        </motion.div>
      </header>

      {/* --- 2. PRICING GRID --- */}
      <section className="max-w-7xl mx-auto px-6 mb-56">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} isYearly={isYearly} idx={idx} />
          ))}
        </div>
      </section>

      {/* --- 3. COMPARISON TABLE --- */}
      <section className="max-w-6xl mx-auto px-6 mb-56 hidden md:block">
        <motion.div {...fadeInUp} className="text-center mb-24">
          <h2 className="text-6xl font-black tracking-tighter uppercase mb-6">Deep Analysis</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Everything you need to know about our tiers.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-slate-50 rounded-[4rem] p-16 border border-slate-100 shadow-sm"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="pb-10 font-black uppercase tracking-[0.2em] text-[10px] text-slate-400 text-left">Infrastructure</th>
                <th className="pb-10 font-black uppercase tracking-[0.2em] text-[10px] text-center text-slate-900">Starter</th>
                <th className="pb-10 font-black uppercase tracking-[0.2em] text-[10px] text-center text-blue-600">Pro</th>
                <th className="pb-10 font-black uppercase tracking-[0.2em] text-[10px] text-center text-slate-900">Global</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ["Team Seats", "1 Member", "10 Members", "Unlimited"],
                ["Storage", "5GB", "100GB", "5TB"],
                ["SSO Support", "-", "-", "SAML/Okta"],
                ["Uptime SLA", "99%", "99.9%", "99.99%"],
                ["Support", "Email", "Priority Chat", "24/7 Dedicated"]
              ].map((row, i) => (
                <motion.tr 
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.8)" }}
                  key={i} 
                  className="transition-colors"
                >
                  <td className="py-8 font-black text-slate-900 tracking-tighter text-lg">{row[0]}</td>
                  <td className="py-8 text-center text-slate-500 font-bold text-sm">{row[1]}</td>
                  <td className="py-8 text-center text-blue-600 font-black text-sm italic">{row[2]}</td>
                  <td className="py-8 text-center text-slate-500 font-bold text-sm">{row[3]}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* --- 4. FAQ SECTION --- */}
      <section className="max-w-4xl mx-auto px-6 mb-56">
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8">
          <div className="text-center md:text-left">
             <HelpCircle className="text-blue-600 mb-6" size={40} />
             <h2 className="text-5xl font-black tracking-tighter uppercase">Support <br /> Center.</h2>
          </div>
          <p className="text-slate-400 max-w-[280px] font-bold text-xs uppercase tracking-widest leading-relaxed">
            Quick answers to help you choose the right engine for your business.
          </p>
        </div>
        <div className="space-y-4">
          <FAQItem 
            question="Can I switch plans later?" 
            answer="Yes, you can upgrade or downgrade your plan at any time. If you upgrade mid-cycle, we'll pro-rate the difference. If you downgrade, you'll receive credit towards your next billing period."
          />
          <FAQItem 
            question="What is your refund policy?" 
            answer="We offer a 14-day money-back guarantee for all new subscriptions. If you're not satisfied, just reach out to our support team and we'll process your refund, no questions asked."
          />
          <FAQItem 
            question="Is my data secure?" 
            answer="Absolutely. We use bank-level encryption (AES-256) and regular security audits. Our infrastructure is hosted on SOC2 Type II compliant data centers."
          />
        </div>
      </section>

      {/* --- 5. SOCIAL PROOF (Refined) --- */}
      <section className="max-w-7xl mx-auto px-6 mb-56">
        <div className="bg-blue-50/50 rounded-[5rem] p-20 text-center relative overflow-hidden">
           <div className="absolute top-10 left-10 text-blue-200 opacity-20"><Zap size={200} /></div>
           <div className="flex justify-center gap-1 mb-10 scale-150">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-blue-600 text-blue-600 shadow-blue-500" />)}
          </div>
          <p className="text-3xl md:text-5xl font-black text-slate-800 tracking-tighter max-w-4xl mx-auto mb-16 leading-[1.1]">
            "The most scalable architecture we've ever used. Our dev speed increased by <span className="text-blue-600 underline">40%</span> in the first month."
          </p>
          <div className="flex flex-col items-center gap-4">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200" className="w-20 h-20 rounded-full border-4 border-white shadow-2xl" alt="User" />
            <div>
              <p className="font-black text-xl uppercase tracking-tighter">David Chen</p>
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">VP Engineering at Innovate</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. FINAL CTA --- */}
      <section className="px-6 mb-32">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="max-w-7xl mx-auto bg-slate-900 rounded-[5rem] p-20 md:p-40 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 opacity-10 blur-[150px] rounded-full" />
          <h2 className="text-6xl md:text-[10vw] font-black uppercase tracking-tighter mb-16 leading-[0.8]">
            Ready to <br /> <span className="italic font-serif lowercase font-light text-blue-500">evolve?</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 relative z-10">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-16 py-8 rounded-3xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-blue-600/30"
            >
              Get Started Now
            </motion.button>
            <button className="bg-white/5 border border-white/10 backdrop-blur-md px-16 py-8 rounded-3xl font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
              Talk to Sales
            </button>
          </div>
        </motion.div>
      </section>

      <footer className="py-20 text-center border-t border-slate-100">
         <Globe className="mx-auto mb-6 text-slate-200" size={30} />
         <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.8em]">Built for the modern digital economy — © 2026.</p>
      </footer>
    </div>
  );
};

export default Pricing;