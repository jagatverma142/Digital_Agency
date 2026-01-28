import React from 'react';
import { motion } from 'framer-motion';
// Added missing imports: Shield, Layout, Target, Rocket
import { 
  ArrowRight, Star, Check, Zap, Users, Globe, Smile, 
  Shield, Layout, Target, Rocket 
} from 'lucide-react';

const Home = () => {
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    },
    viewport: { once: true }
  };

  const floatingIcon = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <main className="pt-20 overflow-hidden bg-white">
      {/* 1. HERO SECTION */}
      <section className="px-6 py-20 md:py-32 bg-[#F9F9F9] text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
        >
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-8xl font-serif italic mb-8 leading-tight"
          >
            Building bold brands with <br />
            <span className="not-italic font-extrabold text-black">thoughtful design</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl mb-12"
          >
            At Awake, we help small startups tackle the world's biggest challenges with tailored solutions.
          </motion.p>

          <motion.div 
            className="flex flex-col items-center gap-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#6333FF] text-white pl-8 pr-2 py-2 rounded-full flex items-center gap-6 text-lg font-medium hover:shadow-[0_20px_50px_rgba(99,51,255,0.3)] transition-all group"
            >
              Start Your Project 
              <div className="bg-white rounded-full p-3 text-[#6333FF] group-hover:rotate-45 transition-transform">
                <ArrowRight size={20} />
              </div>
            </motion.button>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.img 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 + (i * 0.1) }}
                    key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    className="w-10 h-10 rounded-full border-2 border-white" alt="user" 
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex text-yellow-500"><Star size={14} fill="currentColor" /> (5/5)</div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Trusted by 1200+ brands</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-16 bg-white border-b border-gray-100">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Projects Done', value: '450+', icon: <Zap className="text-purple-500" /> },
            { label: 'Happy Clients', value: '98%', icon: <Smile className="text-blue-500" /> },
            { label: 'Team Experts', value: '25+', icon: <Users className="text-pink-500" /> },
            { label: 'Global Reach', value: '15+', icon: <Globe className="text-green-500" /> },
          ].map((stat, i) => (
            <motion.div variants={fadeInUp} key={i} className="text-center space-y-2">
              <motion.div variants={floatingIcon} animate="animate" className="flex justify-center mb-2">
                {stat.icon}
              </motion.div>
              <h4 className="text-3xl font-black">{stat.value}</h4>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. BRAND MARQUEE */}
      <div className="py-12 border-y border-gray-100 overflow-hidden bg-white">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap items-center opacity-40 grayscale"
        >
          {['TECHFLOW', 'LUMINA', 'NEXUS', 'VORTEX', 'AETHER', 'TECHFLOW', 'LUMINA', 'NEXUS', 'VORTEX', 'AETHER'].map((brand, i) => (
            <span key={i} className="text-3xl font-black tracking-tighter">{brand}</span>
          ))}
        </motion.div>
      </div>

      {/* 4. PROCESS SECTION */}
      <section className="py-24 bg-black text-white rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-serif italic">The Roadmap to <br/><span className="not-italic font-black">Success.</span></h2>
            <p className="max-w-md text-gray-400">Our proven 3-step process ensures your project is delivered on time, every time.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Discovery', desc: 'We dive deep into your brand, goals, and target audience.' },
              { step: '02', title: 'Execution', desc: 'Our team crafts high-fidelity designs and writes clean code.' },
              { step: '03', title: 'Expansion', desc: 'We launch, optimize, and help you scale to new heights.' }
            ].map((p, i) => (
              <div key={i} className="border-l border-gray-800 pl-8">
                <span className="text-purple-500 font-black text-xl mb-4 block">{p.step}</span>
                <h3 className="text-3xl font-bold mb-4">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">What we do <span className="text-purple-600">best.</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto">From the first pixel to the final line of code, we've got you covered.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Brand Identity', desc: 'Logos, color palettes, and brand guidelines that stand out.', icon: <Shield /> },
            { title: 'UX/UI Design', desc: 'Intuitive interfaces designed to keep your users engaged.', icon: <Layout /> },
            { title: 'Web Development', desc: 'High-performance, SEO-friendly websites built with React.', icon: <Zap /> },
            { title: 'Growth Strategy', desc: 'Data-driven plans to scale your user base rapidly.', icon: <Target /> },
            { title: 'Custom SaaS', desc: 'Scalable software solutions tailored to your business.', icon: <Rocket /> },
            { title: 'SEO Mastery', desc: 'Ranking you on the first page of Google consistently.', icon: <Globe /> }
          ].map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }} 
              className="p-10 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-2xl font-black mb-4">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. WORK SHOWCASE */}
      <section className="px-6 py-20 bg-white max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <motion.h2 
            variants={fadeInUp} 
            initial="initial" 
            whileInView="whileInView" 
            className="text-4xl font-serif italic"
          >
            Selected <span className="not-italic font-black">Works</span>
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            { title: 'FlowBank App', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800', category: 'UX Research' },
            { title: 'Academy.co Website', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800', category: 'Product Design' },
          ].map((work, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="space-y-4 group cursor-pointer"
            >
              <div className="overflow-hidden rounded-[3rem] bg-gray-100 shadow-2xl">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  src={work.img} className="w-full h-[500px] object-cover" alt={work.title} 
                />
              </div>
              <div className="flex justify-between items-center px-4">
                <h3 className="text-2xl font-bold group-hover:text-[#6333FF] transition-colors">{work.title}</h3>
                <span className="px-4 py-1 bg-gray-100 rounded-full text-xs font-bold uppercase tracking-widest">{work.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="px-6 py-24 bg-black text-white rounded-[4rem] mx-4 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
            <Star className="mx-auto mb-8 text-yellow-400" size={48} fill="currentColor" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-12">
            "Awake Agency transformed our startup's vision into a reality. Their attention to detail and design thinking is unparalleled."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <img src="https://i.pravatar.cc/100?img=33" className="w-16 h-16 rounded-full grayscale" alt="CEO" />
            <div className="text-left">
              <p className="font-bold text-xl">Sarah Jenkins</p>
              <p className="text-gray-500">CEO at TechFlow</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 8. PRICING */}
      <section className="px-6 py-24 bg-white text-center">
        <motion.h2 
          variants={fadeInUp} 
          initial="initial" 
          whileInView="whileInView" 
          className="text-4xl md:text-6xl font-serif italic mb-16"
        >
          Pick the plan that <span className="not-italic font-black">fits your start-up</span>
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {['Starter', 'Pro'].map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`flex-1 p-10 rounded-[3rem] text-left transition-all ${i === 1 ? 'bg-purple-200 border-4 border-purple-400' : 'bg-yellow-100'}`}
            >
              <span className="bg-white px-4 py-1 rounded-full text-xs font-bold uppercase">{plan}</span>
              <div className="text-5xl font-black my-6">{i === 0 ? '$2,500' : '$4,800'}<span className="text-lg font-normal text-gray-600">/mo</span></div>
              <ul className="space-y-4 mb-10">
                {['Design Updates', 'Unlimited Requests', 'Senior Designer', 'Email Support'].map((f, idx) => (
                  <li key={idx} className="flex gap-2 items-center"><Check size={18} className="text-gray-900" /> {f}</li>
                ))}
              </ul>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 bg-black text-white rounded-full font-bold">Choose {plan}</motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="px-6 pb-20">
        <div className="bg-[#6333FF] rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden group">
          <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">Let's build the <br /> future together.</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white text-[#6333FF] px-12 py-6 rounded-full font-black text-xl hover:bg-black hover:text-white transition-all">Book a Discovery Call</button>
              <button className="border-2 border-white text-white px-12 py-6 rounded-full font-black text-xl hover:bg-white hover:text-[#6333FF] transition-all">View Our Work</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;