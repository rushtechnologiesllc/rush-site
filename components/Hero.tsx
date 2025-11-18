import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    window.location.href = isIOS ? "https://apps.apple.com/us/app/id6744488351" : "not-ios.html";
  };

  return (
    <section className="w-full flex flex-col items-center pt-40 pb-20 text-center relative z-10">
      
      {/* App Icon Style Logo - Significantly Larger */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-10 relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-b from-white/20 to-transparent rounded-[2.5rem] blur-md opacity-50"></div>
        <img 
          src="logos.jpeg" 
          alt="Rush App Icon" 
          className="w-40 h-40 md:w-52 md:h-52 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative z-10 object-cover border border-white/10"
        />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 text-white max-w-5xl mx-auto"
      >
        The Campus <br /> 
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Ticket Exchange</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-xl md:text-2xl text-zinc-400 mb-12 font-normal tracking-wide max-w-2xl leading-relaxed"
      >
        Verified student ticket resale. Secure, fast, and exclusively for your campus.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-col sm:flex-row items-center gap-6"
      >
        <button 
          onClick={handleDownload}
          className="relative group overflow-hidden rounded-full bg-white text-black px-10 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-300"
        >
           <span className="relative z-10">Download on App Store</span>
           <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </motion.div>

    </section>
  );
};

export default Hero;
