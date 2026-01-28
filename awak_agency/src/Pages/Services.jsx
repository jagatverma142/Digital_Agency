import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, Code, BarChart, ArrowRight, Star, 
  Zap, Heart, ShieldCheck, MousePointer2, Layers,
  Globe, Smartphone, Rocket, Check, HelpCircle
} from 'lucide-react';

const WhiteDynamicServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-600">
      
      {/* 1. HERO SECTION (Centered) */}
      <section className="pt-40 pb-24 px-6 text-center max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <span className="bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8 inline-block border border-blue-100">
            India's Leading Digital Agency
          </span>
          <h1 className="text-6xl md:text-[90px] font-black tracking-tighter leading-[0.9] mb-10">
            Design <span className="text-blue-600 italic font-serif font-light lowercase">that</span> Speaks. <br />
            Code <span className="text-blue-600">that</span> Performs.
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-12">
            Hum sirf websites nahi banate, hum aapke brand ki digital identity ko re-define karte hain. Hamari expertise modern design concepts aur robust technology par focused hai.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-5">
            <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 group">
              Get Started Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white border-2 border-slate-100 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all text-slate-700">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. WHY CHOOSE US (New Data) */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Features</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-16">Kyun Choose Karein Humari Expertise?</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Zap className="text-yellow-500"/>, title: "Super Fast Speed", desc: "90+ PageSpeed Score ki guarantee." },
              { icon: <ShieldCheck className="text-green-500"/>, title: "Highly Secure", desc: "Enterprise-grade security protocols." },
              { icon: <Smartphone className="text-purple-500"/>, title: "Mobile First", desc: "Har screen size par perfect display." },
              { icon: <Globe className="text-blue-500"/>, title: "Global SEO", desc: "Search engines par top ranking focus." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES (Enhanced Data) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">Our Specialized <span className="text-blue-600">Services</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
              title: "UI/UX Strategy", 
              icon: <Palette size={32} color="#2563eb" />, 
              desc: "Aesthetic aur conversion-focused design. User research se lekar final prototype tak hum har step par dhyan dete hain.",
              features: ["Custom Branding", "User Flow Maps", "High-Fi Wireframes"]
            },
            { 
              title: "Full-Stack Dev", 
              icon: <Code size={32} color="#7c3aed" />, 
              desc: "Modern React & Next.js stack. Robust architecture jo aapke business scale ko handle karne ke liye ready hai.",
              features: ["E-commerce Solutions", "API Integration", "SaaS Platforms"]
            },
            { 
              title: "Growth Engine", 
              icon: <BarChart size={32} color="#db2777" />, 
              desc: "Data-driven marketing solutions. Hum aapke traffic ko convert karte hain measurable ROI aur results mein.",
              features: ["SEO Optimization", "PPC Campaigns", "Social Growth"]
            }
          ].map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -12 }}
              className="p-12 bg-white border border-slate-100 rounded-[3rem] shadow-2xl shadow-slate-200/40 text-center flex flex-col items-center group"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-500">
                <div className="group-hover:text-white transition-colors">{service.icon}</div>
              </div>
              <h3 className="text-3xl font-bold mb-5">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8">{service.desc}</p>
              <ul className="space-y-3">
                {service.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                    <Check size={16} className="text-blue-500" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. PRICING SECTION (New Section) */}
      <section className="py-24 bg-blue-600 text-white rounded-[4rem] mx-4 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-16 italic">Plan for everyone.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20">
              <h4 className="text-xl font-bold mb-4">Start-up Plan</h4>
              <div className="text-5xl font-black mb-6">₹15k<span className="text-lg opacity-60">/mo</span></div>
              <p className="mb-8 opacity-80">Chhote businesses aur freelancers ke liye best startup pack.</p>
              <button className="w-full py-4 bg-white text-blue-600 rounded-xl font-bold">Choose Starter</button>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] text-slate-900 shadow-2xl">
              <h4 className="text-xl font-bold mb-4 text-blue-600">Enterprise</h4>
              <div className="text-5xl font-black mb-6">₹45k<span className="text-lg text-slate-400">/mo</span></div>
              <p className="mb-8 text-slate-500">Bade organizations jo scalable aur long-term solutions chahte hain.</p>
              <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold">Get Pro Plan</button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STATS (Center Aligned) */}
      <section className="py-32 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6 text-center border-b border-slate-100">
        {[
          { label: "Success Rate", val: "99%", icon: <ShieldCheck /> },
          { label: "Code Reviews", val: "5k+", icon: <Rocket /> },
          { label: "Design Awards", val: "45+", icon: <Star /> },
          { label: "Happy Clients", val: "200+", icon: <Heart /> }
        ].map((stat, i) => (
          <div key={i} className="group">
            <div className="flex justify-center mb-4 text-blue-600 group-hover:animate-bounce">{stat.icon}</div>
            <div className="text-5xl font-black mb-1">{stat.val}</div>
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* 6. FAQ (New Content) */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-black text-center mb-12">Frequent Questions</h2>
        <div className="space-y-6">
          {[
            { q: "Kitne dino mein project ready hota hai?", a: "Ek standard project 2 se 4 weeks ke beech mein live ho jata hai." },
            { q: "Kya aap launch ke baad bhi help karte hain?", a: "Bilkul! Hum 24/7 support aur maintenance plans provide karte hain." }
          ].map((faq, i) => (
            <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h5 className="font-bold flex items-center gap-3 mb-2">
                <HelpCircle size={20} className="text-blue-600" /> {faq.q}
              </h5>
              <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-24 px-6 text-center bg-slate-900 text-white rounded-t-[4rem]">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-5xl font-black mb-10">Let's create something <br /> <span className="text-blue-500 italic">extraordinary.</span></h2>
           <div className="flex justify-center gap-8 mb-16">
             {["Twitter", "LinkedIn", "Instagram", "Dribbble"].map(s => (
               <a key={s} href="#" className="text-sm font-bold hover:text-blue-400 transition-colors uppercase tracking-widest">{s}</a>
             ))}
           </div>
           <p className="text-slate-500 text-sm">© 2026 Creative.Co — Built with Passion in India.</p>
        </div>
      </footer>

    </div>
  );
};

export default WhiteDynamicServices;